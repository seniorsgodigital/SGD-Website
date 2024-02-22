function handleSignUp() {
    // firebase.auth().signOut();
    var email = $("#email").val();
  var name = $("#name").val();
    var password = $("#password").val();
    if (name.length < 4) {
      alert("Please Enter your name.")
      $(".alert-dismissible").css("display", "block")
      $(".loading").addClass("hidden");
      $("#loader1").css("display", "block");
      return;
    }
    if (email.length < 4) {
      alert("Enter a valid email.")
      $(".alert-dismissible").css("display", "block")
      $(".loading").addClass("hidden");
      $("#loader1").css("display", "block");
      return;
    }
    if (password.length < 6) {
      alert("Please enter a password of more than 6 characters")
      $(".alert-dismissible").css("display", "block")
      $(".loading").addClass("hidden");
      $("#loader").css("display", "block");
      return;
    }
    $("#loader").css("display", "none");
    $("#loader1").css("display", "none");
    $(".loading").removeClass("hidden");
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (data) {
        var userId = data.user.uid;
        var userRef;
        let obj = {
          name: name,
          email: email,
          uid: userId
        }
        database.collection("users").doc(userId).set(obj).then(function () {
          alert("account created with email :" + email);
          firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              window.location.replace("dashboard.html");
            }
          });
        }).catch(function (error) {
          console.log("user not Created: ", error);
        });
        $(".loading").addClass("hidden");
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
          $(".loading").addClass("hidden");
        } else {
          alert(errorMessage);
          $(".loading").addClass("hidden");
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }
  $(function () {
    $('#signup-Btn').click(function (event) {
      event.preventDefault();
      handleSignUp();
    });
  });