$('p').on('click',function(){
    $(this).toggleClass('decor');
})

$(window).on('scroll', function(event){
 console.log($(window).scrollTop() );  
})

$('h1').on({
    'mouseenter':function(){
        $('body').addClass('decor');
    },
    'mouseleave':function(){
        $('body').removeClass('decor');
    },
})