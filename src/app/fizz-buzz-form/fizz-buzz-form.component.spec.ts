import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzFormComponent } from './fizz-buzz-form.component';

describe('FizzBuzzFormComponent', () => {
  let component: FizzBuzzFormComponent;
  let fixture: ComponentFixture<FizzBuzzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
