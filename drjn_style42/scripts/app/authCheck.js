$(document).ready(function(){
    var url = window.location.pathname;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           if(location.hash === '#!/login' || location.hash === "#!/")
                window.location.href = "#!/post-login";
        }
        else{
            if(location.hash != '#!/login' && location.hash != '#!/')
                window.location.href = "#!/login";
        }
    });
});
