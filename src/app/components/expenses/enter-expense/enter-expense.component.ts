import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css'],
})
export class EnterExpenseComponent implements OnInit {
  expenseName: string;
  amount: number;
  wrongForm: boolean;
  wrongText: string;

  constructor(private _budgetService: BudgetService) {
    this.expenseName = '';
    this.amount = 0;
    this.wrongForm = false;
    this.wrongText = '';
  }

  ngOnInit(): void {}

  addExpense() {
    if (this.amount > this._budgetService.remainingMoney) {
      this.wrongForm = true;
      this.wrongText = 'La cantidad ingresada no puede ser inferior al restante';
      return;
    }

    if (this.expenseName === '' || this.amount === 0) {
      this.wrongForm = true;
      this.wrongText = 'Nombre de gasto o cantidad incorrectos';
    } else {
      // Create Expense object

      const EXPENSE = {
        name: this.expenseName,
        amount: this.amount,
      };

      // Send the object

      this._budgetService.addExpense(EXPENSE);

      // Reset form

      this.wrongForm = false;
      this.expenseName = '';
      this.amount = 0;
    }
  }
}
