document.addEventListener('DOMContentLoaded', function() {
    // Check if Firebase is loaded
    if (typeof firebase === 'undefined') {
        console.error('Firebase SDK is not loaded.');
        alert('Firebase SDK is not loaded.');
        return;
    }
    
    console.log('Firebase SDK is loaded.');

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDkpi3eZF5MegPxJLboIXjz9ZmbQheQuDE",
      authDomain: "shepry-474d7.firebaseapp.com",
      projectId: "shepry-474d7",
      storageBucket: "shepry-474d7.appspot.com",
      messagingSenderId: "119933109639",
      appId: "1:119933109639:web:7ab028c48a5341d4a8ff22",
      measurementId: "G-NLP2ESJJ6J"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const teamsList = document.getElementById('teams-list');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const logoutContainer = document.getElementById('logout-container');
    const userEmail = document.getElementById('user-email');

    // Example static list of teams
    const teams = [
        'Arsenal',
        'Chelsea',
        'Manchester City',
        'Liverpool',
        'Tottenham Hotspur'
    ];

    // Display the list of teams
    teamsList.innerHTML = `<ul>${teams.map(team => `<li>${team}</li>`).join('')}</ul>`;

    // Authentication state listener
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            userEmail.textContent = user.email;
            logoutContainer.style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        } else {
            logoutContainer.style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }
    });

    // Login
    loginButton.addEventListener('click', () => {
        const email = loginEmail.value;
        const password = loginPassword.value;
        console.log('Attempting login with', email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
            })
            .catch((error) => {
                console.error('Error signing in:', error);
                alert('Login failed: ' + error.message);
            });
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    });
});
