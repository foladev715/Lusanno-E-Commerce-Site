import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("/images/register-page.jpg");
display: flex;align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({width: "75%"})}

`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Title = styled.h1`
font-size:24px ;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;
const Button = styled.button`
border: none;
padding: 15px 40px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name" aria-label="form input"/>
            <Input placeholder="last name" aria-label="form input"/>
            <Input placeholder="username" aria-label="form input"/>
            <Input placeholder="email" aria-label="form input"/>
            <Input placeholder="password" aria-label="form input"/>
            <Input placeholder="confirm password" aria-label="form input"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Buttons>
            <Link to= "/redirected" style={{ textDecoration: "none"}}>

            <Button>CREATE</Button>
            </Link>

            <Link to= "/" style={{ textDecoration: "none"}}>
            <Button>HOME</Button>
            </Link>

            </Buttons>

        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
