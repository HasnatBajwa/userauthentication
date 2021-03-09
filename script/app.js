(function() {
    
    var firebaseConfig = {
        apiKey: "AIzaSyDz_DnJyVKt-2KNnhTCljs9T9HCJ62pIB8",
        authDomain: "ninetyplussolutions.firebaseapp.com",
        projectId: "ninetyplussolutions",
        storageBucket: "ninetyplussolutions.appspot.com",
        messagingSenderId: "696084884980",
        appId: "1:696084884980:web:f8a1a3fc973d0405a51da1"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    //  Fetching DOM Data
    const eMail = document.getElementById("userEmail");
    const userPass = document.getElementById("userPass");
    const btnLogin = document.getElementById("login");
    const btnSignUp = document.getElementById("SignUp");
    const btnLogOut = document.getElementById("logout");
    // let Users Login
    btnLogin.addEventListener('click', e =>{
        const userEmail = eMail.value;
        const pass = userPass.value;
        const authentication = firebase.auth();
        // Sign in
       const details = authentication.signInWithEmailAndPassword(userEmail, pass);
       details.catch(e => alert("User Doesnt Exist Please Signup to Continue"));
 
    });

    // SignUp Function
    btnSignUp.addEventListener('click', e =>{
        const userEmail = eMail.value;
        const pass = userPass.value;
        const authentication = firebase.auth();
        // Create a New User
       const details = authentication.signInWithEmailAndPassword(userEmail, pass);
       details.catch(e => alert(`New User ${userEmail} Created`));
 
    });
    // Logout function
    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    });

    // Real User Validation
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if (firebaseUser) {
            
            console.log(firebaseUser);
            btnLogOut.className='logout';
        }
        else{
            console.log("Not Logged In");
            btnLogOut.className='hidden';
        }

    });

}());
