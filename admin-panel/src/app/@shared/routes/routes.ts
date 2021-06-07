import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../@modules/users/users.module').then((m) => m.UsersModule),
  },
];