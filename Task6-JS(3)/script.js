let container = document.querySelector(".container");
let cartBtn = document.getElementById("cartBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  cartBtn.textContent = `Cart (${cart.length})`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    data.products.forEach(product => {
      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${product.thumbnail}">
        <h4>${product.title}</h4>
        <p class="price">$${product.price}</p>
        <button onclick='addToCart(${JSON.stringify({
          title: product.title,
          price: product.price,
          image: product.thumbnail
        })})'>Add to Cart</button>
      `;

      container.appendChild(div);
    });
  });

updateCartCount();