$(document).ready(function(){

    $("#registerButton").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();
        var repassword = $("re-password").val();

        if(email && password && password == repassword){
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            window.location.href = "configure-account.html";
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            });
        }
        
    })
    
})