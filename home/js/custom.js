$(function(){

		$('.tabs a').click(function(){
			$(this).parent('.tab-wrap').find('.tab-cont').addClass('hide');
			$(this).parent().siblings().removeClass('active');
			var id =$(this).attr('herf');
			$(id).removeClass('hide');
			$(this).parent().addClass('active');
			return false

	});

		$('.banner-slider').slick({
			arrows: false,
			dots: true,

		})

		$('.test-slider').slick({
			arrows: false,
			dots: true,
		})

		$('.portfolio-slider').slick({
			dots: true,
			appendArrows: '.portfolio-slider__buttons',
			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',

		})

});	



function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(48.370038, 27.332501),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID

    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
scrollhweel: false;
markerImg = 'img,marker.png'
}

