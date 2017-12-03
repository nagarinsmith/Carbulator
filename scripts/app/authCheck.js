$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#errorLabel").html("esti logat bulan");
    } else {
         $("#errorLabel").html("bine coe, te-ai delogat");
    }
    });
})