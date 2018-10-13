const slideShow = $('.slide-show');
const slides = $('.single-slide');
const prev = $('slide-nav-prev');
const next = $('slide-nav-next');
let slideCount = slides.length;
let slideWidth = 100/slideCount;
let slideIndex = 0;

slideShow.css({'width': slideCount + '00%'});

slides.each(function(ind){
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': ind * slideWidth + '%',
    });
});

prev.on('click',function(){
    
})

next.on('click',function(){
    
})