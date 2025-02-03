let vegItems = [{
    id: '1',
    image:"./images/Dal Tadka.jpeg",
    item_name:"Dal Tadka" ,
    original_price: 320,
    rating: {
        stars: 4.5,
        count: 1400,
    },
  },


  {
    id: '2',
    image:"./images/Dal Makhani.jpeg",
    item_name:"Dal Makhani" ,
    original_price: 250,
    rating: {
        stars: 4.2,
        count: 1140,
    },
  },


  {
    id: '3',
    image:"./images/Dal Fry Recipe.jfif",
    item_name:"Dal Fry" ,
    original_price: 120,
    rating: {
        stars: 4.0,
        count: 940,
    },
  },

  {
    id: '4',
    image:"./images/handi Paneer.jpeg",
    item_name:"Paneer Handi" ,
    original_price: 350,
    rating: {
        stars: 4.5,
        count: 1450,
    },
  },


  {
    id: '5',
    image:"./images/Kadai Paneer.jpeg",
    item_name:"Kadhai Paneer" ,
    original_price: 300,
    rating: {
        stars: 4.0,
        count: 1200,
    },
  },


  {
    id: '6',
    image:"./images/Shahi Paneer.jpeg",
    item_name:"Shahi Paneer" ,
    original_price: 290,
    rating: {
        stars: 4.4,
        count: 1670,
    },
  },


  {
    id: '7',
    image:"./images/Paneer Butter Masala.jpeg",
    item_name:"Paneer Butter Masala" ,
    original_price: 360,
    rating: {
        stars: 4.7,
        count: 1310,
    },
  },
  {
    id: '8',
    image:"./images/Bullet Naan.jpeg",
    item_name:"Butter Naan" ,
    original_price: 35,
    rating: {
        stars: 4.2,
        count: 1050,
    },
  },
  {
    id: '9',
    image:"./images/Garlic  Naan.jpeg",
    item_name:"Garlic Naan" ,
    original_price: 151,
    rating: {
        stars: 4.0,
        count: 1425,
    },
  },
  {
    id: '10',
    image:"./images/Lacchha Parantha.jpeg",
    item_name:"Laccha Paratha" ,
    original_price: 89,
    rating: {
        stars: 4.5,
        count: 1780,
    },
  },
  {
    id: '11',
    image:"./images/fried rice.jpeg",
    item_name:"Fried Rice" ,
    original_price: 149,
    rating: {
        stars: 4.4,
        count: 970,
    },
  },
  {
    id: '12',
    image:"./images/Jeera Rice.jpeg",
    item_name:"Jeera Rice" ,
    original_price: 125,
    rating: {
        stars: 4.6,
        count: 1087,
    },
  },
  {
    id: '13',
    image:"./images/Pulao.jpeg",
    item_name:"Pulao" ,
    original_price: 110,
    rating: {
        stars: 4.5,
        count: 1446,
    },
  },

  {
    id: '24',
    image: "./images/Amritsari Kulcha.jpeg",
    item_name:"Amritsari Kulcha" ,
    original_price: 120,
    rating: {
        stars: 4.5,
        count: 876,
    },
  },
  
  {
    id: '25',
    image: "./images/chola Bhatura.jpeg",
    item_name: "Chola Bhatura",
    original_price: 80,
    rating: {
        stars: 4.4,
        count: 1001,
    },
  },
]

// Cart to store selected items
let cart = [];

// Function to display menu items
// function displayMenuItems() {
//     const menuContainer = document.getElementById('menu-container');
//     menuContainer.innerHTML = ''; // Clear previous items

//     vegItems.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'menu-item';
//         itemDiv.innerHTML = `
//             <img src="${item.image}" alt="${item.item_name}" />
//             <h3>${item.item_name}</h3>
//             <p>Price: ₹${item.original_price}</p>
//             <div class="rating">Rating: ${item.rating.stars} (${item.rating.count} reviews)</div>
//             <div class="quantity-control">
//                 <button class="decrement" onclick="updateQuantity('${item.id}', -1)">-</button>
//                 <span id="quantity-${item.id}">0</span>
//                 <button class="increment" onclick="updateQuantity('${item.id}', 1)">+</button>
//             </div>
//             <button class="add-to-cart" onclick="addToCart('${item.id}')">Add to Cart</button>

