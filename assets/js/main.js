$(document).ready(function(){

    /* Main Slider Active */
    $(".sliders").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true
    }); 

    /* Testimonial Active */
    $(".testimonials").owlCarousel({
        'items': 3,
        'loop': true,
        'autoplay': true,
        'margin': 30,
        'center':true
    }); 
    
    /* CounterUp Active */
    $('.counter').counterUp();

  });