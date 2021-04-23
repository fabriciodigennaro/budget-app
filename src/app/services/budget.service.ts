import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget: number;
  remainingMoney: number;
  // observable
  private expenses$ = new Subject<any>();


  constructor() {
    this.budget = 0;
    this.remainingMoney = 0;
   }

   addExpense(expense: any) {
      this.remainingMoney = this.remainingMoney - expense.amount;
      this.expenses$.next(expense);
   }

   getExpense(): Observable<any> {
     return this.expenses$.asObservable();
   }

}
