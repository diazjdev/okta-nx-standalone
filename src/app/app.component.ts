import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import {
  Observable,
  delay,
  filter,
  first,
  last,
  map,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import * as AuthActions from './auth/store/auth.actions';
import { selectUser } from './auth/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'okta-angular-quickstart';

  public isAuthenticated$!: Observable<boolean>;
  public users$ = this.store.select(selectUser);

  constructor(
    private _router: Router,
    private store: Store,
    private _oktaStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
      filter((s: AuthState) => !!s),
      tap((s) => {
        s.isAuthenticated && this.store.dispatch(AuthActions.getUserDetails());
      }),
      map((s: AuthState) => s.isAuthenticated ?? false)
    );
  }

  // public async signIn(): Promise<void> {
  //   await this._oktaAuth.signInWithRedirect();
  // }

  public signIn() {
    this.store.dispatch(AuthActions.login());
  }

  public async signOut(): Promise<void> {
    await this._oktaAuth.signOut();
  }
}
