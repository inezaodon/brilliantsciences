import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut} from "firebase/auth"

const auth = getAuth()
const provider = new GoogleAuthProvider()

export const GoogleLogin = (callback) => {
    signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          return user.reloadUserInfo
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage)
          return null
          // ...
        });
}

export const GoogleLogout = () => {
  signOut(auth).then((result) => {
    console.log("Logged out");
  })
}

export const EmailPasswordLogin = (email, password, callback) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            callback(user.reloadUserInfo);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            const extractedError = String(errorCode).replace("auth/", "")
            console.log(extractedError);
            if(extractedError == "user-not-found" ){
              callback("user-not-found")
            }
            callback(null)
            // ...
        });
}