$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           $("#name").html(firebase.database().ref("users/"+user.uid));
           console.log(user);
        }
        else{
            window.location.href = "index.html";   
        }
    });
})