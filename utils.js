
export function createProductList(obj, parentNode){

    const li_ele = document.createElement('li');
    
    const add_product_btn = document.createElement('button');
    add_product_btn.value = obj.id;
    add_product_btn.classList.add('add-to-cart-btn');
    const add_product_btn_text = document.createTextNode('Add to cart');
    add_product_btn.appendChild(add_product_btn_text);
       
    const price_tag = document.createElement('span');
    const price_tag_text = document.createTextNode(`Price: $${obj.price}`);
    price_tag.style.fontWeight = 'bold';

    const brand_name = document.createElement('h3');
    const brand_text = document.createTextNode(obj.brand);
    brand_name.style.fontWeight = 'bold';
    
    const product_description = document.createElement('span');
    const product_description_text = document.createTextNode(`Description: ${obj.description}`);
        
    const product_image = document.createElement('img');
    product_image.style.height = '150px';
    product_image.style.width = '200px';
    product_image.src = `./assets/${obj.image}`;
    product_image.alt = obj.brand;

    price_tag.appendChild(price_tag_text);
    product_description.appendChild(product_description_text);
    brand_name.appendChild(brand_text);

    li_ele.appendChild(brand_name);
    li_ele.appendChild(product_image);
    li_ele.appendChild(product_description);
    li_ele.appendChild(price_tag);
    li_ele.appendChild(add_product_btn);

    parentNode.appendChild(li_ele);

}



export function searchId(items, id){
    
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function convertCurr(num) {
    return num.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function generateTableRow(productItem, cartItem){
    
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = productItem.brand;
    tr.appendChild(tdName);
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = convertCurr(productItem.price);
    tr.appendChild(tdPrice);
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = productItem.price * cartItem.qty;
    tdTotal.textContent = convertCurr(total);
    tr.appendChild(tdTotal);

    return tr;

}

export function totalCost(product_items, cart){
    let orderTotal = 0;
    
    for (let item of cart) {
        const product = searchId(product_items, item.id);
        orderTotal += product.price * item.qty;
    }
    return orderTotal;
}




