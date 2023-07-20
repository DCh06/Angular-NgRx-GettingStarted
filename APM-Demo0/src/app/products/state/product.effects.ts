import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../product';
import { ProductAPIActions, ProductPageActions } from './actions';

@Injectable()
export class ProductEffects {
  /**
   *
   */
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            ProductAPIActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductAPIActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.updateProduct),
      concatMap((action) => {
        return this.productService.updateProduct(action.product).pipe(
          map((product) => ProductAPIActions.updateProductSuccess({ product })),
          catchError((error) =>
            of(ProductAPIActions.updateProductsFailure({ error }))
          )
        );
      })
    );
  });

  deleteProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.deleteProduct),
      mergeMap((action) => {
        return this.productService.deleteProduct(action.product.id).pipe(
          map(() =>
            ProductAPIActions.deleteProductSuccess({ product: action.product })
          ),
          catchError((error) =>
            of(ProductAPIActions.deleteProductFailure({ error }))
          )
        );
      })
    );
  });

  createProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.createProduct),
      mergeMap((action) => {
        return this.productService.createProduct(action.product).pipe(
          map((product) => {
            return ProductAPIActions.createProductSuccess({ product });
          }),
          catchError((error) => {
            return of(ProductAPIActions.createProductsFailure({ error }));
          })
        );
      })
    );
  });
}
