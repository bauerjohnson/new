if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready) 
} else {
    ready()
}

function ready() {
    var removeitem = document.getElementsByClassName('btn-danger')
    for (var x = 0; x < removeitem.length; x++) {
        var button = removeitem[x];
        button.addEventListener('click', itemdeleted)
    }

    var chnageq = document.getElementsByClassName('cart-quantity-input')
    for (var x = 0; x < chnageq.length; x++) {
        var inputchange = chnageq[x];
        inputchange.addEventListener('change', quantity)
    }

var addthings = document.getElementsByClassName('shop-item-button')
for (var x = 0; x < addthings.length; x++) {
    var add = addthings[x];
    add.addEventListener('click', additem)
}


}



function itemdeleted(event) {
    var buttonclick = event.target
    buttonclick.parentElement.parentElement.remove()
    updatecarttotal ()
}

function quantity (event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatecarttotal ()
}

function additem (event) {
    var items = event.target
    var shopitems = items.parentElement.parentElement
    var title = shopitems.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopitems.getElementsByClassName('shop-item-price')[0].innerText
    var image = shopitems.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, image)
    additemstocart(title, price, image)
    updatecarttotal ()
}

function additemstocart(title, price, image) {
    var cartdiv = document.createElement('div')
    cartdiv.classList.add('cart-row')
    var shopitem = document.getElementsByClassName('cart-items')[0]
    var noduplicate = shopitem.getElementsByClassName('cart-item-image')
    for (var x = 0; x < noduplicate.length; x++) {
        if (noduplicate[x].src == image) {
        alert('item already added')
        return
        }
    }
    var shopcontainer = ` 
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
    cartdiv.innerHTML = shopcontainer
    shopitem.append(cartdiv)
    cartdiv.getElementsByClassName('btn-danger')[0].addEventListener('click', itemdeleted)
    cartdiv.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantity)
}

function updatecarttotal () {
    var cartitemcontainer = document.getElementsByClassName('cart-items')[0]
    var cartrow = cartitemcontainer.getElementsByClassName('cart-row')
    var total = 0
    for (var x = 0; x < cartrow.length; x++) {
        var cr = cartrow[x];
    var price = cr.getElementsByClassName('cart-price')[0]
    var number = cr.getElementsByClassName('cart-quantity-input')[0]
    var prices = parseFloat(price.innerText.replace('$', ''))
    var numbers = number.value
    total = total + (prices * numbers)
}
total = Math.round(total * 100) / 100 
document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total 
}