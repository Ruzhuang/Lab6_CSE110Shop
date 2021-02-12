// Script.js
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem("users")==null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
      localStorage.setItem("users",JSON.stringify(data))
      fetchFinished();
    });
  }
  else{
    fetchFinished();
  }
});
let cart = 0;
function fetchFinished(){
  if(localStorage.getItem("cart")!=null){
    cart = localStorage.getItem("cart");
    document.getElementById("cart-count").innerHTML = cart;
    
  }
  let productArr = JSON.parse(localStorage.getItem("users"));
  console.log(productArr);
  for(let i = 0; i<productArr.length; i++){
    let current = productArr[i];
    let newli = document.createElement("product-item");
    const shadow = newli.shadowRoot;
    newli.className="product";
    shadow.querySelector('.price').textContent = "$"+current.price;
    shadow.querySelector("img").src = current.image;
    shadow.querySelector("img").alt = current.title;
    shadow.querySelector('.title').textContent = current.title;
    shadow.querySelector('button').id = i;
    console.log(localStorage);
    if(localStorage.getItem(i)){
      console.log("here")
      shadow.querySelector('button').setAttribute("added",true);
      shadow.querySelector('button').textContent = "Remove from Cart";
    }
    else{
      shadow.querySelector('button').setAttribute("added",false);
    }
    shadow.querySelector('button').onclick = function(){clicked(this)};
    document.getElementById("product-list").appendChild(newli);
  }

  function clicked(e){
    if(e.getAttribute("added")== "false"){
      alert ('Added to Cart!');
      cart++;
      localStorage.setItem("cart",cart);
      document.getElementById("cart-count").innerHTML = cart;
      localStorage.setItem(e.id,"added");
      e.textContent = "Remove from Cart";
      e.setAttribute("added",true);
    }
    else{
      e.textContent = "Add to Cart";
      cart--;
      localStorage.setItem("cart",cart);
      document.getElementById("cart-count").innerHTML = cart;
      localStorage.removeItem(e.id);
      e.setAttribute("added",false);
    }
  }

}
