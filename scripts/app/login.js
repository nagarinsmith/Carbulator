$(document).ready(function(){
    $("#loginButton").click(function(){
        firebase.auth().signInWithEmailAndPassword("root@gmail.com", "root12").catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });
       
    })

    $("#logoutButton").click(function(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
    })

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#errorLabel").html("esti logat bulan");
    } else {
         $("#errorLabel").html("bine coe, te-ai delogat");
    }
    });
})