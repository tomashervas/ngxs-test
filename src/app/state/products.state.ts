import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { Product } from "../../product.model";
import { AddProduct, DeleteProduct, LoadProducts, UpdateProduct } from "./products.actions";

export interface ProductStateModel {
    products: Product[];
}



@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: []
    }
})
@Injectable()
export class ProductState {


    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }


    @Action(LoadProducts)
    loadProducts({ setState }: StateContext<ProductStateModel>) {
        const products: Product[] = [
            { id: 1, name: 'Product 1', price: 10, description: 'Product 1 description' },
            { id: 2, name: 'Product 2', price: 20, description: 'Product 2 description' },
    
        ];
        setState({ products });
    }

    @Action(AddProduct)
    addProduct({ getState, setState }: StateContext<ProductStateModel>, { payload }: AddProduct) {
        const state = getState();
        const products = [...state.products, payload];
        setState({ products });
    }

    @Action(DeleteProduct)
    removeProduct({ getState, setState }: StateContext<ProductStateModel>, { payload }: DeleteProduct) {
        const state = getState();
        const products = state.products.filter(product => product.id !== payload);
        setState({ products });
    }


    @Action(UpdateProduct)
    updateProduct({ getState, setState }: StateContext<ProductStateModel>, { payload }: UpdateProduct) {
        const state = getState();
        const products = state.products.map(product => product.id === payload.id ? payload : product);
        setState({ products });
    }



}
