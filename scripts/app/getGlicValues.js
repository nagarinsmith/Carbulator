function checkNewValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('/users').child(user.uid).child("glicValues").on('value', function(snapshot) {
            $("#values").empty();
               for(e in snapshot.val()){
                   firebase.database().ref("/users").child(user.uid).child("glicValues").child(e).on("value",function(snap){
                        $("#values").append(snap.val().val + " ");
                        if(snap.val().val > 120 && Date.now() - snap.val().time < 10000){
                            alert("High");    
                        }    
                    });
               }
        
            });
        }
    });
    
}

$(document).ready(function(){
    checkNewValues();
});