// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { createProductList } from './utils.js';
import products from './data/products.js';
import { addItemToCart, getCart } from './storage-utils.js';



const view_products_btn = document.getElementById('view-products');
const main_section_view = document.getElementById('main-section');


view_products_btn.addEventListener('click', showProducts);


function showProducts(){

    for (let items of products){
        createProductList(items, main_section_view);
    }

    view_products_btn.style.display = 'none';

    const add_to_cart_btn = document.getElementsByClassName('add-to-cart-btn');
    const item_qty = document.getElementsByClassName('qty');

    for (let btn of add_to_cart_btn){

        btn.addEventListener('click', ()=>{
    
            addItemToCart(btn.value);

            for (let i = 0; i < item_qty.length; i++){

                if (item_qty[i].id === btn.value){
                    item_qty[i].textContent = Number(item_qty[i].textContent) + 1;
                }

            }

        });
    
    }

}


