import React, { useContext, useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import googleLogo from "../../images/Google Logo.png";
import { useHistory, useLocation } from "react-router";
import { Container } from "react-bootstrap";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useContext(UserContext);

  // Input value retrieval and validation by RE

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      var re = /\S+@\S+\.\S+/;
      isFieldValid = re.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNum = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNum;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      newUserInfo.error = "";
      setUser(newUserInfo);
    }
    if (!isFieldValid) {
      const newUserInfo = { ...user };

      newUserInfo.error = "Please Enter Valid Email and Password";
      newUserInfo.success = false;
      setUser(newUserInfo);
    }
  };

  // New user creation and login method

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);

          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ..
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.isLoggedIn = true;
          setUser(newUserInfo);
          history.replace(from);
          // ...
        })
        .catch((error) => {
          console.log(error.message);
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ..
          setUser(newUserInfo);
        });
    }
  };

  // Update user profile from user data

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function (res) {
        // Update successful.
        console.log(res);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  // Google Sign in method

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
        // var token = credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        const { displayName, photoUrl, email } = result.user;
        const signedInUser = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photoUrl: photoUrl,
        };
        setUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        // ...
      });
  };

  return (
    <>
      <Container className="login-box">
        <h1 className="text-info">Login Here</h1>
        <label htmlFor="newUser">New User Sign Up</label>
        <input
          type="checkbox"
          onChange={() => setNewUser(!newUser)}
          name="newUser"
          id=""
        />
        <form onSubmit={handleSubmit}>
          {newUser && (
            <div>
              <input
                onBlur={handleBlur}
                type="text"
                name="name"
                placeholder="Enter Username"
                required
              />
            </div>
          )}

          <input
            onBlur={handleBlur}
            type="text"
            name="email"
            placeholder="Enter Email"
            required
          />

          <input
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          {newUser && (
            <input
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
            />
          )}
          <input
            type="submit"
            name="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "Created" : "Logged In"} Successfully
          </p>
        )}
        <span className="text-info ">Or</span>

        <button
          style={{
            marginBottom: "4%",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "20px",
            width: "100%",
            lineHeight: "30px",
          }}
          onClick={handleGoogleSignIn}
        >
          <img src={googleLogo} alt="" width="30px" /> Continue With Google
        </button>
      </Container>
    </>
  );
};

export default Login;
