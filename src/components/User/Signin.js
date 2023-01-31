import React,{useState} from 'react';

//styled components
import {StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel, 
    Avatar,
    StyledTitle,
    colors,
ButtonGroup
} from '../../components/Styles';
import Logo from '../../assets/logo.jpg';
import {Formik,Form} from 'formik';
import {TextInput} from "../../components/FormLib";
//icons
import {FiMail,FiLock} from "react-icons/fi";
function Signin() {
  

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo}/>
        <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>

        <Formik>
            {()=>(
                <Form>
               <TextInput
               name="email"
               type="text"
              Label="Email Address"
               placeholder="olga1@example.com"
               icon={<FiMail/>}
               />

<TextInput
               name="password"
               type="password"
          Label="Password"
               placeholder="*****"
               icon={<FiLock/>}
               />

               <ButtonGroup>
                <StyledFormButton type="submit">Login</StyledFormButton>
               </ButtonGroup>
                </Form>
            )}
        </Formik>
      </StyledFormArea>
    </div>
  )
}

export default Signin
