import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential
} from "firebase/auth";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirebaseConfig } from "./firebase-config";


export async function signIn(): Promise<UserCredential> {
  var provider = new GoogleAuthProvider();
  var result = await signInWithPopup(getAuth(), provider);
  return result;
}

export function signOutUser(): void {
  signOut(getAuth());
}

export function initFirebaseAuth(): void {
  onAuthStateChanged(getAuth(), authStateObserver);
}
// El código anterior registra la función 'authStateObserver' como observador
// del estado de autenticación. Se activará cada vez que cambie el estado
// de autenticación (cuando el usuario inicie o cierre sesión).
// invocada al final de la pagina.

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl(): string {
  return getAuth().currentUser?.photoURL || "/images/profile_placeholder.png";
}

// Returns the signed-in user's display name.
function getUserName(): string | null | undefined {
  return getAuth().currentUser?.displayName;
}

// Returns true if a user is signed-in.
// function isUserSignedIn() {
//   return !!getAuth().currentUser;
// }

// ----------------------------------------------------
// path es la referencia en carpeta de firebase
export function deleteImageOfStorage(path: string): Promise<void> | undefined {
  try {
    const storage = getStorage();
    let desertRef = ref(storage, path);
    return deleteObject(desertRef);
  } catch (error) {
    console.log("deleteImageOfStorage - firebase", error);
  }
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user: any) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    let size = `url(${addSizeToGoogleProfilePic(profilePicUrl)})`

    return `<div>
      <img background-image=${size}> </img>
      < a >${ userName }</a>
    < /div>`

    } else {
      return `<a>Sesion</a>`;
    }
  }

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url: any) {
  if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
    return url + "?sz=80";
  }
  return url;
}

// TODO 0: Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

// TODO 12: Initialize Firebase Performance Monitoring

initFirebaseAuth();
