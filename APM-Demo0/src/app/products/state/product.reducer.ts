import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
// import * as ProductActions from './actions/product-page.actions';
import { ProductPageActions, ProductAPIActions } from './actions';
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductAPIActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductAPIActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),
  on(ProductAPIActions.updateProductSuccess, (state, action): ProductState => {
    const updateProducts = state.products.map((product) =>
      product.id === action.product.id ? action.product : product
    );
    return {
      ...state,
      products: updateProducts,
      error: '',
      currentProductId: action.product.id,
    };
  }),
  on(ProductAPIActions.updateProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductAPIActions.deleteProductSuccess, (state, action): ProductState => {
    const updateProducts = state.products.filter(
      (product) => product.id !== action.product.id
    );

    return {
      ...state,
      products: updateProducts,
      error: '',
      currentProductId: null,
    };
  }),
  on(ProductAPIActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductAPIActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: '',
    };
  })
);
