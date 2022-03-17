let scrollNav = document.getElementById('scrollNav');
let menu = document.getElementById('scrollMenu');
let spn1 = document.getElementById('spn1');
let spn2 = document.getElementById('spn2');
let spnMid = document.getElementById('spnMid');

window.onscroll = () => {
    let cur = window.scrollY;
    if (cur > 400) {
        scrollNav.style.display = "block";
    } else {
        scrollNav.style.display = "none";

    }
};

let a = true;

scrollNav.addEventListener('click', (e) => {
    e.preventDefault();

    if (a == true) {
        menu.classList.add('pt-block');
        menu.classList.remove('pt-none');
        menu.style.top = '0';
        menu.style.left = '0';
        spnMid.style.display = 'none';
        spn1.classList.remove('spn1');
        spn1.classList.add('span1');
        spn2.classList.remove('spn2');
        spn2.classList.add('span2');
        a = false;

    } else {
        menu.classList.remove('pt-block');
        menu.classList.add('pt-none');
        spnMid.style.display = 'block';
        spn1.classList.remove('span1');
        spn1.classList.add('spn1');
        spn2.classList.remove('span2');
        spn2.classList.add('spn2');

        a = true;
    }
})

menu.addEventListener('click', () => {
    menu.classList.remove('pt-block');
    menu.classList.add('pt-none');
    spn1.classList.remove('span1');
    spn1.classList.add('spn1');
    spn2.classList.remove('span2');
    spn2.classList.add('spn2');
    spnMid.style.display = 'block';


    a = true;
})


// Small Menu

let smNavBtn = document.getElementById('smNavBtn');
let smMenu = document.getElementById('smMenu');
let red = document.getElementById('red');
let m = true;
smNavBtn.addEventListener('click', () => {
    if (m == true) {
        smMenu.style.transform = "translateY(0)";
        smMenu.style.transition = "all 0.5s ease-in-out";

        m = false;
    } else {
        smMenu.style.transform = "translateY(-150%)";
        smMenu.style.transition = "all 0.5s ease-in-out";
        m = true;
    }
});

smMenu.addEventListener('click', () => {
    smMenu.style.transform = "translateY(-150%)";
    smMenu.style.transition = "all 0.5s ease-in-out";
    m = true

});





// Typing Effect Head
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web-Developer", "Freelancer", "Designer"];
const typingDelay = 130;
const erasingDelay = 90;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});



// Swiper Js
const swiper = new Swiper('.swiper', {
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    effect: "coverflow",
    lood: "true",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 70,
        modifier: 3,
        slideShadows: true,
        spaceBetween: 10,

    },
});



//Progress Bar
$(".perContainer > div").each(function() {
    var width = $(this).data("width");
    $(this).animate({ width: width }, 2500);
    $(this).after('<span class="perc">' + width + "</span>");
    $(".perc").delay(3000).fadeIn(1000);
});


// Skill Details

let skillDet1 = document.getElementById('skillDets1');
let skillDet2 = document.getElementById('skillDets2');
let sklillMenu = document.getElementById('sklillDet-menu');

let w = true;

skillDet1.addEventListener('click', (e) => {
    e.preventDefault();
    skillDet2.style.display = "block";
    skillDet1.style.display = "none";
    sklillMenu.style.opacity = "1";
    sklillMenu.style.position = "initial";

    w = false;
});

skillDet2.addEventListener('click', (e) => {
    e.preventDefault();
    skillDet1.style.display = "block";
    skillDet2.style.display = "none";
    sklillMenu.style.opacity = "0";
    sklillMenu.style.position = "fixed";
    w = true;
});

// Scroll to top

jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() < 420) {
        jQuery("#rocketmeluncur").slideUp(400);
    } else {
        jQuery("#rocketmeluncur").slideDown(400);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ?
        jQuery("#ft")[0] :
        jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $("rocketmeluncur");
    var viewPortHeightrocketmeluncur = parseInt(
        document.documentElement.clientHeight
    );
    var scrollHeightrocketmeluncur = parseInt(
        document.body.getBoundingClientRect().top
    );
    var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
    var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
    if (basewrocketmeluncur < 1000) {
        var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)["left"]);
        leftrocketmeluncur =
            leftrocketmeluncur < swrocketmeluncur ?
            leftrocketmeluncur * 2 - swrocketmeluncur :
            leftrocketmeluncur;
        scrolltoprocketmeluncur.style.left =
            basewrocketmeluncur + leftrocketmeluncur + "px";
    } else {
        scrolltoprocketmeluncur.style.left = "auto";
        scrolltoprocketmeluncur.style.right = "10px";
    }
});

jQuery("#rocketmeluncur").click(function() {
    jQuery("html, body").animate({ scrollTop: "0px", display: "none" }, {
        duration: 600,
        easing: "linear"
    });

    var self = this;
    this.className += " " + "launchrocket";
    setTimeout(function() {
        self.className = "showrocket";
    }, 800);
});


//loader
function lood() {
    let preloader = document.querySelector(".preloader");
    let s = true;
    if (s == true) {
        preloader.classList.add("hidden");
    }
    setTimeout(function() {
        preloader.style.display = "none";
    }, 10);
};


// onscroll Animate
new WOW().init();