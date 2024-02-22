
function initApp() {
    var userTables=[];
        // Listening for auth state changes.
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            var today = new Date();
            $(".currentUser").html(email);
            if(email!="admin@gmail.com"){
              alert("Only Admin Can access this panel.")
              firebase.auth().signOut();
              // window.location.replace("login.html");
            }
      } 
      else {
        $("#spinner").css("display","none");
        console.log("User is signed out");
            // User is signed out.
            window.location.replace("login.html");
          }
        });
      }
$(document).ready(function () {
        initApp();
      });