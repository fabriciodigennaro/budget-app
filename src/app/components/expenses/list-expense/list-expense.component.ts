import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  remainingMoney: number;
  listExpenses: any[] = [];


  constructor(private _budgetService: BudgetService) { 
    this.budget = 0;
    this.remainingMoney = 0;
    this.subscription = this._budgetService.getExpense().subscribe(data => {
      this.remainingMoney = this.remainingMoney - data.amount;
      this.listExpenses.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remainingMoney = this._budgetService.remainingMoney;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  colorsRemaining() {
    if(this.budget / 4 > this.remainingMoney) {
      return 'alert alert-danger';
    } else if(this.budget / 2 > this.remainingMoney) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

}
