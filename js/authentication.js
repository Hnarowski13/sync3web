// *
//      * Handles the sign in button press.
//      */


    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]


        // firebase.auth().signOut();
        //   $("#smart_park_app").hide();
        //   $("#smart_park_login").show();


        // [END signout]
      } else {
        var email = "doug@msu.edu";
        var password = "123456";
        // var email = document.getElementById('email').value;
        // var password = document.getElementById('password').value;
        // if (email.length < 4) {
        //   alert('Please enter an email address.');
        //   return;
        // }
        // if (password.length < 4) {
        //   alert('Please enter a password.');
        //   return;
        // }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // TETING PURPOSES
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      // TESTING PURPOSES
     // document.getElementById('quickstart-sign-in').disabled = true;
    }

    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }



    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initAppAuth() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
    //    document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {

          $("#smart_park_app").show();
          $("#smart_park_login").hide();
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          currentUser = user;
          // [START_EXCLUDE]
         // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
         // document.getElementById('quickstart-sign-in').textContent = 'Sign out';
         // FOR TESTING PURPOSES
         if (email == null)
         {

         }
         else 
         {
          document.getElementById('quickstart-account-details').textContent =  email;
         }
          

          //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          // if (!emailVerified) {
          //   document.getElementById('quickstart-verify-email').disabled = false;

        //  window.load("/src/smartpark.html");
          // }
          // [END_EXCLUDE]
        } else {
          currentUser = null;
          // User is signed out.
          // [START_EXCLUDE]
          // document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          // document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          // document.getElementById('quickstart-account-details').textContent = 'null';
          //window.load("/src/email.html");
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        // TESTING PURPOSES
      //  document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]

     // document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
     // COMMENTED OUT FOR TESTING PURPOSES

      // document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      // document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }

    function loadSpots() {



var spotsRef = firebase.database().ref('spots/');
  spotsRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      var html = "<p>";
      for(var key in childData) {
        var value = childData[key];
        html = html.concat("<p>" + key + " : " + value  + "</p>");

      }
      html = html.concat("</p>")
      

    //  $( "#parking-spots" ).append( "<p>Parking Spot: </p>"+html );
  // ...
  });
});  


    }



  