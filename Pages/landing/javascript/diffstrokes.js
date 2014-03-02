
$(document).ready(function(){
  $(".twitter-timeline").hide()
  $("#close").hide();
  $("#bird").click(function(){
  $(".twitter-timeline").show();
  $("#close").show();
  });
  $("#close").click(function(){
  $(".twitter-timeline").hide()
  $("#close").hide();
  });
  var $window = $(window);

  $('div[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ 
        backgroundPosition: coords 
      });
    });
  }); 
});// JavaScript Document

