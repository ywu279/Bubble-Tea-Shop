(function() {
    let acceptBtn = document.querySelector(".cookie-button .accept");
    let declineBtn = document.querySelector(".cookie-button .decline");
    acceptBtn.addEventListener("mouseenter", e => {
        e.currentTarget.classList.add('mouseenter');
        e.currentTarget.classList.remove('mouseleave');
        declineBtn.classList.remove('mouseenter');
        declineBtn.classList.add('mouseleave');
    });
    declineBtn.addEventListener("mouseenter", e => {
        e.currentTarget.classList.add('mouseenter');
        e.currentTarget.classList.remove('mouseleave');
        acceptBtn.classList.remove('mouseenter');
        acceptBtn.classList.add('mouseleave');
    });
    let warning = document.querySelector(".cookie-warning");
    let warningClose = document.querySelector(".cookie-warning>span");
    warningClose.addEventListener("click", e => {
        warning.style.visibility = 'hidden';
    });
    acceptBtn.addEventListener("click", e => {
        let kvs = cookieNS.getCookie();
        if (kvs === undefined || !kvs.hasOwnProperty("USERID")) {
            let userId = cookieNS.createUserId();
            cookieNS.createCookie("USERID", userId);
            if (typeof daystoLive === "number") {
                cookieNS.createCookie("max-age", 30 * 60 * 60 * 24, false);
            }
        } else if (kvs["USERID"] === "") {
            let userId = cookieNS.createUserId();
            cookieNS.setCookieValue("USERID", userId);
        }
        warning.style.visibility = 'hidden';
    });
    declineBtn.addEventListener("click", e => {
        cookieNS.setCookieValue("USERID", "", false);
        warning.style.visibility = 'hidden';
    });
    let usrid = cookieNS.getCookieValue("USERID");
    if (!usrid) {
        warning.style.visibility = 'visible';
    } else {
        warning.style.visibility = 'hidden';
    }
})();