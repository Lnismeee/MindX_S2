import React, { useEffect, useState, useContext } from "react";
import { ContextCheckLogin } from "../../../../Context/CheckLogin.jsx";
import "./index.css";
import Box_login from "./Box_login/Box_login.jsx";

const Login = () => {
  const cl = useContext(ContextCheckLogin);
  const [boxlogin, setBoxlogin] = useState(false);
  const [boxlogout, setBoxlogout] = useState(false);
  return (
    <div className="login">
      {cl.CheckLogin && (
        <label htmlFor="logout">
          <i class="fa-regular fa-circle-user"></i>
        </label>
      )}
      {!cl.CheckLogin && (
        <label htmlFor="login">
          <i className="fa-regular fa-user"></i>
        </label>
      )}
      <input
        type="checkbox"
        className="none"
        id="login"
        checked={boxlogin}
        onChange={() => {
          setBoxlogin(!boxlogin);
        }}
      />
      <input
        type="checkbox"
        className="none"
        id="logout"
        checked={boxlogout}
        onChange={() => {
          setBoxlogout(!boxlogout);
        }}
      />
      <div className="boxlogin">
        <label htmlFor="login">
          <i className="fa-solid fa-xmark"></i>
        </label>
        <Box_login />
      </div>
      <label htmlFor="login" className="nar-overplay1"></label>
      <label htmlFor="logout" className="nar-overplay"></label>
    </div>
  );
};

export default Login;
