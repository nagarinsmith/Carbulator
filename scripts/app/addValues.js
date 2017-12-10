function addValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        glucLev = Math.floor((Math.random() * 300) + 1)
          
        if (user) {
           firebase.database().ref('users/' + user.uid + "/glicValues").push({
              val: glucLev,
              time: Date.now()
            }).catch(function(error){
                console.log(error);
            })
        }
    });
}


$(document).ready(function(){
    addValues();
    setInterval(addValues,10000);
});
