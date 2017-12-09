function addValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("logged in");
    
           firebase.database().ref('users/' + user.uid + "/glicValues").push({
              val: Math.floor((Math.random() * 500) + 1),
              time: Date.now()
            }).catch(function(error){
                console.log(error);
            })
        }
    });
}


$(document).ready(function(){
    addValues();
});
