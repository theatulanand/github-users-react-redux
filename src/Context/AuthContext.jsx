import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom"

export const authContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsauth] = React.useState(false);
  const [token, setToken] = React.useState("Login First To Get Token");

  const handleLogin = (email, pass) => {
    console.log("hii");
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email: email,
        password: pass
      }
    })
      .then(function (res) {
        console.log(res.data.token);
        setIsauth(true);
        setToken(res.data.token);

        return <Navigate to= "/"/>
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Email or Pass");
      });
  };

  const handleLogout = () => {
    setIsauth(false);
    setToken("Login First To Get Token");
  };

  return (
    <authContext.Provider value={{ isAuth, handleLogin, handleLogout, token }}>
      {children}
    </authContext.Provider>
  );
}