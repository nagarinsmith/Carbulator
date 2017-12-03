$(document).ready(function(){
    var url = window.location.pathname;
    var myPageName = url.substring(url.lastIndexOf('/') + 1); 
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           if(myPageName == "index.html")
                window.location.href = "post-login.html";
        }
        else{
            if(myPageName != "index.html")
                window.location.href = "index.html";
        }
    });
});
