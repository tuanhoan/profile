import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tuanhoan' },
  { path: 'tuanhoan', loadChildren: () => import('./tuanhoan/tuanhoan.module').then(m => m.TuanHoanModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'testjson', loadChildren: () => import('').then(m => m.LoginModule) },
  // { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  // { path: 'caculator', loadChildren: () => import('./pages/caculator/caculator.module').then(m => m.CaculatorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
