import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OKTA_CONFIG, OktaAuthModule, OktaConfig } from '@okta/okta-angular';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OktaAuthModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Please add it in AppModule only.'
      );
    }
  }
  static forRoot(conf?: OktaConfig) {
    return {
      ngModule: AuthModule,
      providers: [{ provide: OKTA_CONFIG, useValue: conf }],
    };
  }
}
