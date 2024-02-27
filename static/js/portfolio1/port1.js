
/*-------------------------------------
    
	Template Name: InfoFolio - Resume One Page HTML Template
    Version: 1.0.0
    Author: Webstrot
    Copyright: © 2024-25
	
---------------------------------------
 
    JS INDEX
    ===================
	
   1. counter
   2. circle counter
   3. portfolio popupe
   4. mobile toggle
---------------------------------------*/



// counter
            
$('.counting').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
    countNum: countTo
    },
    
    {
    
    duration: 3000,
    easing:'linear',
    step: function() {
    $this.text(Math.floor(this.countNum));
    },
    complete: function() {
    $this.text(this.countNum);
    //alert('finished');
    }
    
    });  
});

// circle counter

$('.chart-one').easyPieChart({
   //your configuration goes here
   easing: 'easeOut',
   delay: 3000,
   barColor: '#C00C22',
   trackColor: '#f7f7f7',
   scaleColor: false,
   lineWidth: 4,
   size: 60,
   scaleLength: 1,
   lineCap: 'square',
   animate: 5000,
   onStep: function (from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
   }
});

// portfolio popupe

const portfolioLightbox = GLightbox({
   selector: '.portfolio-lightbox'
});

//  mobile toggle

$(document).ready(function(){
    $(".mobile-nav-toggle").click(function(){
       $("body").toggleClass("mobile-nav-active");
    });
 });