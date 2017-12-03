$(document).ready(function(){

    $("#configureButton").click(function(){
        var user = firebase.auth().currentUser;
        var first_name_in = $("#first_name").val();
        var last_name_in = $("#last_name").val();
        var age_in = $("#age").val();
        if(user && first_name_in && last_name_in && age_in){
            firebase.database().ref('users/' + user.uid).set({
                first_name: first_name_in,
                last_name : last_name_in,
                age : age_in
            }).catch(function(error){
                console.log(error);
            }).then(function(){
                window.location.href = "post-login.html";
            })
        }
        else{
            console.log(user,first_name_in,last_name_in,age_in);
        }
        return 0;
    })
});