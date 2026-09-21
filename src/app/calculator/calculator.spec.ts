import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculatrice: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    calculatrice = fixture.componentInstance;
    await fixture.whenStable();
  });

  it(() => {
    expect(calculatrice).toBeTruthy();
  });
});
