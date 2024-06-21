import { Product } from "../../product.model";


export class LoadProducts {
    static readonly type = '[Product] Load';
}

export class AddProduct {
    static readonly type = '[Product] Add';
    constructor(public payload: Product) {}
}

export class DeleteProduct {
    static readonly type = '[Product] Delete';
    constructor(public payload: number) {}
}

export class UpdateProduct {
    static readonly type = '[Product] Update';
    constructor(public payload: Product) {}
}