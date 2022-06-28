import styled from "styled-components"
import React from 'react'
import { height } from "@mui/system"


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`


const Announcements = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over ₦10,000
    </Container>
  )
}

export default Announcements
