import { searchId, totalCost, generateTableRow, convertCurr } from '../utils.js';
import products from '../data/products.js';
import cart from '../data/cartItems.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const product = searchId(products, item.id);
    const tr = generateTableRow(product, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = totalCost(products, cart);
totalDom.textContent = convertCurr(total);