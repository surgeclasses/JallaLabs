import React, { useState, useCallback, useEffect, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// import firebase from "firebase";
import { useHttpClient } from "./hooks/http-hook";
import { AuthContext } from "./context/auth-context";
import { AdminContext } from "./context/admin-context";
import HomePage from "./WebPages/HomePage/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Services from "./WebPages/ServicesPage/Services";
import AboutPage from "./WebPages/AboutPage/AboutPage";
import ContactPage from "./WebPages/ContactPage/ContactPage";

function App() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName,setUserName]=useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  });

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (!!user) {
  //       console.log(user);
  //       setUserEmail(user.email);
  //       setUserName(user.displayName);
        
  //       login();
  //     } else {
        
  //       logout();
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const createUpdateUser = async () => {
  //       //check if the user already exists
  //       try {
  //         const responseData = await sendRequest(
  //           process.env.REACT_APP_BACKEND_URL +
  //             "/user/" +
  //             firebase.auth().currentUser.email
  //         );
  //         console.log("sending response", responseData._id);
  //         setUserId(responseData._id);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   };
  //   createUpdateUser();
  // }, [isLoggedIn]);

  const loginAdmin = useCallback(() => {
    setIsAdmin(true);
  });

  const logoutAdmin = useCallback(() => {
    setIsAdmin(false);
  });

  // useEffect(() => {
  //   if (!!firebase.auth().currentUser) {
     
  //     login();
  //   } else {
  //     logout();
  //   }
  // }, [login, isLoggedIn]);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/service" exact>
          <Services />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (isAdmin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/service" exact>
          <Services />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/service" exact>
          <Services />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        email: userEmail,
        userName: userName,
        userid: userId,
        login: login,
        logout: logout,
      }}
    >
      <AdminContext.Provider
        value={{ isLoggedIn: isAdmin, login: loginAdmin, logout: logoutAdmin }}
      >
        <Router>
          <Navbar />
          <h1> In Developing Stage</h1>
          <h2> In Yash System </h2>
          {/* {isLoggedIn && <UserNav />} */}
          {routes}
          {/* <Footer /> */}
        </Router>
      </AdminContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

