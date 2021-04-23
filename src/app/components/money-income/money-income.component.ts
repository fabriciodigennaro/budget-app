import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-money-income',
  templateUrl: './money-income.component.html',
  styleUrls: ['./money-income.component.css']
})
export class MoneyIncomeComponent implements OnInit {

  amount: number;
  noAmount: boolean;

  constructor(private _budgetService: BudgetService, 
              private router: Router) { 
    this.amount = 0;
    this.noAmount = false;
  }

  ngOnInit(): void {
  }

  addAmount() {
    if(this.amount > 0) {
      this.noAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remainingMoney = this.amount;
      this.router.navigate(['/expenses'])
    } else {
      this.noAmount = true;
    }

  }

}
