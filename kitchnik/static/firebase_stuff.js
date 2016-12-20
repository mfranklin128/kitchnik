$(function() {
	var config = {
    // It's ok to expose this key, because requests are whitelisted
    // to the domain.
    	apiKey: "AIzaSyDXympfDg-JvqKJxYDB50dnQoUa9atV4oQ",
    	authDomain: "kitchnik-152822.firebaseapp.com",
    	databaseURL: "https://kitchnik-152822.firebaseio.com",
    	storageBucket: "kitchnik-152822.appspot.com",
    	messagingSenderId: "183420526381"
  	};
	firebase.initializeApp(config);
	function configureFirebaseLogin() {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				$('#logged-out').hide();
				var name = user.displayName;
		
				// If the provider gives a display name, use the name for the
				//personal welcome message. Otherwise, use the user's email.
				var welcomeName = name ? name : user.email;

				user.getToken().then(function(idToken) {
					userIdToken = idToken;
					$('#user').text(welcomeName);
					$('#logged-in').show();
				});
			} else {
				$('#logged-in').hide();
				$('#logged-out').show();
			}
		});
	}

	function configureFirebaseLoginWidget() {
    	var uiConfig = {
			'signInSuccessUrl': '/',
			'signInOptions': [
				// Leave the lines as is for the providers you want to offer your users.
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
      		],
      		// Terms of service url
			'tosUrl': '/',
		};
	
		var ui = new firebaseui.auth.AuthUI(firebase.auth());
		ui.start('#firebaseui-auth-container', uiConfig);
	};

	var signOutBtn =$('#sign-out');
	signOutBtn.click(function(event) {
    	event.preventDefault();
		
		firebase.auth().signOut().then(function() {
			console.log("Sign out successful");
		}, function(error) {
			console.log(error);
		});
	});

	configureFirebaseLogin();
	configureFirebaseLoginWidget();
});
