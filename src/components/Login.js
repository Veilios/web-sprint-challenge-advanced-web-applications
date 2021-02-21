import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  errorMessage: ""
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState(initialState);
  const { push } = useHistory();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
      e.preventDefault();
  
    axios.post(`http://localhost:5000/api/login`, user)
      .then(res => {
        console.log("Login event handler Res: ", res);
        localStorage.setItem("token", res.data.payload);
        setUser({
          ...user,
          errorMessage: ""
        });
        push("/private");
      })
      .catch(err => {
        console.error("Could not log in: ", err.message);
        setUser({
          ...user,
          errorMessage: "Username or Password not valid."
        });
      });
  }

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>

      { user.errorMessage && <h3 className="error" style={{text: "red"}}> { user.errorMessage } </h3> }
      <form onSubmit={login}>
        <label htmlFor="username">Username: </label>
        <input name="username" id="username" onChange={handleChange} type="text" />

        <label htmlFor="password">Password: </label>
        <input name="password" id="password" onChange={handleChange} type="password" />

        <button name="login" >Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.