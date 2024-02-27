
/*-------------------------------------
    
	Template Name: InfoFolio - Resume One Page HTML Template
    Version: 1.0.0
    Author: Webstrot
    Copyright: © 2024-25
	
---------------------------------------
 
    JS INDEX
    ===================
	
   1. counter
   2. Msg Popupe
   3. Portfolio popupe
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

    // Msg Popupe

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

    // Portfolio popupe

    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
     });

    //  mobile toggle

    $(document).ready(function(){
        $(".port-4-nav-toggle").click(function(){
           $("body").toggleClass("mobile-nav-active");
        });
     });
