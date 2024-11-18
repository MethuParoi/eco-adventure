// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import auth from '../firebase/firebase.init';
// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';

// function Home() {
//   const provider = new GoogleAuthProvider();
//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
      
//   }
//   // const user = useContext(AuthContext);
//   // console.log(user);
//   return (
//     <div className='mt-16'>
//       <button onClick={handleGoogleSignIn} className='py-2 px-3 bg-yellow-400 rounded-xl'>Sign in with Google</button>
//     </div>
//   )
// }

// export default Home