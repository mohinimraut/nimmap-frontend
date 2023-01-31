import React,{useState} from 'react'
import {Box,TextField,Typography,Button} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate
} from "react-router-dom";
// import { Inputs } from '@mui/icons-material';
function Userst() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isChangePwd,setIsChangePwd]=useState(false);
  const [inputs,setInputs]=useState({
    name:location.state.name,
    email:location.state.email,
    password:location.state.password,
  })
  console.log("gsgsgsgsgsg"+JSON.stringify(location.state) )

  
  const handleChange=(e)=>{
    setInputs((prevState)=>(
      {
        ...prevState,
        [e.target.name]:e.target.value
      }
    ))
  }

  const handleSubmit=(e)=>{
e.preventDefault();
console.log(inputs)
navigate(`/Changepwd/${inputs.email}`,{ state: inputs })
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
          ":hover":{
            boxShadow:'10px 10px 20px #ccc',
          },
         }}
         >
           <Typography variant='h2' padding={3} textAlign="center">
           {isChangePwd?"Saved Password":"Change Pasword" }
            </Typography>
           {/* {
            isChangePwd && (
            
            <TextField 
            onChange={handleChange}
              name="name"
              value={inputs.name}
            margin='normal'
           type={'text'} 
           variant='outlined'
            placeholder='Name'
            />
           )} */}
           

           <TextField 
           onChange={handleChange}
           name="Username"
           value={inputs.email}
            margin='normal'
           type={'text'}
            variant='outlined' 
           placeholder='Username'
         
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
          <Button sx={{marginTop:3,borderRadius:3}}  
          type="submit"
          margin="normal"
          variant="contained"
          color="warning"
          >
            Change Pasword

           </Button>
<Button onClick={logout} sx={{marginTop:3,borderRadius:3}}>Logout</Button>
           
           
        </Box>
      </form>
    </div>
  )
}

export default Userst