import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { Service } from './Service';
import { HttpClient } from '@angular/common/http';
import { FizzBuzzRequest } from '../models/fizzbuzzRequest';
import { FizzBuzzResult } from '../models/fizzbuzzResult';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzStringService extends Service{

  private stringSource = new BehaviorSubject(new FizzBuzzResult(0, 0, ""));
  string = this.stringSource.asObservable();

  constructor(private http: HttpClient) {
    super();
  }

  getString(fizzBuzzRequest : FizzBuzzRequest): Observable<FizzBuzzResult>
  {
    let finalUrl: string;
    if (isDevMode())
      finalUrl = "https://localhost:7177/FizzBuzz/WriteFizzBuzz";
      //finalUrl = "https://fizzbuzzservice.azurewebsites.net/FizzBuzz/WriteFizzBuzz";
    else
      finalUrl = "https://fizzbuzzservice.azurewebsites.net/FizzBuzz/WriteFizzBuzz";

    return this.http.post<any>(finalUrl, fizzBuzzRequest).pipe(map(result => {
      //console.log(result);
      this.stringSource.next(result);
      return result;
    })).pipe(catchError(this.handleError));;
  }
}
