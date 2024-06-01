const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

 // Selecionar elementos do DOM
 const cartIcon = document.querySelector('.cart-icon');
 const shoppingCart = document.querySelector('.shopping-cart');
 const closeCartBtn = document.querySelector('.close-cart-btn');
 const cartItems = document.querySelector('.cart-items');
 const totalPrice = document.querySelector('.total-price');
 const checkoutBtn = document.querySelector('.checkout-btn');
 const clearCartBtn = document.querySelector('.clear-cart-btn');
 
 // Adicionar eventos aos elementos do DOM
 cartIcon.addEventListener('click', () => {
   shoppingCart.style.display = 'block';
 });
 
 closeCartBtn.addEventListener('click', () => {
   shoppingCart.style.display = 'none';
 });
 
 checkoutBtn.addEventListener('click', () => {
   alert('Compra realizada com sucesso!');
   shoppingCart.style.display = 'none';
   clearCart();
 });
 
 
 // Exemplo de produtos
 const products = [
   { name: 'Combo Gamer', image: 'product1.jpg', price: 4000 },
   { name: 'Placa Grafica', image: 'product2.jpg', price: 19500 },
   { name: 'Joysticks PS5', image: 'product3.jpg', price: 4500 },
   { name: 'Cadeira Gamer', image: 'product4.jpg', price: 22999 },
   // Mais produtos aqui
 ];
 
 // Selecionar botões de adicionar ao carrinho
 const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
 
 // Adicionar eventos aos botões de adicionar ao carrinho
 addToCartBtns.forEach((btn, index) => {
   btn.addEventListener('click', () => {
     const product = products[index];
     addToCart(product);
   });
 });
 
 // Função para adicionar itens ao carrinho
 function addToCart(product) {
   const cartItem = document.createElement('li');
   cartItem.classList.add('cart-item');
   cartItem.innerHTML = `
     <img src="${product.image}" alt="${product.name}" class="cart-item-image">
     <div class="cart-item-details">
       <span class="cart-item-name">${product.name}</span>
       <span class="cart-item-price">$${product.price}</span>
     </div>
     <button class="remove-btn">Remover</button>
   `;
   cartItems.appendChild(cartItem);
   updateTotalPrice();
 }
 
 // Função para atualizar o preço total do carrinho
 function updateTotalPrice() {
   const cartItems = document.querySelectorAll('.cart-item');
   let total = 0;
   cartItems.forEach(item => {
     const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace('$', ''));
     total += price;
   });
   totalPrice.textContent = `$${total.toFixed(2)}`;
 }
 
 // Função para remover itens do carrinho
 function removeFromCart(item) {
   item.remove();
   updateTotalPrice();
 }
 
 // Função para limpar o carrinho
 function clearCart() {
   cartItems.innerHTML = '';
   updateTotalPrice();
 }
 
 // Adicionar eventos aos botões de remover do carrinho
 cartItems.addEventListener('click', (e) => {
   if (e.target.classList.contains('remove-btn')) {
     const item = e.target.parentElement;
     removeFromCart(item);
   }
 });