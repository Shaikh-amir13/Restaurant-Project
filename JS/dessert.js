let dessertItems = [
    {
        id: '1',
        image:"./images/Ice Cream Sundae.jpeg",
        item_name:"Ice Cream Sundae" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '2',
        image:"./images/Blueberry Cheesecake.jpeg",
        item_name:"Blueberry Cheesecake" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
    
      {
        id: '3',
        image:"./images/Grilled Peach & Rosemary Prosecco.jpeg",
        item_name:"Chocolate Sundae" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
    
      {
        id: '4',
        image:"./images/gulab jamun.jpeg",
        item_name:"Gulab Jamun" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
    
      {
        id: '5',
        image:"./images/Pastries.jpeg",
        item_name:"Pastries" ,
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

    dessertItems.forEach(item => {
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
        const item = dessertItems.find(item => item.id === itemId);
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