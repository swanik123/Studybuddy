// Dummy Payment Handling
function subscribe(amount) {
    alert(`You have subscribed for ₹${amount}. Payment gateway integration needed.`);
}

// Firebase Authentication
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => alert("Sign Up Successful!"))
        .catch(error => alert(error.message));
}

function logIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => alert("Login Successful!"))
        .catch(error => alert(error.message));
}

function googleSignIn() {
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(() => alert("Google Sign-In Successful!"))
        .catch(error => alert(error.message));
}

function resetPassword() {
    let email = document.getElementById("email").value;

    auth.sendPasswordResetEmail(email)
        .then(() => alert("Password reset email sent!"))
        .catch(error => alert(error.message));
}
