import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { Whoweare1Component } from './pages/whoweare1/whoweare1.component';
import { Whoweare2Component } from './pages/whoweare2/whoweare2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'whoweare1', component: Whoweare1Component},
  {path: 'whoweare2', component: Whoweare2Component},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
