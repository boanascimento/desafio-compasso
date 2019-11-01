import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: {
      breadcrumb: 'Pesquisar usuários'
    }
  },
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
