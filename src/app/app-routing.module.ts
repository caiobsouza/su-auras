import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { HomeComponent } from './components/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { CodeComponent } from './components/code/code.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quizz/:id',
    component: QuizzComponent
  },
  {
    path: 'subscribe/:id',
    component: SubscriptionFormComponent
  },
  {
    path: 'code/:id',
    component: CodeComponent
  },
  {
    path: 'result/:id',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
