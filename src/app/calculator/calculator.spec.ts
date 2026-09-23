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

  it('should create', () => {
    expect(calculatrice).toBeTruthy();
  });

  it('should add 2 + 3 = 5', () => {
    calculatrice.selectOperation('+');
    calculatrice.calculate('2', '3');
    expect(calculatrice.result).toBe(5);
  });

  it('should subtract 10 - 4 = 6', () => {
    calculatrice.selectOperation('-');
    calculatrice.calculate('10', '4');
    expect(calculatrice.result).toBe(6);
  });

  it('should multiply 6 * 7 = 42', () => {
    calculatrice.selectOperation('*');
    calculatrice.calculate('6', '7');
    expect(calculatrice.result).toBe(42);
  });

  it('should divide 10 / 4 = 2.5', () => {
    calculatrice.selectOperation('/');
    calculatrice.calculate('10', '4');
    expect(calculatrice.result).toBeCloseTo(2.5);
  });

  it('should return "indéfini" when dividing by 0', () => {
    calculatrice.selectOperation('/');
    calculatrice.calculate('5', '0');
    expect(calculatrice.result).toBeNull();
    expect(calculatrice.errorMessage).toBe('indéfini');
  });

  it('should show an error when a field is empty', () => {
    calculatrice.selectOperation('+');
    calculatrice.calculate('', '3');
    expect(calculatrice.result).toBeNull();
    expect(calculatrice.errorMessage).toBe('Veuillez entrer deux nombres');
  });

  it('should reset the result when a new operation is selected', () => {
    calculatrice.selectOperation('+');
    calculatrice.calculate('1', '1');
    calculatrice.selectOperation('-');
    expect(calculatrice.result).toBeNull();
  });
});
