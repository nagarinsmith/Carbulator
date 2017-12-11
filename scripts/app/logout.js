$(document).ready(function(){
    $("#logoutButton").click(function(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            window.location.href = "index.html";
        }).catch(function(error) {
        // An error happened.
            console.log(error);
        });
    })
})