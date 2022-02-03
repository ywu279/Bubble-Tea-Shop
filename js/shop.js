let carts = document.querySelectorAll(".add-cart");



// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem("cartNumber");

//     productNumbers = parseInt(productNumbers);

//     if (productNumbers) {
//         localStorage.setItem("cartNumber", productNumbers + 1)
//     } else {
//         localStorage.setItem("cartNumber", 1);
//     }
// }

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");


    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", parseFloat(cartCost + product.price).toFixed(2));
    } else {
        localStorage.setItem("totalCost", parseFloat(product.price).toFixed(2));
    }
}

(function() {
    [...carts].forEach(item => {
        content = item.innerHTML;
        content += "<span class=\"checkmark hidden\"><div class=\"checkmark_circle\"></div><div class=\"checkmark_stem\"></div><div class=\"checkmark_kick\"></div></span>";
        item.innerHTML = content;
        let children = item.children;
        children[0].classList.add("show");
    });
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", e => {
            let component = e.currentTarget;
            let children = component.children;
            children[0].classList.toggle("show");
            children[0].classList.toggle("hidden");
            children[1].classList.toggle("hidden");
            children[1].classList.toggle("show");
            setTimeout(() => {
                children[0].classList.toggle("show");
                children[0].classList.toggle("hidden");
                children[1].classList.toggle("hidden");
                children[1].classList.toggle("show");
            }, 300);
            setItems(product[i]);
            totalCost(product[i])
        })
    }
})();