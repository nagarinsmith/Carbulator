$(document).ready(function(){
    
    $("#loginButton").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
            window.location.href = "post-login.html";
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode == "auth/user-not-found" || errorCode == "auth/wrong-password")
            {
                $("#errorLabel").html("Invalid password or email");
                $("#email").val("");
                $("#password").val("")
            }
        });
    })

})