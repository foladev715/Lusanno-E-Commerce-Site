import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center
    ${mobile({padding: "10px 0"})}

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}

`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
border: none;
${mobile({width: "50px"})}

`;

const Center = styled.div`
flex: 1;
text-align: center;
`;


const Logo = styled.h1`
font-weight: bold;
color: orange;
${mobile({fontSize: "24px"})}

`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}

`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft:"10px"})}
&:hover{
      transform: scale(1.1);
    }
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search' aria-label="search"/>
                <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Link to= "/" style={{ textDecoration: "none"}}>
            <Center><Logo>LUSANNO APPARELS</Logo></Center>
            </Link>
            <Right>
            <Link to= "/" style={{ textDecoration: "none"}}>
            <MenuItem>HOME</MenuItem>
            </Link>
            <Link to= "/register" style={{ textDecoration: "none"}}>

                <MenuItem>REGISTER</MenuItem>
                </Link>

                <Link to= "/login" style={{ textDecoration: "none"}}>

                <MenuItem>SIGN IN</MenuItem>
                </Link>

                <Link to= "/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlined color="action" />
    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
        
        </Container>
  )
}

export default Navbar