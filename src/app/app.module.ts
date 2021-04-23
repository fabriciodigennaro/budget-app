import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { MoneyIncomeComponent } from './components/money-income/money-income.component';
import { EnterExpenseComponent } from './components/expenses/enter-expense/enter-expense.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    MoneyIncomeComponent,
    EnterExpenseComponent,
    ListExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
