import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`
color: orange;
`;

const Desc = styled.p`
margin: 20px 0;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}

`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LUSANNO APPARELS</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta repellendus praesentium. Dolorum aliquam cupiditate provident molestiae facilis iure fuga quos, obcaecati, sed consequuntur delectus eius, esse ipsa in doloribus?</Desc>
      <SocialContainer>
        <SocialIcon color='385999'>
            <Facebook/>
        </SocialIcon>
        <SocialIcon color='E4405F'>
            <Instagram/>
        </SocialIcon>
        <SocialIcon color='55ACEE'>
            <Twitter/>
        </SocialIcon>
        <SocialIcon color='E60023'>
            <Pinterest/>
        </SocialIcon>
      </SocialContainer>
      </Left>
      <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Corporate Uniforms Fashion</ListItem>
        <ListItem>Professional Uniforms</ListItem>
        <ListItem>School Uniforms</ListItem>
        <ListItem>All Products</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}}/> Blk A1C1, Sura Shopping Complex, Simpson Street, Lagos State.
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>
        08062789303, 08118878939, 08032035329
        </ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>
        info@lusannoapparels.com, lusanno.apparel@yahoo.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
