// Toggle sidebar for mobile view
const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
});

// Add to Cart functionality
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const okBtn = document.getElementById('ok-btn');
const thankYou = document.getElementById('thank-you');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const product = this.getAttribute('data-product');
        addToCart(product);
        showPopup();
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showPopup() {
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
    showThankYou();
}

// function showThankYou() {
//     thankYou.style.display = 'block';
//     thankYou.style.opacity = '1';
//     setTimeout(() => {
//         thankYou.style.opacity = '0';
//         setTimeout(() => {
//             thankYou.style.display = 'none';
//         }, 2000);
//     }, 2000);
// }

closeBtn.addEventListener('click', hidePopup);
okBtn.addEventListener('click', hidePopup);

