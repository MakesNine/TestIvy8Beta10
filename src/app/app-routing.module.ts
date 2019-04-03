import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'demo',
  pathMatch: 'full'
},
{
  path: 'demo',
  loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
