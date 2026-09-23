import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  result: number | null = null;
  errorMessage = '';
  selectedOperation = '';

  selectOperation(operation: string): void {
    this.selectedOperation = operation;
    this.resetResult();
  }

  resetResult(): void {
    this.result = null;
    this.errorMessage = '';
  }

  calculate(first: string, second: string): void {
    this.resetResult();

    if (first.trim() === '' || second.trim() === '') {
      this.errorMessage = 'Veuillez entrer deux nombres';
      return;
    }

    const firstNumber = Number(first);
    const secondNumber = Number(second);

    switch (this.selectedOperation) {
      case '+':
        this.result = firstNumber + secondNumber;
        break;
      case '-':
        this.result = firstNumber - secondNumber;
        break;
      case '*':
        this.result = firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber === 0) {
          this.errorMessage = 'indéfini';
        } else {
          this.result = firstNumber / secondNumber;
        }
        break;
    }
  }
}
