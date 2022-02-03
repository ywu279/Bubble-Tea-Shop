function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    let cartCost = localStorage.getItem("totalCost");

    //console.log(cartItems);
    productContainer.innerHTML = "<div class=\"products-header\">\n" +
        "                <h2 class=\"products-title\">Product</h2>\n" +
        "                <h2 class=\"price\">Price</h2>\n" +
        "                <h2 class=\"quantity\">Qty</h2>\n" +
        "                <h2 class=\"total\">Total</h2>\n" +
        "            </div>";
    if (cartItems && productContainer) {

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="oneline">
            <div class="products-title">${item.name}</div>
            <div class="price">$${item.price}</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">$${(item.inCart * item.price).toFixed(2)}</div>
            </div>
            `;
        });

        document.querySelector(".sum").innerHTML += `
            Total Price: $${cartCost}
        `;


    }
}
(function() {
    displayCart();
})();