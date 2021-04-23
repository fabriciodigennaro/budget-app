import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MoneyIncomeComponent } from './components/money-income/money-income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/moneyIncome', pathMatch: 'full' },
  { path: 'moneyIncome', component: MoneyIncomeComponent },
  { path: 'expenses', component: ExpensesComponent},
  { path: '**', redirectTo: '/moneyIncome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
