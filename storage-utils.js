import { searchId } from './utils.js';

export const CART = [];
//?


export function getCart(){
    
    let stringCart = localStorage.getItem(CART) || '[]';
    
    const cart = JSON.parse(stringCart); 
    return cart;
}




export function addItemToCart(id){


    const cart = getCart();
    const item = searchId(cart, id);

    if (item){


        item.qty += 1;

    }

    else {

        const newItem = { id:id, qty:1 };
        cart.push(newItem);
    }

    localStorage.setItem(CART, JSON.stringify(cart));

}

export function clearCart(){
    localStorage.removeItem(CART);
}