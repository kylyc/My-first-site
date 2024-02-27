// InfoFolio - Resume One Page HTML Template
// Version: 1.0.0
// Author: Webstrot 


$('.tab-link').on('click', function() {
  
  var tabID = $(this).attr('data-tab');
 
  $('.tab-link').removeClass('active-menu');
  
  $(this).addClass('active-menu');
  
  $('.active-tab').fadeOut(300);
 
  setTimeout(function() {
     
     $('.slide').removeClass('active-tab');
     
     $('#' + tabID).show().addClass('active-tab');
  }, 300); 
  
});