function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

window.onscroll = function showHeader() {
    const header = document.querySelector('.header-top')
    if (window.pageYOffset > 150) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
}

// Burger
document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

const burger = document.querySelector('.menu-icon-wrapper');
const menu = document.querySelector('.header-top__nav');

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
});


// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header-top').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

const topNavListLink = document.querySelectorAll(".top-nav__list-link");

for (let i = 0; i < topNavListLink.length; i++) {
    topNavListLink[i].onclick = function () {
        topNavListLink[i].classList.toggle('active')
    };
}

