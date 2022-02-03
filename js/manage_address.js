(function() {
    let addAddress = document.querySelector(".title div:last-child");
    let svg = document.querySelector(".address-list .address-box svg");
    addAddress.addEventListener("click", e => {
        show_hide_model(true);
    });
    // svg.addEventListener("click", e => {
    //     window.scrollTo(0, 0);
    //     show_hide_model(true);
    // });
    show_hide_model(false);
    let closeButton = document.querySelector(".add_address_model span");
    closeButton.addEventListener("click", e => {
        show_hide_model(false);
    });
    let save_change = document.querySelector("#save_change");
    save_change.addEventListener("click", e => {
        let form_valid = true;
        let add_name = document.querySelector("#add_name");
        if (isEmpty(add_name.value)) {
            $('#warning_name').css('visibility', 'visible');
            form_valid = false;
        } else {
            $('#warning_name').css('visibility', 'hidden');
        }
        let add_street = document.querySelector("#add_street");
        if (isEmpty(add_street.value)) {
            $('#warning_street').css('visibility', 'visible');
            form_valid = false;
        } else {
            $('#warning_street').css('visibility', 'hidden');
        }
        let add_city = document.querySelector("#add_city");
        if (isEmpty(add_city.value)) {
            $('#warning_city').css('visibility', 'visible');
            form_valid = false;
        } else {
            $('#warning_city').css('visibility', 'hidden');
        }
        let add_pc = document.querySelector("#add_pc");
        if (isEmpty(add_pc.value)) {
            $('#warning_postal_code').css('visibility', 'visible');
            form_valid = false;
        } else {
            $('#warning_postal_code').css('visibility', 'hidden');
        }
        let add_phone = document.querySelector("#add_phone");
        if (isEmpty(add_phone.value)) {
            $('#warning_phone').css('visibility', 'visible');
            form_valid = false;
        } else {
            $('#warning_phone').css('visibility', 'hidden');
        }
        if (!form_valid) {
            // if form is not valid, returning the function without saving into the cookie
            // the saving function is still not working
            // pending update from Bill
            // console.log('form does not pass validation, returning');
            return;
        }

        let str = "{add_name:" + add_name.value + ",add_street:" + add_street.value + ",add_city:" + add_city.value + ",add_pc:" + add_pc.value + ",add_phone:" + add_phone.value + "};";
        cookieNS.createCookie("address5", str, true)

        show_hide_model(false);
        document.querySelector(".address-list").textContent = "Your address is under validation and will be popped up upon approval, thank you."
    });
    // });

    function show_hide_model(isShow) {
        let add_address_model = document.querySelector(".add_address_model");
        let blocks = document.querySelectorAll("body,header,footer");
        let blockList = [...blocks];
        if (isShow) {
            add_address_model.style.display = "block";
            blockList.forEach(item => {
                item.style.overflow = "hidden";
            });
            document.querySelector(".address-list").textContent = "";
        } else {
            add_address_model.style.display = "none";
            blockList.forEach(item => {
                item.style.overflow = "visible";
            });

        }
    }
})();