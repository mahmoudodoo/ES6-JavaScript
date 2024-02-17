 
document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { id: 1, name: "Recipe 1", description: "Description 1", price: 10, imgUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Recipe 2", description: "Description 2", price: 15, imgUrl: "https://via.placeholder.com/150" },
        { id: 3, name: "Recipe 3", description: "Description 3", price: 9, imgUrl: "https://via.placeholder.com/150" },
        { id: 4, name: "Recipe 4", description: "Description 4", price: 4, imgUrl: "https://via.placeholder.com/150" },
        { id: 5, name: "Recipe 5", description: "Description 5", price: 6, imgUrl: "https://via.placeholder.com/150" },
        { id: 6, name: "Recipe 6", description: "Description 6", price: 20, imgUrl: "https://via.placeholder.com/150" },
        { id: 7, name: "Recipe 7", description: "Description 7", price: 33, imgUrl: "https://via.placeholder.com/150" },
        { id: 8, name: "Recipe 8", description: "Description 8", price: 23, imgUrl: "https://via.placeholder.com/150" },
        { id: 9, name: "Recipe 9", description: "Description 9", price: 7, imgUrl: "https://via.placeholder.com/150" },
    ];

    const recipeList = document.getElementById('recipe-list');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalAmount = document.getElementById('total-amount');
    const closeButton = document.querySelector('.close-button');
    let cart = [];

    // Display recipes
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${recipe.imgUrl}" alt="${recipe.name}">
            <div class="card-container">
                <h4><b>${recipe.name}</b></h4>
                <p>${recipe.description}</p>
                <p>$${recipe.price}</p>
                <button onclick="addToCart(${recipe.id})">Add to Cart</button>
            </div>
        `;
        recipeList.appendChild(card);
    });

    // Add to Cart function
    window.addToCart = (id) => {
        const recipe = recipes.find(recipe => recipe.id === id);
        cart.push(recipe);
        updateCartUI();
    };

    // Remove from Cart function
    window.removeFromCart = (id) => {
        cart = cart.filter(recipe => recipe.id !== id);
        updateCartUI();
    };

    // Update Cart UI
    function updateCartUI() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(recipe => {
            const item = document.createElement('div');
            item.innerHTML = `
                <p>${recipe.name} - $${recipe.price} <button class="remove-btn" onclick="removeFromCart(${recipe.id})">Remove</button></p>
            `;
            cartItems.appendChild(item);
            total += recipe.price;
        });
        totalAmount.textContent = total;
        cartCount.textContent = cart.length;
    }

    // Handle modal
    document.querySelector('.nav-cart').addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    };
});
