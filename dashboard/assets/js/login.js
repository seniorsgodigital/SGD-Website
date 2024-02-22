function toggleSignIn() {
    if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
          var email = document.getElementById('username').value;
          var password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            $(".sign-in-load").css("display","none");
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            $(".sign-in-load").css("display","none");
            return;
          }
          $(".sign-in-load").css("display","block");
          // Sign in with email and pass.
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              $(".sign-in-load").css("display","none");
              alert('Wrong password.');
  
            } else {
              alert(errorMessage);
              $(".sign-in-load").css("display","none");
            }
            console.log(error);
          });
        }
      }
  
      function initApp() {
  
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
            if(email!="admin@gmail.com"){
              alert("Only Admin Can access this panel.")
              firebase.auth().signOut();
              // window.location.replace("login.html");
            }
            else{
            alert("You are signed in as :"+email);
            window.location.replace("dashboard.html");
            }
          } else {
            // User is signed out.
          }
        });
      }
  
      $(document).ready(function() {
        $('#signin-btn').click(function(event) {
          event.preventDefault();
          toggleSignIn();
        });
        initApp();
      });