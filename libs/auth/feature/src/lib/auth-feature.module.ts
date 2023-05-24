import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthEffects, authReducer, authReducerKey } from 'auth/data-access';
import { EffectsModule } from '@ngrx/effects';
import { OKTA_CONFIG, OktaAuthModule, OktaConfig } from '@okta/okta-angular';

@NgModule({
  imports: [
    CommonModule,
    OktaAuthModule,
    StoreModule.forFeature(authReducerKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthFeatureModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthFeatureModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Please add it in AppModule only.'
      );
    }
  }
  static forRoot(conf?: OktaConfig) {
    return {
      ngModule: AuthFeatureModule,
      providers: [{ provide: OKTA_CONFIG, useValue: conf }],
    };
  }
}
