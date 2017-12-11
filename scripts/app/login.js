$(document).ready(function(){

    $("#registerButton").click(function(){
        window.location.href = "#!/register"
    })

    $("#loginForm").on("submit",event =>{
        event.preventDefault();
        var email = $("#email").val();
        var password = $("#password").val();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){

            window.location.href = "#!/post-login";
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
