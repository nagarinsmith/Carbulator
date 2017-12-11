function initiateInput(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('/users').child(user.uid).child("/glicData").on('value', function(snapshot) {
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
    


    $("#configure_form").on("submit",event =>{
        
        var carbs_to_insulin = $("#carbs_to_insulin").val();
        var bl_to_insulin = $("#bl_to_insulin").val();
        var bl_target = $("#bl_target").val();
        var insulin_precision = $("#insulin_precision").val();
        event.preventDefault();
        if(carbs_to_insulin&& bl_target && bl_to_insulin && insulin_precision){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                firebase.database().ref('users/' + user.uid + "/glicData").set({
                        carbs_to_insulin : carbs_to_insulin,
                        bl_to_insulin : bl_to_insulin,
                        bl_target : bl_target,
                        insulin_precision : insulin_precision
                    }).catch(function(error){
                        console.log(error);
                    })
                }
            });
        }
    })

    $("#calculator_form").on("submit",event =>{
        var carbs = $("#carbs").val();
        var bl = $("#bl").val();
        var carbs_to_insulin = $("#carbs_to_insulin").val();
        var bl_to_insulin = $("#bl_to_insulin").val();
        var bl_target = $("#bl_target").val();
        var insulin_precision = $("#insulin_precision").val();
        event.preventDefault();
        if(carbs && bl && carbs_to_insulin && bl_to_insulin && bl_target && insulin_precision){
            var result = (carbs / carbs_to_insulin) + ((bl-bl_target)/bl_to_insulin);
            
            result = Math.round(result/insulin_precision);
            result *= insulin_precision;
        
    
            $("#insulin").val(result);
        }
       
    })
});