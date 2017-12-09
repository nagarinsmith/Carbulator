function checkNewValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('/users').child(user.uid).child("glicValues").on('value', function(snapshot) {
            $("#values").empty();
               for(e in snapshot.val()){
                   firebase.database().ref("/users").child(user.uid).child("glicValues").child(e).on("value",function(snap){
                       $("#values").append("<p>" +  + "</p>");
                        if(snap.val().val > 120 && Date.now() - snap.val().time < 10000){
                            alert("High");    
                        }    
                    });
               }
        
            });
        }
        else{
            console.log('isn');
        }
    });
    
}

$(document).ready(function(){
    $("#values").append("ss");
    console.log("dsadsa");
    checkNewValues();
   
});