// Dummy product data (you can replace it with your own product data)
const products = [
    {
        name: 'Product 1',
        price: 49.99,
        image: 'bag.jpg',
    },
    {
        name: 'Product 2',
        price: 29.99,
        image: 'bag2.jpg',
    },
	{
        name: 'Product 3',
        price: 29.99,
        image: 'bag7.jpg',
    },
	{
        name: 'Product 4',
        price: 29.99,
        image: 'bag4.jpg',
    },
	{
        name: 'Product 5',
        price: 29.99,
        image: 'bag6.jpg',
    },
	{
        name: 'Product 6',
        price: 29.99,
        image: 'bag8.jpg',
    },
	{
        name: 'Product 7',
        price: 29.99,
        image: 'bag9.jpg',
    },
    // Add more products as needed
];

// Generate product cards dynamically
const productListing = document.querySelector('.product-listing');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" data-product="${product.name}" data-price="${product.price}">Add to Cart</button>
    `;
    productListing.appendChild(productCard);
});

// Handle adding items to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cart = document.querySelector('.cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productName = event.target.dataset.product;
    const productPrice = parseFloat(event.target.dataset.price);

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="placeholder.jpg" alt="${productName}">
        <p>${productName}</p>
        <p>$${productPrice.toFixed(2)}</p>
    `;

    cart.appendChild(cartItem);
}

// Handle checkout
const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', checkout);

function checkout() {
    // You can implement the checkout process here
    alert('Thank you for your purchase!');
    cart.innerHTML = '';
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}