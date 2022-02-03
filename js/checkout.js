function validate() {
    let valid = true;
    let card = document.querySelector("#card").value;
    if (isEmpty(card) || (!isValidCreditCard(card))) {
        document.querySelector("#cardErr").style.visibility = "visible";
        valid = false;
    } else {
        document.querySelector("#cardErr").style.visibility = "hidden";
    }

    let date = document.querySelector("#date").value;
    if (isEmpty(date)) {
        document.querySelector("#dateErr").style.visibility = "visible";
        valid = false;
    } else {
        document.querySelector("#dateErr").style.visibility = "hidden";
    }

    let cvv = document.querySelector("#cvv").value;
    if (isEmpty(cvv) || (cvv.length != 3)) {
        document.querySelector("#cvvErr").style.visibility = "visible";
        valid = false;
    } else {
        document.querySelector("#cvvErr").style.visibility = "hidden";
    }

    let name = document.querySelector("#name").value;
    if (isEmpty(name)) {
        document.querySelector("#nameErr").style.visibility = "visible";
        valid = false;
    } else {
        document.querySelector("#nameErr").style.visibility = "hidden";
    }

    if (document.querySelector("#term").checked == false) {
        document.querySelector("#termErr").style.visibility = "visible";
        valid = false;
    } else {
        document.querySelector("#termErr").style.visibility = "hidden";
    }

    // remove local storage
    if (valid) {
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('totalCost');
    }
    return valid;
}

function show_hide_model(isShow) {
    let add_address_model = document.querySelector(".processing");
    let blocks = document.querySelectorAll("body,header,footer");
    let blockList = [...blocks];
    if (isShow) {
        //add_address_model.style.display = "block";
        add_address_model.style.visibility = "visible";
        blockList.forEach(item => {
            item.style.overflow = "hidden";
        });
    } else {
        add_address_model.style.visibility = "hidden";
        blockList.forEach(item => {
            item.style.overflow = "visible";
        });

    }
}
(function() {
    let btn = document.querySelector(".submit_btn");
    btn.addEventListener("click", e => {
        if (validate()) {
            show_hide_model(true);
            setTimeout(() => {
                window.location.href = "order_complete.html";
            }, 2000);
        }
    });
    show_hide_model(false);
    let closeButton = document.querySelector(".processing>span");
    closeButton.addEventListener("click", e => {
        show_hide_model(false);
    });
})();