const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

let products = [];
let cart = [];

async function loadProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  products = data.products;
  renderProducts();
}

function renderProducts() {
  productsEl.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <img src="${product.thumbnail}" class="w-full h-40 object-contain mb-3">
      <h3 class="font-semibold line-clamp-1">${product.title}</h3>
      <p class="text-green-600 font-semibold mt-1">$${product.price}</p>

      <button
        class="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded font-semibold"
        onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;

    productsEl.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const found = cart.find(item => item.id === id);

  if (found) {
    found.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      qty: 1
    });
  }
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex gap-3 items-center";

    div.innerHTML = `
      <img src="${item.image}" class="w-12 h-12 object-contain">
      <div class="flex-1">
        <p class="font-semibold text-sm">${item.name}</p>
        <p class="text-gray-500">$${item.price}</p>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>

      <button onclick="removeItem(${item.id})" class="text-red-500">✕</button>
    `;

    cartItemsEl.appendChild(div);
  });

  updateTotal();
}

function changeQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = "$" + total.toFixed(2);
}

loadProducts();
