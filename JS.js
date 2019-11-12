$(document).ready(function(){
  $("#skill").click(function(){
    $(".about").hide();
    $(".contact").hide();
    $(".skills").toggle();
    
  });
});


$(document).ready(function(){
  $("#about").click(function(){
      $(".skills").hide();
      $(".contact").hide();
      $(".about").toggle();
    
  });
});


$(document).ready(function(){
  $("#contact").click(function(){
      $(".skills").hide();
      $(".about").hide();
      $(".contact").toggle();
    
  });
});



function initMap() {
  // The location of myLocation
  var myLocation = {lat: 41.9028, lng: 12.4964};
  // The map, centered at myLocation
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: myLocation});
  // The marker, positioned at myLocation
  var marker = new google.maps.Marker({position: myLocation, map: map});
}
