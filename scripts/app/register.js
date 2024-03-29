$(document).ready(function(){

    $("#backButton").click(function(){
        window.location.href = "#!/";
    })

    $("#registerForm").on("submit",event=>{
        event.preventDefault();

        var email = $("#email").val();
        var reemail = $("#reemail").val();
        var password = $("#password").val();
        var repassword = $("#repassword").val();

        if(email && password && password == repassword && email == reemail){
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            window.location.href = "#!/";
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            });
        }
        
    })
    
})