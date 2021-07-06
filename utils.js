export const products = [


    {
        brand: 'Air Jordans',
        category: 'Sports',
        description: 'Basketball shoes for anyone.',
        price: 90.00,
        sizes:[7, 8, 10],
        color:['red/white', 'blue/white', 'yellow/black'],
        image: 'air-jordans.jpg',
        id: 'AJ001'

    },
    {
        brand: 'Converse Classics',
        category: 'Casual',
        description:'Classics for casual dressing.',
        price: 60.00,
        sizes:[6, 9, 11],
        color:['gray/white', 'blue/white/black', 'pink/black'],
        image: 'converse-classics.jpg',
        id: 'CC001'
    
    },
    {
        brand: 'Adidas High Top',
        category: 'Casual',
        description: 'Casual High Tops to wear for any occasion.',
        price: 120.00,
        sizes:[6, 7, 9],
        color:['red/gray/white', 'pink/white', 'brown/black/white'],
        image: 'adidas-high-tops.jpg',
        id: 'AHT001'
        
    },

    {
        brand: 'Air Jordans Classics',
        category: 'Casual',
        description: 'Basketball casual shoes.',
        price: 100.00,
        sizes:[5, 6, 9, 10],
        color:['red/white', 'pink/red/yellow', 'black/gray'],
        image: 'air-jordans-classics.png',
        id: 'AJC001'
        
    },

    {
        brand: 'Nike Xtreme Run',
        category: 'Running/Outdoors',
        description: 'Comfortable and lightweight running shoes.',
        price: 95.00,
        sizes:[6, 7, 8, 9, 10, 11],
        color:['red/gray/white', 'pink/white', 'brown/black/white'],
        image: 'nike-xtreme-run.jpg',
        id: 'NXR001'
        
    },

    {
        brand: 'Adidas Sandals',
        category: 'Outdoor',
        description: 'Casual beach sandals.',
        price: 40.00,
        sizes:[6, 7, 8, 9],
        color:['gray/white', 'black/white'],
        image: 'adidas-sandals.jpg',
        id: 'AS001'
        
    }


];


export function createProductList(obj, parentNode){

    const li_ele = document.createElement('li');
    
    const add_product_btn = document.createElement('button');
    add_product_btn.value = obj.id;
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





