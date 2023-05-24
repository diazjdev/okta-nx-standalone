import { InjectionToken } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule, OktaConfig } from '@okta/okta-angular';

export interface IAuthConfig {
  issuer: string;
  clientId: string;
  redirectUri: string;
}

export const APP_OKTA_CONFIG = new InjectionToken<IAuthConfig>('okta-config');

export function oktaAuthConfig(config: IAuthConfig): OktaConfig {
  const oktaAuth = new OktaAuth({
    ...config,
  });

  return { oktaAuth };
}
