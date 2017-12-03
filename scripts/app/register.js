$(document).ready(function(){

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        window.location.href = "configure-account.html";
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    });
    
})