function initiateInput(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('/users').child(user.uid).child("/glicData").on('value', function(snapshot) {
                 $("#carbs").val() = snapshot.val().carbs;
                 $("#bl").val() = snapshot.val().bl;
                 $("#insulin").val() = snapshot.val().insulin;
                 $("#carbs_to_insulin").val() = snapshot.val().carbs_to_insulin;
                 $("#bl_to_insulin").val() = snapshot.val().bl_to_insulin;
                 $("#bl_target").val() = snapshot.val().bl_target;
                 $("#insulin_precision").val() = snapshot.val().insulin_precision;
            });
        }
    });
}

$(document).reay(function(){
    initiateInput();

    var carbs = $("#carbs").val();
    var bl = $("#bl").val();
    var insulin = $("#insulin").val();
    var carbs_to_insulin = $("#carbs_to_insulin").val();
    var bl_to_insulin = $("#bl_to_insulin").val();
    var bl_target = $("#bl_target").val();
    var insulin_precision = $("#insulin_precision").val();

    $("#calculator_form").on("submit",event =>{
        event.preventDefault();
        if(carbs && bl && insulin && carbs_to_insulin && bl_to_insulin && bl_target && insulin_precision){
            var result = (carbs / carbs_to_insulin) + ((bl-bl_target)/bl_to_insulin);
            console.log(result);
        }
    })
});