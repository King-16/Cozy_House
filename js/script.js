// Плавний Якорь
$(document).ready(function(){
    $(".btn").on("click","a", function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500); // 1500 - швидкість скорла
    });
});


$(document).ready(function(){
 
  var $menu = $(".header"); //Обєкт який буде прилипати

  $(window).scroll(function(){
      if ( $(this).scrollTop() > 80 && $menu.hasClass("no__fixed") ){
          $menu.removeClass("no__fixed").addClass("fixed"); //В .fixed пишем pos-fixed і інші "80" - висота після якої буде спрацьовувати
      } else if($(this).scrollTop() <= 80 && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed").addClass("no__fixed");
      }
  });//scroll
});


// Slick-slider
$(document).ready(function(){
  $('.friend__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: true,// стрілки
     prevArrow: '<div class="friend__arrows_item"><img src="img/arrow__left.svg" alt="arrow"></div>',// стрілка назад
     nextArrow: '<div class="friend__arrows_item"><img src="img/arrow__right.svg" alt="arrow"></div>',// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        infinite: true
	      }
	    }
	  ]
  });
});

// init wow.js
new WOW().init();



// submit form to email
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(document).ready(function () {
	$('.header__burger').click(function () {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.overlay').toggleClass('active');
	})
})