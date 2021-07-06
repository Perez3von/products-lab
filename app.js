// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { products, createProductList } from './utils.js';



const view_products_btn = document.getElementById('view-products');
const main_section_view = document.getElementById('main-section');


view_products_btn.addEventListener('click', showProducts);


function showProducts(){

    for (let items of products){
        createProductList(items, main_section_view);
    }

    view_products_btn.style.display = 'none';


}