//             // <img src="${item.image}" alt="${item.item_name}" />
//             // <h3>${item.item_name}</h3>
//             // <p>Price: ₹${item.original_price}</p>
//             // <div class="rating">Rating: ${item.rating.stars} (${item.rating.count} reviews)</div>
    
//             // <!-- Quantity Control Inside Item -->
//             // <div class="quantity-control">
//             //     <button class="quantity-btn decrement" id="decrement-${item.id}" onclick="updateQuantity('${item.id}', -1)">-</button>
//             //     <span id="quantity-${item.id}">0</span>
//             //     <button class="quantity-btn increment" onclick="updateQuantity('${item.id}', 1)">+</button>
//             // </div>

//             // <button class="add-to-cart" onclick="addToCart('${item.id}')">Add to Cart</button>
//         `;
//         menuContainer.appendChild(itemDiv);
//     });
// }

// / Function to display menu items
function displayMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear previous items

    vegItems.forEach(item => {
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
// function updateQuantity(itemId, change) {
//     const quantityElement = document.getElementById(`quantity-${itemId}`);
//     let currentQuantity = parseInt(quantityElement.innerText);
//     currentQuantity += change;

//     // Ensure quantity doesn't go below 0
//     if (currentQuantity < 0) {
//         currentQuantity = 0;
//     }

//     quantityElement.innerText = currentQuantity;
// }

// Function to update quantity
// function updateQuantity(itemId, change) {
//     const quantityElement = document.getElementById(`quantity-${itemId}`);
//     const decrementButton = document.getElementById(`decrement-${itemId}`);
    
//     let currentQuantity = parseInt(quantityElement.innerText);
//     currentQuantity += change;

//     // Ensure quantity doesn't go below 0
//     if (currentQuantity < 0) {
//         currentQuantity = 0;
//     }

//     quantityElement.innerText = currentQuantity;

//     // Disable decrement button if quantity is 0
//     decrementButton.disabled = currentQuantity === 0;
// }

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

// Function to update quantity
// function updateQuantity(itemId, change) {
//     const quantityElement = document.getElementById(`quantity-${itemId}`);
//     const decrementButton = document.getElementById(`decrement-${itemId}`);

//     let currentQuantity = parseInt(quantityElement.innerText);
//     currentQuantity += change;

//     // Ensure quantity doesn't go below 0
//     if (currentQuantity < 0) {
//         currentQuantity = 0;
//     }

//     quantityElement.innerText = currentQuantity;

//     // Disable decrement button if quantity is 0
//     decrementButton.disabled = currentQuantity === 0;
// }



// Function to add item to cart
function addToCart(itemId) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    const quantity = parseInt(quantityElement.innerText);

    if (quantity > 0) {
        const item = vegItems.find(item => item.id === itemId);
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

// Function to add item to cart
// function addToCart(itemId) {
//     const quantityElement = document.getElementById(`quantity-${itemId}`);
//     const quantity = parseInt(quantityElement.innerText);
//     const addToCartButton = document.getElementById(`add-to-cart-${itemId}`);

//     if (quantity > 0) {
//         const item = vegItems.find(item => item.id === itemId);
//         const cartItem = {
//             ...item,
//             quantity: quantity
//         };

//         // Check if item is already in cart
//         const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
//         if (existingItemIndex > -1) {
//             cart[existingItemIndex].quantity += quantity; // Update quantity
//         } else {
//             cart.push(cartItem); // Add new item to cart
//         }

//         // Update button style after adding
//         addToCartButton.innerText = "Added ✔";
//         addToCartButton.style.backgroundColor = "#4CAF50"; // Green color
//         addToCartButton.style.color = "white";

//         setTimeout(() => {
//             addToCartButton.innerText = "Add More";
//             addToCartButton.style.backgroundColor = "#FF9800"; // Orange color
//         }, 1500);

//         console.log(cart); // Debugging
//     } else {
//         alert('Please select a quantity greater than 0.');
//     }
// }


// Call the function to display menu items on page load
document.addEventListener('DOMContentLoaded', displayMenuItems);