(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.portfolio-list').owlCarousel({
           
            items: 3,
            autoplay: false,
            margin:30,
            loop: true,
             dots:true,
             responsiveClass:true,
             responsive:{
                 0:{
                     items:1,
                     nav:false,
                     dots:false,
                 },
                 600:{
                     items:2,
                     nav:false
                 },
                 1000:{
                     items:3,
                     nav:false,
                     loop:true,
                 }
             }
        });


        $('.technology-list').owlCarousel({
           
            items: 3,
            autoplay: false,
            margin:20,
            loop: true,
             dots:false,
             nav:false,
             responsiveClass:true,
             responsive:{
                 0:{
                     items:1
                     
                     ,
                     nav:false
                 },
                 600:{
                     items:2,
                     nav:false
                 },
                 1000:{
                     items:3,
                     nav:false,
                     loop:true,
                 }
             }
            
        });
        $('.testimonial-area').owlCarousel({
           
            items: 1,
            autoplay: false,
            margin:20,
            loop: true,
             dots:true,
             nav:true,
             responsiveClass:true,
             responsive:{
                 0:{
                     items:1,
                     nav:false
                 },
                 600:{
                     items:1,
                     nav:false
                 },
                 1000:{
                     items:1,
                     nav:false,
                     loop:true,
                 }
             }
            
        })

        $(".fa-search").click(function(){
            $(".icon").toggleClass("active");
           $("input[type='text']").toggleClass("active");
         });


    });
  

    
    
  

    

}(jQuery));