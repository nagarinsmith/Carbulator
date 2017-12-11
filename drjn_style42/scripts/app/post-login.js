$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('/users').child(user.uid).on('value', function(snapshot) {
                 $("#name").html(snapshot.val().first_name);
            });
        }
        else{
            window.location.href = "index.html";   
        }
    });
})