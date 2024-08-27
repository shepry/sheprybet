// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
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
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            userEmail.textContent = user.email;
            logoutContainer.style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        } else {
            // User is signed out
            logoutContainer.style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }
    });

    // Login
    loginButton.addEventListener('click', () => {
        const email = loginEmail.value;
        const password = loginPassword.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log('User signed in:', userCredential.user);
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    });
});
