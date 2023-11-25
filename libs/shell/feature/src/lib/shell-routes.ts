import { Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AuthGuard } from 'auth/data-access';
import { ShellComponent } from './components/shell/shell/shell.component';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },

      { path: 'login/callback', component: OktaCallbackComponent },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('dashboard')).DashboardModule,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('products/shell').then((m) => m.ProductsShellModule),
      },
    ],
  },
];
