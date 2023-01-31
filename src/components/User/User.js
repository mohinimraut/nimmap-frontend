import React from 'react'
import {StyledContainer,StyledTitle,StyledSubTitle,Avatar,StyledButton,ButtonGroup} from "../Styles";
import Logo from "../../assets/logo.jpg";
function User() {
  return (
    <>
    <StyledContainer>
    <div>
      <div 
      style={{
        position:"absolute",
        top:60,
        left:0,
        backgroundColor:"transparent",
        width:"100%",
        padding:"15px",
        dispaly:"flex",
        justifyContent:"flex-start",
      }}
      >
        <Avatar image={Logo}/>
      </div>
      <StyledTitle size={65}>
        Welcome to Try-Catch
      </StyledTitle>
      <StyledSubTitle size={27}>
        Feel free to explore our page
      </StyledSubTitle>
      <ButtonGroup><StyledButton to="/Login">Login</StyledButton></ButtonGroup>
      <ButtonGroup><StyledButton to="/signup">Signup</StyledButton></ButtonGroup>
      </div>
    </StyledContainer>
    
    </>

  )
}

export default User