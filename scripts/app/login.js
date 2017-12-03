$(document).ready(function(){
    $("#loginButton").click(function(){
        firebase.auth().signInWithEmailAndPassword("xd@gmail.com", "dsadsa").catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });
       
    })

})