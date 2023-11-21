import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CartActions from './cart.actions';
import { CartEntity } from './cart.models';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<CartEntity> {
  selectedId?: string | number; // which Cart record has been selected
  loaded: boolean; // has the Cart list been loaded
  error?: string | null; // last known error (if any)
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: CartState;
}

export const cartAdapter: EntityAdapter<CartEntity> =
  createEntityAdapter<CartEntity>();

export const initialCartState: CartState = cartAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialCartState,
  on(CartActions.initCart, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CartActions.loadCartSuccess, (state, { cart }) =>
    cartAdapter.setAll(cart, { ...state, loaded: true })
  ),
  on(CartActions.loadCartFailure, (state, { error }) => ({ ...state, error }))
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
