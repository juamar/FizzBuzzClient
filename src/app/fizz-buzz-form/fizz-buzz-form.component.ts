import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FizzBuzzRequest } from '../models/fizzbuzzRequest';
import { FizzBuzzStringService } from '../services/fizzbuzz-string.service';

@Component({
  selector: 'fizz-buzz-form',
  templateUrl: './fizz-buzz-form.component.html',
  styleUrls: ['./fizz-buzz-form.component.css']
})
export class FizzBuzzFormComponent implements OnInit {

  loadingData: boolean = false;
  isLimitLessThanStartingNumber: boolean = false;
  @Output('submitDataSuccess') searchSuccess: EventEmitter<void> = new EventEmitter<void>();
  @Output('submitDataStart') searchStart: EventEmitter<void> = new EventEmitter<void>();
  @Output('submitDataEnd') searchEnd: EventEmitter<void> = new EventEmitter<void>();

  form = new FormGroup(
    {
      startRandomNumber: new FormControl('', Validators.required),
      limitNumber: new FormControl('', Validators.required),
    }
  );
  
  constructor(private fizzBuzzStringService: FizzBuzzStringService) { }

  get startRandomNumber()
  {
    return this.form.get('startRandomNumber');
  }

  get limitNumber()
  {
    return this.form.get('limitNumber');
  }

  ngOnInit(): void {
  }

  validateLimitLessThanStartingNumber()
  {
    //touched attribute not working as expected.

    let notNull = this.limitNumber?.value != "" 
      && this.startRandomNumber?.value != "" 
      && this.limitNumber?.value != null 
      && this.startRandomNumber?.value != null 
      && this.limitNumber?.value != undefined 
      && this.startRandomNumber?.value != undefined;

    console.log(notNull);

    let expr = this.limitNumber?.value < this.startRandomNumber?.value && notNull;
    if ( expr == undefined )
      this.isLimitLessThanStartingNumber = false;
    else
      this.isLimitLessThanStartingNumber = expr; 
  }

  submit()
  {
    //console.log(this.form.value);
    if (!this.form.invalid)
    {
      let fizzBuzzRequest : FizzBuzzRequest = new FizzBuzzRequest(this.startRandomNumber?.value, this.limitNumber?.value);
      //console.log(routeRequest);

      if (!this.loadingData)
      {
        this.loadingData = true;
        this.searchStart.emit();
        //this.routeDemoService.getRoute(this.origin, this.destination, this.form.get("evitarAutopistas").value, this.form.get("evitarPeajes").value).subscribe( result => {
        this.fizzBuzzStringService.getString(fizzBuzzRequest).subscribe( result => {
          //console.log(result);
          this.searchSuccess.emit();
        }, error => {
          this.loadingData = false;
          throw error;
        }, () => {
          this.loadingData = false;
          this.searchEnd.emit();
        });
      }
      else
      {
        alert("We are already loading the data. Please wait.");
      }
    }
    else
    {
      alert("Please fill all the data before sumbitting. Thanks!");
    }
    //console.log(data.value.evitarPeajes == true);
  }

}
