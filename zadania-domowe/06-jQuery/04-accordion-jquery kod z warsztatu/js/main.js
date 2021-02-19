$(document).ready(function(){
    $('.accordion-item').click(function(){
        if($(this).hasClass('open')) {
            $(this).removeClass('open');   
            $(this).find('.accordion-content').slideUp();
        } else {
            $(this).addClass('open');   
            $(this).find('.accordion-content').slideDown();
        }
           
    });
});