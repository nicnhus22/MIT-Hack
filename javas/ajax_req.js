
var city,state;

SC.initialize({
        client_id: "3b0e902e16342e69ea4b196a301b43ed",
        redirect_uri: "http://users.encs.concordia.ca/~g_valerg/muzik_test/callback.html",
  });

function sendWeatherRequest(city_p, state_p){

  city = city_p;
  city = city.replace(" ","_");

  state = String.trim(state_p);

  $.ajax({
  url : "http://api.wunderground.com/api/82739b7f06f72f8e/geolookup/conditions/q/"+state+"/"+city+".json",
  dataType : "jsonp",
  success : function(parsed_json) {

      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var time = parsed_json['current_observation']['observation_time'];
      var weather = parsed_json['current_observation']['weather'];
      var humidity = parsed_json['current_observation']['relative_humidity'];
      var wind = parsed_json['current_observation']['wind_dir'];
       

      setTimeout(function(){$('#logo_w').css("position","relative");$('#logo_w').css("animation","move_logo 2s");
                            $('#logo_w').css("position","relative");$('#logo_w').css("-webkit-animation","move_logo 2s");
                            $('#logo_w').css("position","relative");$('#logo_w').css("-ms-animation","move_logo 2s");}, 2000);
      $('#logo_w').css("left","-150px");

      $('#temp').html(temp_f+"&#186;F");
      $('#location').html(location);
      $('#weather').html(weather);
      $('#date').html(time);
      $('#humidity').html("Humidity : "+humidity);
      $('#wind').html("Wind : "+wind);
      

      $('#weather_layout').fadeIn(5000);
      
  }
  });
}


function sendSoundCloudRequest(query){

  SC.get('/tracks', { limit:3,  q: query}, function(tracks){

    for (var i = 0; i< tracks.length ; i++) {
      var current_track = tracks[i];
      var track_id = "track" + i;
      SC.oEmbed(current_track.uri, document.getElementById(track_id));
    }
  });

  setTimeout(function(){$('#logo_sc').css("position","relative");$('#logo_sc').css("animation","move_logo 2s");
                        $('#logo_sc').css("position","relative");$('#logo_sc').css("-ms-animation","move_logo 2s");
                        $('#logo_sc').css("position","relative");$('#logo_sc').css("-webkit-animation","move_logo 2s");}, 2000);
  $('#logo_sc').css("left","-150px").css("position","absolute");

}




