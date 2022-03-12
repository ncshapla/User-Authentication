import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import "./Auth.css";
import firebaseConfig from "./firebase.Config";

const Auth = () => {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useContext(MyContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };

  const handleBlur = (e) => {
    let res = { ...user };

    if (e.target.name === "name") {
      res.name = e.target.value;
      setUser(res);
    }
    if (e.target.name === "email") {
      res.email = e.target.value;
      setUser(res);
    }
    if (e.target.name === "password") {
      res.password = e.target.value;
      setUser(res);
    }
  };
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        localStorage.setItem('email', user.email)
        localStorage.setItem('password', user.password)
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  const handleSubmit2 = (e) => {
    createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
      .then((res) => {
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('password', user.password)
        navigate(-1);
      })
      .catch((error) => {
        alert(error.code);
      });
    e.preventDefault();
  };

  localStorage.clear()

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        localStorage.setItem('name', res.user.displayName)
        localStorage.setItem('email', res.user.email)
        localStorage.setItem('photo', res.user.photoURL)
      
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <div className="sign-form mt-4">
        <div className="d-flex">
          <button
            className={open ? "btn login active" : "btn login"}
            onClick={toggle}
          >
            Login
          </button>
          <button
            className={!open ? "btn signup active" : "btn login"}
            onClick={toggle}
          >
            Sign Up
          </button>
        </div>

        <Form className={open ? "p-3" : "p-3 d-none"}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Button className="submit" type="submit" onClick={handleSubmit}>
            Log In
          </Button>
        </Form>

        {/* sign up  */}

        <Form className={!open ? "p-3" : "p-3 d-none"}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Button className="submit" type="submit" onClick={handleSubmit2}>
            Sign Up
          </Button>
        </Form>

        {/* others login  */}

        <div className="p-3">
          <Button className="social-btn mb-3" onClick={handleSignIn}>
            Login with google
          </Button>
          <Button className="social-btn">Login with facebook</Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
