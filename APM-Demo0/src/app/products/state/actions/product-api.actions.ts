import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const loadProductsSuccess = createAction(
  '[Product API] Load success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Load fail',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product API] Update Success',
  props<{ product: Product }>()
);

export const updateProductsFailure = createAction(
  '[Product API] Update Fail',
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  '[Product API] create Success',
  props<{ product: Product }>()
);

export const createProductsFailure = createAction(
  '[Product API] create Fail',
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product API] Delete product success',
  props<{ product: Product }>()
);
export const deleteProductFailure = createAction(
  '[Product API] Delete product failure',
  props<{ error: string }>()
);
