$(document).ready(function(){
    $('.slider--team').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.slider--reviews').slick({
        slidesToShow:4,
        infinite: true,
        rows: 2,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });
    $('.slider--dev').slick({
        slidesToShow: 1,
        infinite: true,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.menu__burger').click(function(event){
        $('.menu__burger, .menu__list').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});