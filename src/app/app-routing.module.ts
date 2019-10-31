import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';


const routes: Routes = [

  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   data: {
  //     breadcrumb: 'Pesquisar usuários'
  //   },
  //   // children: [

  //   // ]
  // },

  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
{
        path: 'user-detail',
        component: UserDetailComponent,
        data: {
          breadcrumb: 'Usuário'
        },
        children: [
          {
            path: 'repos',
            component: UsersComponent,
            data: {
              breadcrumb: 'Repositórios'
            },
          },
          {
            path: 'starred',
            component: UsersComponent,
            data: {
              breadcrumb: 'Estrelou'
            },
          },
        ]
      }
*/