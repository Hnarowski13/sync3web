READ ME

Firebase Database

This application is hooked up to firebase, which to re-deploy or serve locally will require to either replace with your own or request credentials from us. You can access the current deployed version here
https://fordsmartparkapp.firebaseapp.com/src/smartpark.html

--------------------------------------------------------------------------------------------------------

zoom.js
- Customizes the zoom control on google maps API for usability/readability

maptype.js 
- Customizes the map type controls on google maps API to be larger for usability/readability

authentication.js
- Handles firebase authentication. 
- In order to simulate VIN, authentication was removed and hard credentials are entered into authentication.js, in toggleSignIn(). 

firebase-smartpark.js
- Initializes the google map
- Pulls parking spots from Firebase
- Shows information of parking spot based on data in Firebase
- ** Note ** does not filter spots based on the user settings, shows all spots
- User can remove parking spot if they are within close distance by choosing I parked here or Spot already full

 ---------------------------------------------------------------------------------------------------------------

 