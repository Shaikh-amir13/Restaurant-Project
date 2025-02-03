let mainContainer = document.querySelector('.menu-bar');
let cart = [];

item = item.map((menuItem) => ({ ...menuItem, quantity: 0 }));

fetchMenu();

function addToBag(itemId) {
  const selectedItem = item.find(menuItem => menuItem.id === itemId.toString());
  if (selectedItem) {
    selectedItem.quantity++;
    updateQuantityDisplay(itemId);
    updateCart();
  }
}

function removeFromBag(itemId) {
  const selectedItem = item.find(menuItem => menuItem.id === itemId.toString());
  if (selectedItem && selectedItem.quantity > 0) {
    selectedItem.quantity--;
    updateQuantityDisplay(itemId);
    updateCart();
  }
}

function updateQuantityDisplay(itemId) {
  const quantityElement = document.querySelector(`#quantity-${itemId}`);
  const selectedItem = item.find(menuItem => menuItem.id === itemId.toString());

  if (quantityElement && selectedItem) {
    quantityElement.textContent = selectedItem.quantity;
  }
}

function addToCart(itemId) {
  const selectedItem = item.find(menuItem => menuItem.id === itemId.toString());
  if (selectedItem && selectedItem.quantity > 0) {
    const existingItem = cart.find(cartItem => cartItem.id === itemId.toString());
    
    if (existingItem) {
      existingItem.quantity = selectedItem.quantity;
    } else {
      cart.push({ ...selectedItem });
    }
  }
  updateCart();
}

function updateCart() {
  let cartContainer = document.querySelector('.cart-container');
  if (!cartContainer) {
    cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    document.body.appendChild(cartContainer);
  }

  let cartHtml = `<h2>Cart</h2>`;
  if (cart.length === 0) {
    cartHtml += `<p>Your cart is empty.</p>`;
  } else {
    cartHtml += `<ul>`;
    cart.forEach(cartItem => {
      cartHtml += `
        <li>
          <img src="${cartItem.image}" alt="${cartItem.item_name}" width="50">
          ${cartItem.item_name} - ${cartItem.quantity} x RS ${cartItem.original_price} 
          = RS ${cartItem.quantity * cartItem.original_price}
        </li>
      `;
    });
    cartHtml += `</ul>`;
  }

  cartContainer.innerHTML = cartHtml;
}

function fetchMenu() {
  if (!mainContainer) return;
  let innerHtml = ``;

  item.forEach((menuItem) => {
    innerHtml += `
      <div class="box">
        <img src="${menuItem.image}" alt="${menuItem.item_name}">
        <div class="textpart">${menuItem.item_name}</div>
        <div class="price-part">RS ${menuItem.original_price}</div>
        <div class="rating">${menuItem.rating.stars}⭐ By ${menuItem.rating.count / 100}k Users</div>
        
        <div class="quantity-controls">
          <button class="decrement" onclick="removeFromBag(${menuItem.id})">-</button>
          <span id="quantity-${menuItem.id}" class="quantity">${menuItem.quantity}</span>
          <button class="increment" onclick="addToBag(${menuItem.id})">+</button>
        </div>

        <button class="add-to-cart" onclick="addToCart(${menuItem.id})">Add to Cart</button>
      </div>
    `;
  });

  mainContainer.innerHTML = innerHtml;
}
