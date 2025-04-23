const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 200)
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    distance:'40px',
    duration:2500,
    delay:200,
    reset:true

});

sr.reveal('.hero-details,.title',{origin:'top-bottom'});
sr.reveal('.sub-title, .hero-image-wrapper, .button order-now ,.testimonials-section',{origin:'bottom-top'});
sr.reveal('.about-image-wrapper',{origin:'left-right duration:4000'});
sr.reveal('.about-details',{origin:'top-bottom'});


document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stops the form from reloading the page

  const responseMsg = document.getElementById("responseMsg");
  responseMsg.textContent = "Your request has been sent.";
  responseMsg.style.display = "block";

  // Optionally reset the form
  this.reset();

  // Optionally hide the message after a few seconds
  setTimeout(() => {
      responseMsg.style.display = "none";
  }, 5000);
});



// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakpoints:{
   0:{
    slidesPerView:1
   },
   768:{
    slidesPerView:2
   },
   1024:{
    slidesPerView:3
   },
   } 
});