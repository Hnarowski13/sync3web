


  function launchSmartPark()
  {
    window.location.href = "src/smartpark.html";
    // $('#sync_login').show();
    // $('#find_apps').hide();
    // $('#smart_park').hide();
  }

    

  function initApp() {


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
    };




