import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent },
];

@NgModule({
  imports: [AuthModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
