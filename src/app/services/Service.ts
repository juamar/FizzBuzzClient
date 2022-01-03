import { throwError } from 'rxjs';
import { NotFoundError } from '../validators/not-found-error';
import { MalformedObjectError } from '../validators/malformed-object-error';
import { AppError } from '../validators/app-error';
import { isDevMode } from '@angular/core';
import { LimitLessThanStartingNumberError } from '../validators/LimitLessThanStartingNumberError';

export class Service
{
    handleError(error: { status: string | number; })
    {
      if (isDevMode())
        console.warn("Error code: " + error.status);
      if ( error.status === 404 || error.status === 0 )
        return throwError(new NotFoundError(error));
      if ( error.status === 400 || error.status === 401 )
        return throwError(new MalformedObjectError(error));
      if ( error.status === 501 )
        return throwError(new LimitLessThanStartingNumberError(error));
      return throwError(new AppError(error));
    }
}