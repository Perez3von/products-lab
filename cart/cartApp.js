import { searchId, totalCost, generateTableRow, convertCurr } from '../utils.js';
import products from '../data/products.js';
//import cart from '../data/cartItems.js';
import { getCart, clearCart, CART } from '../storage-utils.js';


const tableBody = document.getElementById('table-body');
const clear_cart = document.getElementById('clear-cart');

const place_order = document.getElementById('place-order');

//console.log(cart);

function renderCart(){

    const cart = getCart();
    console.log(cart.length);
    for (let item of cart) {
        const product = searchId(products, item.id);
        const tr = generateTableRow(product, item);
        tableBody.appendChild(tr);
    }

    const totalDom = document.getElementById('order-total');
    const total = totalCost(products, cart);
    totalDom.textContent = convertCurr(total);


}

renderCart();

clear_cart.addEventListener('click', ()=>{

    clearCart();

    location.reload();


});


place_order.addEventListener('click', ()=>{
    const cart = getCart();
    if (cart.length === 0){
        
        alert('You have nothing in your cart.');
        
    }

    else {

        alert('Your Oder Has Been Processed!');
        clearCart();
        window.location.href = '../index.html';
    
    }

});



