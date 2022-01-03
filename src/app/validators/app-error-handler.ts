import { ErrorHandler } from '@angular/core';
import { LimitLessThanStartingNumberError } from './LimitLessThanStartingNumberError';
import { MalformedObjectError } from './malformed-object-error';
import { NotFoundError } from './not-found-error';

export class AppErrorHandler implements ErrorHandler
{
    handleError(error: any)
    {
        console.error(error);
        if (error instanceof MalformedObjectError)
            alert("Error sending data to FizzBuzz service. There is some issue with the data. Check the fields in the form or contact Juan. :S");
        else if (error instanceof NotFoundError)
            alert("There was an issue connecting to FizzBuzz Service. Contact Juan for help. :S");
        else if (error instanceof LimitLessThanStartingNumberError)
            alert("Limit number cannot be lower than starting number.");
        else
            alert('An unexpected error has ocurred. It can be a network issue :S');
    }
}