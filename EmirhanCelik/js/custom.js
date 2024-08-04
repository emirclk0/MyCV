
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contact-btn');
    const loginFormContainer = document.getElementById('contact-form-container');
    const closeLoginBtn = document.getElementById('close-contact-btn');

    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'block';
    });

    closeLoginBtn.addEventListener('click', function() {
        loginFormContainer.style.display = 'none';
    });
});

let loginForm = document.querySelector('.contact-form-container')

document.querySelector('#contact-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-contact-btn').onclick = () => {
    loginForm.classList.remove('active');
}