




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
      //var eastLansing2 = new google.maps.LatLng(lattt, longg)
      //var eastlansing = {lat: 42.7249592, lng: -84.4812392};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: eastlansing
      });

      var spotsRef = firebase.database().ref('spots/');
        spotsRef.once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var latitude = Number(childData["latitude"]);
            var longitude = Number(childData["longitude"]);


            var parking_spot = {lat: latitude, lng: longitude};
            var marker = new google.maps.Marker({
              position: parking_spot,
              map: map
            });

 google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
});

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}         
           // var html = "<p>";
        //    for(var key in childData) {
//              var value = childData[key];



           //   html = html.concat("<p>" + key + " : " + value  + "</p>");

      //      }
        //    html = html.concat("</p>")
            

          //  $( "#parking-spots" ).append( "<p>Parking Spot: </p>"+html );
        // ...
        });
      });  


      var marker = new google.maps.Marker({
        position: eastlansing,
        map: map
      });


    }

    function loadSpots() {





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

//     var spotsRef = firebase.database().ref('spots/');
//   spotsRef.once('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//   // ...
//   });
// });   

    

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
        loadSpots();      

    };






