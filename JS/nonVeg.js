let nonVegItems = [
    {
        id: '1',
        image:"./images/Chicken 65.jpg",
        item_name:"Chicken 65" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '2',
        image:"./images/Chicken Afgani.jpg",
        item_name:"Chicken Afgani" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '3',
        image:"./images/Chicken Biryani.jpg",
        item_name:"Chicken Biryani" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '4',
        image:"./images/Chicken Lollipop.jpg",
        item_name:"Chicken Lollipop" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '5',
        image:"./images/Chicken Masala.jpg",
        item_name:"Chicken Masala" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '6',
        image:"./images/Chicken Mughlai.jpg",
        item_name:"Chicken Mughlai" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      }
];

// Cart to store selected items
let cart = [];

// Function to display menu items
function displayMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear previous items

    nonVegItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.item_name}" />
            <h3>${item.item_name}</h3>
            <p>Price: ₹${item.original_price}</p>
            <div class="rating">Rating: ${item.rating.stars} (${item.rating.count} reviews)</div>
            <div class="quantity-control">
                <button class="decrement" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span id="quantity-${item.id}">0</span>
                <button class="increment" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart('${item.id}')">Add to Cart</button>
        `;
        menuContainer.appendChild(itemDiv);
    });
}

// Function to update quantity
function updateQuantity(itemId, change) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    currentQuantity += change;

    // Ensure quantity doesn't go below 0
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }

    quantityElement.innerText = currentQuantity;
}

// Function to add item to cart
function addToCart(itemId) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    const quantity = parseInt(quantityElement.innerText);

    if (quantity > 0) {
        const item = nonVegItems.find(item => item.id === itemId);
        const cartItem = {
            ...item,
            quantity: quantity
        };

        // Check if item is already in cart
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity; // Update quantity
        } else {
            cart.push(cartItem); // Add new item to cart
        }

        alert(`${item.item_name} added to cart!`);
        console.log(cart); // For debugging
    } else {
        alert('Please select a quantity greater than 0.');
    }
}

// Call the function to display menu items on page load
document.addEventListener('DOMContentLoaded', displayMenuItems);