function addValues(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('users/' + user.uid + "/glicValues").push({
              val: Math.floor((Math.random() * 500) + 1),
              time: Date.now()
            }).catch(function(error){
                console.log(error);
            })
        }
    });
}

function addFixedValue(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           firebase.database().ref('users/' + user.uid + "/glicValues").push({
              val: ,
              time: 
            }).catch(function(error){
                console.log(error);
            })
        }
    });
}

$(document).ready(function(){
    $("").click(function(){
        addValues();
    })
    $("").click(function(){
        addFixedValue();
    })
});
