let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}


window.onscroll = () =>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classlist.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classlist.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
 
    loop:true,
    breakpoints:{
      0:{
        slidesperview: 1
      },
      640:{
        slidesperview: 2
      },
      768:{
        slidesperview: 2
      },
      1024:{
        slidesperview: 3
      },
    }
  });