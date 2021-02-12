// product-item.js

class ProductItem extends HTMLElement {
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});
    const style = document.createElement('style');
    let price = document.createElement('p');
    price.className="price"
    let photo = document.createElement("img");
    let title = document.createElement("p");
    title.className = "title";
    let addCart = document.createElement("button");
    addCart.textContent = "Add to Cart";
    const text = document.createTextNode("123");
    price.appendChild(text);
    style.textContent = `.price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `
    shadow.appendChild(style);
    shadow.appendChild(photo);
    shadow.appendChild(title);
    shadow.appendChild(price);
    shadow.appendChild(addCart);

  }
}

customElements.define('product-item', ProductItem);
