

/*-------------------------------------
    
	Template Name: InfoFolio - Resume One Page HTML Template
    Version: 1.0.0
    Author: Webstrot
    Copyright: © 2024-25
	
---------------------------------------
 
    JS INDEX
    ===================
	
   1. circle counter
   2. counter
   3. Msg popupe

---------------------------------------*/


// circle counter

(function () {
    $('.chart-one').easyPieChart({
       //your configuration goes here
       easing: 'easeOut',
       delay: 3000,
       barColor: '#3B4EB7',
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
 }());


//  mobile toggle

$(document).ready(function(){
    $(".mobile-toggle").click(function(){
        $("body").toggleClass("mobile-nav-active");
    });
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
    
    }
    
    });  
    
    
    });


    // Msg popupe

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

// 



        




