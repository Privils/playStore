if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    alert('Please click the cart icon to add things to your cart and they should appear at the bottom of the shopping list ')
 } else {
    ready()
 }
 function ready(){
    const removeButton = document.getElementsByClassName('btn-danger');
    for(let i = 0; i < removeButton.length; i++){
       let button = removeButton[i]
       button.addEventListener('click', removerFunction);
    }
 
    const addToCartIcons = document.querySelectorAll('#shopping');
    for(let i = 0; i < addToCartIcons.length; i++){
       let iconButton = addToCartIcons[i]
       iconButton.addEventListener('click', addToCartIconsButtons);
    }
    const quantityToChange = document.getElementsByClassName('cart-quantity-input');
    for(let i = 0; i < quantityToChange.length; i++){
       let input = quantityToChange[i]
       input.addEventListener('change', quantityInput)
    }
    document.getElementsByClassName(' btn-purchase')[0].addEventListener('click', purchacedItem)
 
 }
 
 function purchacedItem(){
    alert('thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()) {
       cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal() 
 }
 function removerFunction(event){
    let button = event.target;
    button.parentElement.parentElement.remove();
    updateCartTotal()
 }
 
 function addToCartIconsButtons(event){
    let iconButton = event.target;
    let container = iconButton.parentElement.parentElement;
    let title = container.getElementsByClassName('name')[0].innerText;
    let imgSrc = container.getElementsByClassName('image-store')[0].src;
    let price = container.getElementsByClassName('item-price')[0].innerText;
    console.log(title, imgSrc, price)
    addToCartIconFunction(title, imgSrc, price);
    updateCartTotal() 
    increaseTrolly()
 }
 function addToCartIconFunction(title, imgSrc, price){
 let newContainer = document.createElement('div');
 newContainer.classList.add('cart-row');
 let cartItems = document.getElementsByClassName('cart-items')[0];
 let ItemName = cartItems.getElementsByClassName('name');
 console.log(ItemName)
 for(let i = 0; i < ItemName.length; i++){
    if(ItemName[i].innerText == title){
       alert('you have already added this one to your cart if you would like more please increase the quantity')
       return
    }
 }
 let newContainerEl = `
 <div class="cart-item cart-column">
 <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
 <span class="name">${title}</span>
 </div>
 <span class="cart-price cart-column ">${price}</span>
 <div class="cart-quantity cart-column">
 <input class="cart-quantity-input" type="number" value="1">
 <button class="btn btn-danger item-price" type="button">REMOVE</button>
 </div>`
 newContainer.innerHTML = newContainerEl;
 cartItems.append(newContainer);
 newContainer.getElementsByClassName('btn-danger')[0].addEventListener('click', removerFunction);
 newContainer.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityInput);
 }
 function quantityInput(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
       input.value = 1;
    }
    updateCartTotal() 
 }
 function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
       var cartRow = cartRows[i]
       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
       var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
  [0] 
  var price = parseFloat(priceElement.innerText.replace('R', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
 }
 
 
 const trollyUpdate = document.querySelector('#cart-icon')
 console.log(trollyUpdate)
 let count = 0;
 function increaseTrolly(){
    count += 1
    trollyUpdate.innerText = count;
    if(count > 0){
       trollyUpdate.style.color = 'red'
    }
 }


 let heartBeat = 0;
 const heartThis = document.getElementById('heart-icon');
 heartThis.addEventListener('click', increaseHeartBeat)
 console.log(heartThis)
 function increaseHeartBeat(){
    heartBeat += 1
  heartThis.innerText = heartBeat;
    if(heartBeat > 0){
       heartThis.style.color = 'pink'
    }
 }