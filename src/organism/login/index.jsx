import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const AlertWrong = () => {
  return <div className="alert">Informations Incorrectes</div>;
};

const Login = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [alert, setalert] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setrole(e.target.value);
  };

  //   const submitLogin = () => {
  //     if (name === "wael ajabi" && password === "123456789") {
  //       navigate("/backOfficeInterface/dashboard");
  //     } else if (name === "emna louati" && password === "123456789") {
  //       navigate("/frontOfficeInterface/dashboard");
  //     } else {
  //       setalert(true);
  //     }
  // 	};

  const logIn = () => {
    axios.get("http://localhost:5000/api/usersAdmin/findAll").then((res) => {
      console.log(res.data);
      res.data.map((ele) => {
        if (ele.name == name && ele.password == password && role === "false") {
          navigate("/frontOfficeInterface/dashboard");
        } else setalert(true);
      });
    });

    axios
      .get("http://localhost:5000/api/usersFournis/findAll")
      .then((res) => {
        console.log(res.data);
        res.data.map((ele) => {
          if (
            ele.name == name &&
            ele.password == password &&
            role === "true"
          ) {
            navigate("/backOfficeInterface/dashboard");
          } else setalert(true);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginInterface flexStart">
      <img
        src="https://media.discordapp.net/attachments/902991650727538769/979748124014821427/Screenshot_2022-05-26_175810.png?width=863&height=581"
        alt=""
        className="leftSection"
      />
      <div className="rightSection flexCol">
        <p className="welcomLabel">Bienvenue dans Delisas! 👋</p>
        <span>Connectez vous a votre compte</span>
        <div className="flexColStart">
          <label className="labelAdd">Nom d'utilisateur</label>
          <input
            className="inputAdd"
            type="text"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="flexColStart">
          <div className="passwordLabel">
            <label className="labelAdd">Mot De Passe</label>
            <label className="labelAdd colored">Mot De Passe Oublié ?</label>
          </div>
          <input
            className="inputAdd"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="parent">
          <div>
            <input
              type="radio"
              value="true"
              onChange={handleChange}
              name="role"
            />
            <label className="radio">Fournisseur</label>
          </div>
          <div>
            <input
              type="radio"
              value="false"
              onChange={handleChange}
              name="role"
            />
            <label className="radio">Administrateur</label>
          </div>
        </div>
        <button type="submit" className="signInBtn" onClick={logIn}>
          Sign in
        </button>
        <p>
          Nouveaux dans notre platform?{" "}
          <span className="colored" onClick={() => navigate("/signup")}>
            Faire un compte
          </span>
        </p>
        <div className="line flex">
          <span></span>
          or
          <span></span>
        </div>
        <div className="socialMediaIcons flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
          </svg>
        </div>
        {alert && <AlertWrong />}
      </div>
    </div>
  );
};

export default Login;
