import React, { useState } from 'react'
import { Box, TextField, Typography, Button } from "@mui/material";
import {
  BrowserRouter as Router,

  useLocation, useSearchParams, useParams,useNavigate

} from "react-router-dom";
// import { Inputs } from '@mui/icons-material';
function Changepwd() {
  const params = useParams();
  const { email } = params;
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [inputs, setInputs] = useState({
    name: location.state.name,
    email: location.state.email,
    password: location.state.password,
  })

  const handleChange = (e) => {
    setInputs((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = inputs;

    fetch(`http://localhost:3000/user/editPassword/${inputs.email}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister change");
        if (data.status == "SUCCESS" || data.status !== "SUCCESS") {
          alert("Password change successful");
          window.localStorage.setItem("token", data.data);
        }
      })
  }

  const logout=()=>{
    window.localStorage.clear()
    navigate("/Login")

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent='center'
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}

          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant='h2' padding={3} textAlign="center">
            Change Password
          </Typography>


          {/* <TextField 
            onChange={handleChange}
              name="name"
              value={inputs.name}
            margin='normal'
           type={'text'} 
           variant='outlined'
            placeholder='Name'
            /> */}

          <TextField
            onChange={handleChange}
            name="email"
            value={inputs.email}
            margin='normal'
            type={'email'}
            variant='outlined'
            placeholder='Email'

          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin='normal'
            type={'password'}
            variant='outlined'
            placeholder='Password'

          />
          <Button sx={{ marginTop: 3, borderRadius: 3 }}
            type="submit"
            margin="normal"
            variant="contained"
            color="warning"
          >
            Save Password

          </Button>

          <Button onClick={logout} sx={{marginTop:3,borderRadius:3}}>Logout</Button>

        </Box>
      </form>
    </div>
  )
}

export default Changepwd