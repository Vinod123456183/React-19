export interface CartItem {
    id: number;
    rname: string;
    price: number;
    imgdata: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}