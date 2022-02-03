var cookieNS = {
    createCookie: function(name, value, cryp = true) {
        var cookie = document.cookie;
        if (cryp) {
            cookie += (name + "=" + encodeURIComponent(value) + ";");
        } else {
            cookie += (name + "=" + value + ";");
        }
        document.cookie = cookie;
    },
    setCookieValue: function(name, value, cryp = true) {
        let str = "";
        let all = this.getCookie();
        if (!all) {
            this.createCookie(name, value, cryp);
            return;
        }
        if (cryp) {
            all[name] = encodeURIComponent(value);
        } else {
            all[name] = value;
        }
        for (const [key, val] of Object.entries(all)) {
            str += (key + "=" + val + ";");
        }
        document.cookie = str;
    },
    getCookie: function() {
        var cookie = {}
        var all = document.cookie;
        if (all === "")
            return;
        var list = all.split(";");
        for (let kv in list) {
            let str = list[kv];
            let p = str.indexOf("=");
            let key = str.substring(0, p);
            let val = str.substring(p + 1);
            cookie[key] = val;
        }
        return cookie;
    },
    getCookieValue(name, cryp = true) {
        let all = this.getCookie();
        if (all) {
            if (cryp) {
                return decodeURIComponent(all[name]);
            }
            return all[name];
        }
        return all;
    },
    createUserId: function() {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
};
(function() {
    let menulogo = document.querySelector("header nav>span:first-child");
    let menuLis = document.querySelectorAll("header ul li");
    let menuList = [menulogo, ...menuLis];
    let myaccount = document.querySelector("#responsive_icon span:first-child");
    let cart = document.querySelector("#responsive_icon span:nth-child(2)")
    menuList.push(myaccount);
    menuList.push(cart)
    menuList.forEach((item, idx) => {
        item.addEventListener('click', e => {
            if (idx == 0 || idx == 1) {
                window.location = "index.html";
            }
            if (idx == 2) {
                window.location = "index.html#our_story";
            }
            if (idx == 3) {
                window.location = "shop.html";
            }
            if (idx == 4) {
                window.location = "faq.html";
            }
            if (idx == 5) {
                window.location = "contact_us.html";
            }
            if (idx == 6) {
                window.location = "myaccount.html";
            }
            if (idx == 7) {
                window.location = "cart.html";
            }
        });
    });
    let mobileLis = document.querySelectorAll(".mobile_menu ul li");
    let mobileList = [...mobileLis];
    mobileList.forEach((item, idx) => {
        item.addEventListener('click', e => {
            if (idx == 0) {
                window.location = "index.html#our_story";
            }
            if (idx == 1) {
                window.location = "shop.html";
            }
            if (idx == 2) {
                window.location = "faq.html";
            }
            if (idx == 3) {
                window.location = "contact_us.html";
            }

        });
    });
    let listIcon = document.querySelector(".responsive_list");
    listIcon.addEventListener('click', e => {
        let mobile_menu = document.querySelector(".mobile_menu");
        if (mobile_menu.style.display == 'none' || !mobile_menu.style.display) {
            mobile_menu.style.display = 'block';
        } else {
            mobile_menu.style.display = 'none';
        }
    });
})();