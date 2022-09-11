import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
border: none;
padding: 15px 40px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Redirected = () => {
  return (
  <div>
   <p> You will be redirected shortly</p>
  <p>Go back <Link to= "/" style={{ textDecoration: "none"}}>
   <Button>HOME</Button>
   </Link></p>
   </div>
  )

};

export default Redirected;
