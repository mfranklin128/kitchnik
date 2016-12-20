$(function() {
    // Wait until we're logged in.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getToken().then(function(idToken) {
                var url = window.location.href;
                var notes_uri = "api/v1/tasks";
                $.ajax(url + notes_uri, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + idToken
                    },
                }).then(function(data) {
                    console.log(data);
                    data['tasks'].forEach(function(task) {
                        $("#tasks-list").append("<li>" + task["title"] + "</li>")
                    });
                    $("#server-auth-stuff").text(data["user"]);
                });
            });
        } else {
            console.log("no user logged in");
        }
    });
});
