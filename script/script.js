$('.containerwithslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: '.sliderBlock',
    prevArrow: '.leftarrow',
    dots: true,
    dotClass: '.dot', 
    nextArrow: '.rightarrow'
  }); 

  var coordinate = {lat: 40.6798827, lng: -73.8913736};
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinate,
      zoom: 13
    });

    var marker = new google.maps.Marker({
      position: coordinate,
      map: map,
      icon: 'img/Pin.png'
    });
  }

marker.setMap(map);

// $('#link1').hover(
//   function() {
//     $('#cir1').addClass('circle_active');
//   }
// );

// $('#link2').hover(
//   function() {
//     $('#cir2').addClass('circle_active');
//   }
// );

// $('#link3').hover(
//   function() {
//     $('#cir3').addClass('circle_active');
//   }
// );

// $('#link4').hover({
//   $('#cir4').addClass('circle_active')
// });
  