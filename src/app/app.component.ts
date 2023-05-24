import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { Observable, filter, map, tap } from 'rxjs';
import { getUserDetails, login, selectUser } from 'auth/data-access';

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
    private store: Store,
    private _oktaStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
      filter((s: AuthState) => !!s),
      tap((s) => {
        s.isAuthenticated && this.store.dispatch(getUserDetails());
      }),
      map((s: AuthState) => s.isAuthenticated ?? false)
    );
  }

  public signIn() {
    this.store.dispatch(login());
  }

  public async signOut(): Promise<void> {
    await this._oktaAuth.signOut();
  }
}
