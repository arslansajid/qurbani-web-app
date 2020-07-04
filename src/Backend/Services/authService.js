import firebase from 'firebase';

// export const signUp = async (email, password) => {
//   let success = true;
//   await firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then(async (user) => {
//       alert('Sign up success')
//     }).catch((error)=> {
//       success = false;
//       alert(error.code + ': ' + error.message);
//     });
//     return success;
// }

export const sendForgotPasswordEmail = async function (emailAddress) {
  try {
    const res = await firebase.auth().sendPasswordResetEmail(emailAddress);
    return res;
  } catch (err) {
    throw err.message;
  }
};

export const signUp = async function (email, password) {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return res;
  } catch (err) {
    throw err.message;
  }
}

export async function signInWithEmail(email, password) {
  let success = true;
  await firebase.auth().signInWithEmailAndPassword(email, password)
  // .then(async (user) => {
  //   alert('Sign in succcess')
  // })
  .catch(function (error) {
    success = false;
    alert(error.code + ': ' + error.message);
  });
  return success;
}

export async function signInWithPhoneNumber(phoneNo, password) {
  let success = true;
  await firebase.auth().signInWithEmailAndPassword(phoneNo, password).catch(function (error) {
    success = false;
    alert(error.code + ': ' + error.message);
  });
  return success;
}

export async function getCurrentUserId() {
  var user = firebase.auth().currentUser;
  if (user != null) {
    return user.uid;
  }
}

export async function getSignedInUser() {
  console.log("CALEED")
  try {
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        const res = await user;
        console.log("HHA  res  HHAHA", res)
        console.log("HAHAHAHHAHA", user)
        return res
      } else {
        // No user is signed in.
        console.log("No user is signed in.",)
        return 0;
      }
    })
  } catch (err) {
    throw err.message;
  }
}


