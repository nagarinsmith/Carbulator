$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           $("#name").html(firebase.auth().currentUser.email);
        }
        else{
            window.location.href = "index.html";   
        }
    });
})