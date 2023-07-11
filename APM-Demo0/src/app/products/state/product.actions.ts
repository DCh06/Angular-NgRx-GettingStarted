import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle product code');

export const setCurrentProduce = createAction(
  '[Product] Set current product',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear current product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize current product'
);

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction(
  '[Product] Load success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load fail',
  props<{ error: string }>()
);
