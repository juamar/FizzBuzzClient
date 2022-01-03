import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FizzBuzzFormComponent } from './fizz-buzz-form/fizz-buzz-form.component';
import { FizzBuzzResultComponent } from './fizz-buzz-result/fizz-buzz-result.component';
import { FizzBuzzStringService } from './services/fizzbuzz-string.service';
import { AppErrorHandler } from './validators/app-error-handler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FizzBuzzFormComponent,
    FizzBuzzResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FizzBuzzStringService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
