import { Component, OnInit } from '@angular/core';
import { FizzBuzzResult } from '../models/fizzbuzzResult';
import { FizzBuzzStringService } from '../services/fizzbuzz-string.service';

@Component({
  selector: 'fizz-buzz-result',
  templateUrl: './fizz-buzz-result.component.html',
  styleUrls: ['./fizz-buzz-result.component.css']
})
export class FizzBuzzResultComponent implements OnInit {

  fizzBuzzString: string = "";
  constructor(private fizzBuzzStringService: FizzBuzzStringService) { }

  ngOnInit(): void {
    this.fizzBuzzStringService.string.subscribe((result: FizzBuzzResult) => {
      if (result.fizzBuzzString == "" || result.fizzBuzzString == null || result.fizzBuzzString == undefined)
        this.fizzBuzzString = "Complete the form to get a FizzBuzz String.";
      else
        this.fizzBuzzString = result.fizzBuzzString;
    });
  }

}
