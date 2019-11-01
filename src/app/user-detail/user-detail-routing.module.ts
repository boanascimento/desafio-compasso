import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarredComponent } from './starred/starred.component';
import { ReposComponent } from './repos/repos.component';
import { UserDetailComponent } from './user-detail.component';


const routes: Routes = [
  {
    path: 'user-detail',
    component: UserDetailComponent,
    data: {
      breadcrumb: 'Usuário'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailRoutingModule { }