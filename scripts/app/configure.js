$(document).ready(function () {
    $('#glicForm').hide();
    $('#nextButton').click(function () {
       
        
                $('#personalForm').toggle('slide', {
                direction: 'left',
                complete:function(){
                     $('#glicForm').toggle('slide', {
                         direction: 'right'
                     });
                }
            });
            
        return false;
    });
    $('#backButton').click(function () {
                $('#glicForm').toggle('slide', {
                direction: 'right',
                complete:function(){
                     $('#personalForm').toggle('slide', {
                         direction: 'left'
                     });
                }
            });
            
        return false;
    });

    $("#glicForm").on("submit",event =>{
        event.preventDefault();
        var user = firebase.auth().currentUser;
        var first_name_in = $("#first_name").val();
        var last_name_in = $("#last_name").val();
        var age_in = $("#age").val();
        var glic_min_in = $("#glic_min").val();
        var glic_max_in = $("#glic_max").val();
        var glic_target_in = $("#glic_target").val();
        var carb_insulin_ratio_in = $("#carb_insulin_ratio").val();
        var glucose_insulin_ratio_in = $("#glucose_insulin_ratio").val();

        if(user && first_name_in && last_name_in && age_in && glic_min_in && glic_max_in && glic_target_in && carb_insulin_ratio_in && glucose_insulin_ratio_in){
            firebase.database().ref('users/' + user.uid).set({
                first_name: first_name_in,
                last_name : last_name_in,
                age : age_in
            }).catch(function(error){
                console.log(error);
            })
            firebase.database().ref('users/' + user.uid + "/glicData").set({
                glic_min: glic_min_in,
                glic_max: glic_max_in,
                glic_target: glic_target_in,
                carb_insulin_ratio: carb_insulin_ratio_in,
                glucose_insulin_ratio: glucose_insulin_ratio_in
            }).catch(function(error){
                console.log(error);
            }).then(function(){
                console.log("nextStep2");
                window.location.href = "../post-login.html";
            })
        }
        else{
            console.log(user,first_name_in,last_name_in,age_in);
        }
    })
});