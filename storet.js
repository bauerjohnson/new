
var removeitem = document.getElementsByClassName('btn-danger')
for (var x = 0; x < removeitem.length; x ++) {
    var button = removeitem[x];
    button.addEventListener('click', function (event) {
        var buttonclicked = event.target;
        buttonclicked.parentElement.parentElement.remove()
        updatectotal()
    })
}


function updatectotal() {
    var cartcontainer = document.getElementsByClassName('cart-items')[0]
    var cartrow = cartcontainer.getElementsByClassName('cart-row')
    var total = 0
    for (var x = 0; x < cartrow.length; x++) {
        var cartall = cartrow[x]
    var priceelement = cartall.getElementsByClassName('cart-price')[0]
    var quantityinput = cartall.getElementsByClassName('cart-quantity-input')[0]
    var prices = parseFloat(priceelement.innerText.replace('$', ''))
    var qi = quantityinput.value
    total = total + (prices * qi)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total 
}

<div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
                        <span class="cart-item-title">T-Shirt</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="Images/Album 3.png" width="100" height="100">
                        <span class="cart-item-title">Album 3</span>
                    </div>
                    <span class="cart-price cart-column">$9.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="2">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>