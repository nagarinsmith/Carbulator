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
        var carbs_to_insulin = $("#carbs_to_insulin").val();
        var bl_to_insulin = $("#bl_to_insulin").val();
        var bl_target = $("#bl_target").val();
        var insulin_precision = $("#insulin_precision").val();

        if(user && first_name_in && last_name_in && age_in && carbs_to_insulin&& bl_target && bl_to_insulin && insulin_precision){
            firebase.database().ref('users/' + user.uid).set({
                first_name: first_name_in,
                last_name : last_name_in,
                age : age_in
            }).catch(function(error){
                console.log(error);
            })
            firebase.database().ref('users/' + user.uid + "/glicData").set({
                carbs_to_insulin : carbs_to_insulin,
                bl_to_insulin : bl_to_insulin,
                bl_target : bl_target,
                insulin_precision : insulin_precision
            }).catch(function(error){
                console.log(error);
            }).then(function(){
               
                window.location.href = "#!/post-login";
            })
        }
       
    })
});