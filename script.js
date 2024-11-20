function changeImage(element) {
    const mainImg = document.getElementById("main-img");
    mainImg.src = element.src;
}

const mainImage = document.querySelector('.main-img');
mainImage.addEventListener('mouseenter', function() {
    mainImage.style.transform = 'scale(1.2)';
    mainImage.style.filter = 'brightness(90%)';
});
mainImage.addEventListener('mouseleave', function() {
    mainImage.style.transform = 'scale(1)';
    mainImage.style.filter = 'brightness(100%)';
});

let cartCount = 0;

const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCountElem = document.getElementById('cart-count');
const messageElem = document.getElementById('message');
const quantityInput = document.getElementById('quantity');


addToCartBtn.addEventListener('click', function() {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        cartCount += quantity;
        cartCountElem.textContent = cartCount;
        messageElem.style.display = 'block';

        setTimeout(() => {
            messageElem.style.display = 'none';
        }, 3000);
    }
});
