import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  catchError,
  switchMap,
  tap,
  filter,
  withLatestFrom,
  take,
  skip,
  takeLast,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
// import { OktaAuthStateService } from '@okta/okta-angular';
import * as AuthActions from './auth.actions';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';

// @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private _oktaService: OktaAuthStateService
  ) {
    this.oktaAuth;
  }

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        switchMap(() => from(this.oktaAuth.signInWithRedirect()))
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUserDetails),
      switchMap(() =>
        from(this.oktaAuth.getUser()).pipe(
          map((res) => AuthActions.loginSuccess({ user: res })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.logout),
  //     switchMap(() =>
  //       this.oktaAuth.signOut().pipe(
  //         map(() => AuthActions.logoutSuccess()),
  //         catchError((error) => of(AuthActions.logoutFailure({ error })))
  //       )
  //     )
  //   )
  // );
}
