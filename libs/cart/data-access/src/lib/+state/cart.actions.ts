import { createAction, props } from '@ngrx/store';
import { CartEntity } from './cart.models';

export const initCart = createAction('[Cart Page] Init');

export const loadCartSuccess = createAction(
  '[Cart/API] Load Cart Success',
  props<{ cart: CartEntity[] }>()
);

export const loadCartFailure = createAction(
  '[Cart/API] Load Cart Failure',
  props<{ error: any }>()
);
