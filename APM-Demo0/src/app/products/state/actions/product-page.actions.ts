import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const toggleProductCode = createAction('[Product] Toggle product code');

export const setCurrentProduct = createAction(
  '[Product] Set current product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear current product'
);

export const deleteProduct = createAction(
  '[Product] Delete product',
  props<{ product: Product }>()
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize current product'
);

export const loadProducts = createAction('[Product Page] Load');

export const updateProduct = createAction(
  '[Product Page] Update',
  props<{ product: Product }>()
);

export const createProduct = createAction(
  '[Product Page] create',
  props<{ product: Product }>()
);
