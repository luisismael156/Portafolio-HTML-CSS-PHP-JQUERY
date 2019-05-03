
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:3000,
    margin: 10,
    nav: true,
    merge:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})})