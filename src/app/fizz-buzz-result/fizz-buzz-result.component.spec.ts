import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzResultComponent } from './fizz-buzz-result.component';

describe('FizzBuzzResultComponent', () => {
  let component: FizzBuzzResultComponent;
  let fixture: ComponentFixture<FizzBuzzResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
