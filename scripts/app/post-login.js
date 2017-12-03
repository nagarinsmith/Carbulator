$(document).ready(function(){
    $("#name").html(firebase.auth().currentUser);
    console.log(firebase.auth().currentUser);
})