var glucLev = 100;

function addValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        glucLev = glucLev + Math.floor((Math.random() * 20) + 1)
        if(Math.random()*1 +1 == 1)
            glucLev *= 1;
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
    setTimeout(addValues,10000);
});
