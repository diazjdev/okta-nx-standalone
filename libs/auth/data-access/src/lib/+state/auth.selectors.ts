import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const authFeatureSelector = createFeatureSelector('auth');

export const selectUser = createSelector(
  authFeatureSelector,
  ({ user }: any) => user
);
