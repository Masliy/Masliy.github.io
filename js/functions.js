$(document).ready(function() {

 var currentScreen = $('.screen.shown');

 $('body').on('click', '.switch-button', function(e){
  var $el = $(e.target);
  if(!$el.is('a')){
   $el = $el.parents('a.switch-button');
  }
  var $newEl = $($el.attr('href'));
     currentScreen.removeClass('shown');
     currentScreen = $newEl;
     currentScreen.addClass('shown');

 });
});


$(document).ready(function(){

    $('.portfolio_wrapper .portfoliophoto').each(function(i){

      setTimeout(function(){
        $('.portfolio_wrapper .portfoliophoto').eq(i).addClass('is-showing');
      }, 200 * (i+1));
    });

  });
