import { NgModule, isDevMode } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthFeatureModule } from 'auth/feature';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuard, IAuthConfig, oktaAuthConfig } from 'auth/data-access';

const config: IAuthConfig = {
  issuer: 'https://dev-55604879.okta.com/oauth2/default',
  clientId: '0oa9n150r05tJiqt05d7',
  redirectUri: window.location.origin + '/login/callback',
};
const oktaAuth = oktaAuthConfig(config);
const routes: Routes = [
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthFeatureModule.forRoot(oktaAuth),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  exports: [RouterModule, AsyncPipe],
})
export class ShellFeatureModule {}
