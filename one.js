// function
function products (quantity,increase,totalId,price) {
    // quantity 
    var inputQuantity = document.getElementById(quantity);
    var quantity = parseInt(inputQuantity.value);
    if (increase==true) {
        quantity+=1;
        inputQuantity.value = quantity;
    }
    else if (quantity > 0) {
        quantity-=1;
        inputQuantity.value = quantity;
    }

    // one product total with quantity
    var total = document.getElementById(totalId);
    var totalPrice = price * quantity;
    total.innerText = totalPrice;

    // all total price
    getTotalPrice ();
}

// sub total, tax, total
function getQuantity (quantityId) {
    var inputQuantity = document.getElementById(quantityId);
    var quantity = parseInt(inputQuantity.value);
    return quantity;
}
function getTotalPrice (){
    var subTotal = document.getElementById('sub-total');
    var tax = document.getElementById('tax');
    var allProductsTotal = document.getElementById('total');
    var iphoneTotalPrice = getQuantity('iphone-quantity') * 400;
    var xiaomiTotalPrice = getQuantity('xiaomi-quantity') * 250;
    var subTotalPrice = iphoneTotalPrice + xiaomiTotalPrice;
    var taxes = subTotalPrice / 10;
    var total = subTotalPrice + taxes;

    subTotal.innerText = subTotalPrice;
    tax.innerText = taxes;
    allProductsTotal.innerText = total;
}
    
    
// iphone
document.getElementById('iphone-plus').addEventListener('click',function(){
    products('iphone-quantity',true,'iphone-total',400);
})
document.getElementById('iphone-minus').addEventListener('click',function(){
    products('iphone-quantity',false,'iphone-total',400);
})

// xiaomi
document.getElementById('xiaomi-plus').addEventListener('click',function(){
    products('xiaomi-quantity',true,'xiaomi-total',250);
})
document.getElementById('xiaomi-minus').addEventListener('click',function(){
    products('xiaomi-quantity',false,'xiaomi-total',250);
})


































