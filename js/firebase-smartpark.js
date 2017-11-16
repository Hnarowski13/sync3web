




// function loadParkingSpots()
// {



// }



  function launchSmartPark()
  {
    window.location.href = "src/smartpark.html";



    // $('#sync_login').show();
    // $('#find_apps').hide();
    // $('#smart_park').hide();
  }


    function initMap() {

      var lattt = 42.7249781;
      var longg = -84.4812492;
      var eastlansing = new google.maps.LatLng( 42.7268686,-84.5445129);




      //}


      //var eastLansing2 = new google.maps.LatLng(lattt, longg)
      //var eastlansing = {lat: 42.7249592, lng: -84.4812392};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: eastlansing
      });


      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.current_pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //map.setCenter(pos);


          var current_loc_image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
          var content_str = "Current Location";
           var infowindow = new google.maps.InfoWindow({
              content: content_str
            });

        var marker = new google.maps.Marker({
            position: pos, 
            map: map,
            icon: current_loc_image,
            title: "Current Location" 
        });          
        marker.addListener('click', function() {
            infowindow.open(map, marker);

            var html_str = '<p class="text-white">' + content_str + '</p>';
            $("#marker-information").replaceWith(html_str);

          });           
          }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          console.log("Geolocation not available.");
          // Browser doesn't support Geolocation
          //handleLocationError(false, infoWindow, map.getCenter());
        }

    var zoomDiv = document.createElement('div');
    var renderZoomControls = new ZoomControl(zoomDiv, map);
    zoomDiv.index = 1;
    $("#map-custom-controls").append(zoomDiv);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomDiv);

    // function placeMarker(location, title) {
    //     var marker = new google.maps.Marker({
    //         position: location, 
    //         map: map,
    //         title: "Open Parking Spot"
    //     });
    // };       

      var spotsRef = firebase.database().ref('spots/');
        spotsRef.once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var latitude = Number(childData["latitude"]);
            var longitude = Number(childData["longitude"]);
            var size = childData["size"];
            var handicapped = childData["handicapped"];

            var timestamp = (childData["timestamp"]);

            var currentDate = new Date().getTime();
            var dateArray = timestamp.split(" ");  // split the date and time 
            var ds1 = dateArray[0].split("-"); // split each parts in date
            var ds2 = dateArray[1].split(":"); // split each parts in time
            // var newDate = new Date(ds1[0], (+ds1[1] - 1), ds1[2], ds2[0], ds2[1], ds2[2]).getTime(); //parse it         
             var newDate = new Date(ds1[0], (+ds1[1] - 1), ds1[2], ds2[0], ds2[1]).getTime();
              var diff = millisecondsToHoursMinutesSeconds(currentDate - newDate)//;
              var label = "P";
              content_str = "<br>" + diff + " minutes ago<br>";
              content_str = content_str + "Reported By: unknown";

              var image = "";
              if (handicapped == "Handicapped")
              {
                  content_str = "Handicapped" + content_str;
                  //label = "H";
                  image = 'https://www.airportparkingreservations.com/img/icons/handicap.png';
              }
              else 
              {
                  content_str = content_str + "<br>Size: " + size
              }

              var parking_spot = {lat: latitude, lng: longitude};

              var p1 = new google.maps.LatLng(latitude, longitude);
              var p2 = this.current_pos;

              if (calcDistance(p1,p2) < 15)
              {
                content_str = content_str + "<br><a href='#'>Remove Spot</a>";
              }
              

           var infowindow = new google.maps.InfoWindow({
              content: content_str
            });


            

  //var image = 'https://www1.jobdiva.com/images/64px-Handicapped_Accessible_sign.svg.png';
 
           // placeMarker(parking_spot,"Whatever");
            var marker = new google.maps.Marker({
              position: parking_spot,
              map: map,
              label: label,
              icon: image
            });

          marker.addListener('click', function() {
            infowindow.open(map, marker);

            var html_str = '<h5 class="text-white">Parking Spot Info</h5><p class="text-white">' + content_str + '</p>';
            $("#marker-information").replaceWith(html_str);
          });            


          });
      }); 
    
    function millisecondsToHoursMinutesSeconds(ms) {
        var milliseconds = parseInt((ms%1000)/100)
            , seconds = parseInt((ms/1000)%60)
            , minutes = parseInt((ms/(1000*60))%60)
            , hours = parseInt((ms/(1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

      //  minutes = minutes + 60*hours;
        return hours + " hours " + minutes;
       // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
  //   google.maps.event.addListener(map, 'click', function(event) {
//        placeMarker(event.latLng);


    //   infoWindow = new google.maps.InfoWindow;
    //   if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         infoWindow.Position(pos);
    //         infoWindow.setContent('Current Location found.');
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //       }, function() {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //       });
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    //   //}

    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //   alert("Geolocation failed");
    //   // infoWindow.setPosition(pos);
    //   // infoWindow.setContent(browserHasGeolocation ?
    //   //                       'Error: The Geolocation service failed.' :
    //   //                       'Error: Your browser doesn\'t support geolocation.');
    //   // infoWindow.open(map);
    // }


   }

//})

     


      //   });
      // });  


      // var marker = new google.maps.Marker({
      //   position: eastlansing,
      //   map: map
      // });


    // }
function calcDistance(p1, p2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

    

  function initApp() {

    if (!firebase.apps.length) {

      var config = {
        apiKey: "AIzaSyA7NSbCop-kigEt3kVNutppA6qzV7Gpb4M",
        authDomain: "fordsmartparkapp.firebaseapp.com",
        databaseURL: "https://fordsmartparkapp.firebaseio.com",
        // storageBucket: "<BUCKET>.appspot.com",
        // messagingSenderId: "web_app",
      };      
         firebase.initializeApp(config); 
    }

    

    var today = new Date();
    var hour = today.getHours()%12;
    if (hour == 0) hour=12;

    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;

    document.getElementById("clock").innerHTML = hour+"꞉"+minute;    

  }

    window.onload = function() {
      initApp();

        initAppAuth();    
        toggleSignIn();

    };






