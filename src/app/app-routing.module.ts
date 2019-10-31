import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
