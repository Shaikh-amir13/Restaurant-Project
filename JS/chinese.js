let chineseItems = [
    {
        id: '1',
        image: './images/White Sauce Pasta (Bechamel Sauce Pasta).jfif',
        item_name: 'White Sause Pasta',
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
    
      {
        id: '2',
        image: './images/RED SAUSE.jfif',
        item_name: 'Red Sause Pasta',
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '3',
        image: "./images/Pink Sauce Tortiglioni _ The Modern Proper.jfif",
        item_name: 'Pink Sause Pasta',
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
    
      {
        id: '4',
        image: "./images/Schezwan Noodles.jfif",
        item_name:'Schezwan Noodles' ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '5',
        image: "./images/Hakka Noodles.jfif" ,
        item_name:'Hakka Noodles' ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '6',
        image: "./images/chilli garlic noodle.jfif",
        item_name:"Chilli Garlic Noodles",
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '7',
        image:"./images/Honey Chilli Potatoes.jfif"  ,
        item_name:"Chilli Potato" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '8',
        image:"./images/garlic bread.jpeg" ,
        item_name: "Garlic Bread",
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '9',
        image: "./images/Honey Chilli Paneer _ Desi Chinese _ Vegetarian Main.jfif",
        item_name:"Chilli Paneer" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
      {
        id: '10',
        image:"./images/burger.jpeg" ,
        item_name: "Burger",
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },

      {
        id: '11',
        image: "./images/chesse nachos.jpeg",
        item_name:"Cheese Nachos" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
      
    
      {
        id: '12',
        image:"./images/Veggie Nachos.jpeg" ,
        item_name:"Veggies Nachos" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
    
      {
        id: '13',
        image:"./images/Taco.jpeg",
        item_name:"Taco" ,
        original_price: 320,
        rating: {
            stars: 4.5,
            count: 1400,
        },
      },
]

// Cart to store selected items
let cart = [];

// Function to display menu items
function displayMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear previous items

    chineseItems.forEach(item => {
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
        const item = chineseItems.find(item => item.id === itemId);
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
