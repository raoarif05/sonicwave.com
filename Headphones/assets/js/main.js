
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav'),
      navToggle = document.getElementById('menubtn'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// ===== when navbar link is clicked, side nav hides =====
let navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav')
    // When we click on each nav__link, show-menu class will be removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SEARCH FIELD JS
let searchBtn = document.getElementById('searchbtn');
let searchField = document.getElementById('search-box');
    searchField.style.display = "none";

    searchBtn.onclick = function(){
        if(searchField.style.display == "none"){
            searchField.style.display = "flex";
            searchField.style.top = "var(--header-height)";
        }else {
            searchField.style.display = "none";
        }
    }
    
//  ON SCROLL HEADER EFFECT

window.addEventListener('scroll', function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
})




// HEADER PRODUCT SWOPER
document.addEventListener('DOMContentLoaded', function () {
    let swiperHome = new Swiper('.home_swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});



// ======= TESTIMONIAL JS =======
document.addEventListener('DOMContentLoaded', function () {
    let swiperTestimonial = new Swiper('.testimonial_swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        centeredSlide: true,
        spaceBetween: 0,
        breakpoints: {
            568 : {
                slidesPerView: 2,
            },
            868 : {
                slidesPerView: 3,
                centeredSlide: false,
            },
        },
        navigation: {
            nextEl: '.tetimonialSwiper-button-next',
            prevEl: '.tetimonialSwiper-button-prev',
        },
    });
});



