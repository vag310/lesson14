/*
document.addEventListener('DOMContentLoaded', function(event){ // Аналог $(document).ready(function(){
   const modal = document.querySelector('.modal');
   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
   const closeBtn = document.querySelector('.modal__close')

   const switchModal = () => {
    modal.classList.toggle('modal--visible');
   }
   modalBtn.forEach(element => {
       element.addEventListener('click', switchModal);
   });

   closeBtn.addEventListener('click', switchModal)

  });*/

$(document).ready(function () {
    var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
   
      modalBtn.on('click', function (){
          modal.toggleClass('modal--visible')
      });
      closeBtn.on('click', function () {
          modal.toggleClass('modal--visible');
      });
        //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
     })
     var next = $('.swiper-button-next')
     var prev = $('.swiper-button-prev')
     var bullets = $('.swiper-pagination')

     next.css('left', prev.width() + 10 + bullets.width())
     bullets.css('left', prev.width() + 10)

     new WOW().init();

     // Валиадция формы 
     $(".modal-form").validate({
        rules: {
          // simple rule, converted to {required:true}
          userName: "required",
          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
        messages: {
            userName: "Имя обязательно",
            userPhone: "обязательно",
            userEmail: {
              required: "Обязательно",
              email: "Your email address must be in the format of name@domain.com"
            }
          }
      });

      $('[type=tel]').mask('+7 000 000 00 00', {placeholder: "+7 ___ ___ __ __"});

});