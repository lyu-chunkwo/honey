$(function () {
  


  // ! 
  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();

  $('.menu__item').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link) {
      $(this).addClass('current');
    }
  });




  
  // ! synchronous slider
  // $('.interactive__slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   dots: false,
  //   asNavFor: '.interactive__top-slider',

  //   prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',
  // });

  // $('.interactive__top-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: '.interactive__slider',
  //   fade: true,
  //   arrows: false,
  //   infinite: false,
  // });


  // ! Hits slider
  // $('.some-class').slick({
  // 	slidesToShow: 4,
  // 	slidesToScroll: 1,
  // 	infinite: false,
  //   dots: true,

  // 	prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',

  // 	responsive: [
  // 		{
  // 			breakpoint: 1201,
  // 			settings: {
  // 				slidesToShow: 3,
  // 				slidesToScroll: 1,
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 901,
  // 			settings: {
  // 				slidesToShow: 2,
  // 				slidesToScroll: 1
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 651,
  // 			settings: {
  // 				slidesToShow: 1,
  // 				slidesToScroll: 1
  // 			}
  // 		}
  // 	]
  // });



  // !ADD-REMOVE class active script
  // $('.products-box__aside-link').on('click', function (e) {
  // 	e.preventDefault();
  //   $('.products-box__aside-link').removeClass('products-box__aside-link--active');
  //   $(this).addClass('products-box__aside-link--active');
  // });

  // $('.pagination__link').on('click', function (e) {
  // 	e.preventDefault();
  //   $('.pagination__link').removeClass('pagination__link--active');
  //   $(this).addClass('pagination__link--active');
  // });

  // $('.menu__link').on('click', function (e) {
  // 	e.preventDefault();
  //   $('.menu__link').removeClass('menu__link--active');
  //   $(this).addClass('menu__link--active');
  // });



  // !Form styler script
  $('.lang-select').styler();



  // ! News slider
  $('.news__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,

    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  // ! Reviews slider
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });



  // ! Button for adaptive menu
  $('.menu__burger').on('click', function () {
    $('.menu__list,.menu__burger').toggleClass('active');
  });

  $('.products-box__burger').on('click', function () {
    $('.products-box__aside-list,.products-box__burger').toggleClass('active');
  });




  // !Slider Hits Syncing
  // $('.slider-hits--top').slick({
  //   asNavFor: '.slider-hits--bottom',
  // 	slidesToShow: 4,
  // 	slidesToScroll: 1,
  // 	draggable: false,

  //   prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',

  //   responsive: [
  //     {
  //       breakpoint: 1201,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 761,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 521,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // $('.slider-hits--bottom').slick({
  //   asNavFor: '.slider-hits--top',
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // 	draggable: false,
  //   arrows: false,
  //   dots: true,

  //   responsive: [
  //     {
  //       breakpoint: 1201,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 761,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 521,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });



  // !Switch product grid to list
  // $('.shop-content__view-btn').on('click', function () {
  // 	$('.shop-content__view-btn').removeClass('shop-content__view-btn--active');
  // 	$(this).addClass('shop-content__view-btn--active');
  // });

  // $('.button-list').on('click', function () {
  // 	$('.products-item').addClass('products-item--list');
  // 	$('.pagination').addClass('pagination--list');
  // 	// $('.shop-content__inner').addClass('shop-content__nogrid');
  // })
  // $('.button-grid').on('click', function () {
  // 	$('.products-item').removeClass('products-item--list');
  // 	$('.pagination').removeClass('pagination--list');
  // 	// $('.shop-content__inner').removeClass('shop-content__nogrid');
  // })



  // ! Filter price
  // $('.filter-price__input').ionRangeSlider({
  //   prettify_enabled: true,
  //   onStart: function (data){
  //     $('.filter-price__from').text(data.from);
  // 		$('.filter-price__to').text(data.to);
  // 	},
  // 	onChange: function (data) {
  //     $('.filter-price__from').text(data.from);
  // 		$('.filter-price__to').text(data.to);
  // 	},
  // });



  // !Stars rating
  // $(".stars").rateYo({
  // 	starWidth: "12px",
  // 	normalFill: "#d6d6d6",
  // 	ratedFill: "#ffcc00",
  // 	starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  // });

  // $(".stars-list").rateYo({
  // 	starWidth: "20px",
  // 	normalFill: "#d6d6d6",
  // 	ratedFill: "#ffcc00",
  // 	starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  // });

  // $(".stars-product__details").rateYo({
  // 	starWidth: "20px",
  // 	normalFill: "#d6d6d6",
  // 	ratedFill: "#ffcc00",
  // 	spacing: "15px",
  // 	starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  // });




  // ! Button for adaptive menu
  // $('.menu__btn').on('click', function () {
  // 	$('.menu__list').toggleClass('menu__list--active');
  // });




  // !Script for mixitup filter
  // var mixer = mixitup('.brands__list');


  // !Script for mixitup filter Два на одной странице
  // const mix1 = document.querySelector('.brands__list');
  // const mix2 = document.querySelector('.design__list');

  // if(mix1){
  //   mixitup('.brands__list', {
  // 		selectors: {
  // 			control: '.filter1'
  // 		}
  // 	})
  // }

  // if(mix2){
  // 	mixitup('.design__list', {
  // 		selectors: {
  // 			control: '.filter2'
  // 		}
  // 	})
  // }


  // ! FAQ Accordion

  // jQuery(function ($) {

  //   $(".accordion-content").css("display", "none");


  //   $(".accordion-title").click(function () {

  //     $(".accordion-title").not(this).removeClass("open");

  //     $(".accordion-title").not(this).next().slideUp(300);

  //     $(this).toggleClass("open");

  //     $(this).next().slideToggle(300);
  //   });
  // });


  // jQuery(document).ready(function ($) {
  //   $('.menu__link--brands').hover(
  //     function () {
  //       $('.brands-drop', this).stop().slideDown(400);
  //     },
  //     function () {
  //       $('.brands-drop', this).stop().slideUp(400);
  //     }
  //   );
  // });




  // ! WOWJS
  //   wow = new WOW(
  //     {
  //       boxClass: 'wow',      // default
  //       animateClass: 'animate__animated', // default
  //       offset: 0,          // default
  //       mobile: true,       // default
  //       live: true        // default
  //     }
  //   )
  //   wow.init();
  // });

});