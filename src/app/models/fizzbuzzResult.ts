import { FizzBuzzRequest } from "./fizzbuzzRequest";

export class FizzBuzzResult extends FizzBuzzRequest
{
    constructor(
        startRamdomNumber: number,
        limitNumber: number,
        public fizzBuzzString: string
    ){
        super(startRamdomNumber, limitNumber);
    }
}