

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet

  

// var myRef = new Firebase("https://fordsmartparkapp.firebaseio.com");
// var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
//   if (error) {
//     // an error occurred while attempting login
//     console.log(error);
//   } else if (user) {
//     // user authenticated with Firebase
//     console.log("User ID: " + user.uid + ", Provider: " + user.provider);
//   } else {
//     // user is logged out
//   }
// });
	// // Sign in existing user
	// firebase.auth().signInWithEmailAndPassword(email, password)
	//  .catch(function(err) {
	//    // Handle errors
	//  });

  function launchSmartPark()
  {
    window.open("src/email.html");
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
    };




