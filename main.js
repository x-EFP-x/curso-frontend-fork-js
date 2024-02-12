const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuKartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingKart = document.querySelector('#kart-product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuKartIcon.addEventListener('click', toggleShoppingKart);

console.log({
    navEmail,
    desktopMenu
});

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingKart.classList.add('inactive');
};

function toggleShoppingKart(){
    mobileMenu.classList.add('inactive');
    shoppingKart.classList.toggle('inactive');
};

const products = [];
products.push({
    name: 'Celular',
    price: 2500000,
    image: 'https://imagiq.com/wp-content/uploads/2023/11/001-galaxy-a54-5g-amazing-lime-front.jpg'
})
products.push({
    name: 'Motocicleta',
    price: 25000000,
    image: 'https://autoshowtv.com.mx/wp-content/uploads/2023/10/Yamaha-MT-03.jpg'
})
products.push({
    name: 'rtx 4060',
    price: 1800000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_732382-MLU70360569007_072023-O.webp'
})

//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(products)