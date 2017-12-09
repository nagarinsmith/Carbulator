function initiateInput(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('/users').child(user.uid).child("/glicData").on('value', function(snapshot) {
                 $("#insulin").val(snapshot.val().insulin);
                 $("#carbs_to_insulin").val(snapshot.val().carbs_to_insulin);
                 $("#bl_to_insulin").val(snapshot.val().bl_to_insulin) ;
                 $("#bl_target").val(snapshot.val().bl_target) ;
                 $("#insulin_precision").val(snapshot.val().insulin_precision) ;
            });
        }
    });
}

$(document).ready(function(){
    initiateInput();
});