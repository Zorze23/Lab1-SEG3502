import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  result: number | string | null = null;
  calculChosi = '';

  selectOperation(operation: string): void {
    this.calculChosi = operation;
    this.resetResult();
  }

  resetResult(): void {
    this.result = null;
  }

  calculate(p: string, d: string): void {
    const pNombre = Number(p);
    const dNombre = Number(d);

    switch (this.calculChosi) {
      case '+':
        this.result = pNombre + dNombre;
        break;

      case '-':
        this.result = pNombre - dNombre;
        break;

      case '*':
        this.result = pNombre * dNombre;
        break;

      case '/':
        if (dNombre === 0) {
          this.result = "indéfini";
        } else {
          this.result = pNombre / dNombre;
      }
  break;
    }
  }
}