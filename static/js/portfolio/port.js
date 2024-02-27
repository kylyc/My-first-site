
/*-------------------------------------
    
	Template Name: InfoFolio - Resume One Page HTML Template
    Version: 1.0.0
    Author: Webstrot
    Copyright: © 2024-25
	
---------------------------------------
 
    JS INDEX
    ===================
	
   1. humburger
   2. Portfolio popupe
   3. counter
   4. Slide move
   5. Msg Popupe
   6. Circle counter
---------------------------------------*/



// humburger

$('#hamburger').on('click', function() { 
    $(".sidebar-main-wrapper").toggleClass('sidebar-toggle');
    $("#hamburger").toggleClass('open');
 });

//  Portfolio Popupe

const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
 });
 
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

// Slide move

$(document).ready(function() {
    $('.control1').click(function() {
       // Remove the "active" class from all sections
       $('section.port-wrapper').removeClass("active");

       // Add the "active" class to the corresponding section
       var targetSectionId = $(this).data('id');
       $('#' + targetSectionId).addClass("active");

       // Remove the "active-btn" class from all list items
       $('.control1').removeClass("active-btn");

       // Add the "active-btn" class to the clicked list item
       $(this).addClass("active-btn");
    });
 });

//  Msg Popupe

var m = document.querySelector('#msg')

    function log(t){
    m.innerHTML = t
    }

    document
    .querySelector('#share')
    .addEventListener('click', function() {
        if (typeof navigator.share === 'undefined') {
            log("No share API available!");
        } else {
            navigator.share({
            title: 'Title',
            url: 'https://codepen.io/BrandonS8/pen/PrJQoj',
            text: 'Shared with Native Share API'
            })
            
            .then(function() { log("Share success!"); })
            .catch(function() { log("Share failure!"); });
            
        }
})

// Circle counter

$('.chart-one').easyPieChart({
   //your configuration goes here
   easing: 'easeOut',
   delay: 3000,
   barColor: '#D09F0D',
   trackColor: '#f7f7f7',
   scaleColor: false,
   lineWidth: 8,
   size: 150,
   scaleLength: 1,
   lineCap: 'square',
   animate: 5000,
   onStep: function (from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
   }
});

//  


