import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom"
import TypeIt from "typeit-react";

const Navigation = styled.nav`
    top:0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:8px 20px 0 20px;
    margin-bottom:0;
`

const Image = styled.img`
  width: props.width;
  height: props.height;
`
const SymblNavigation = (props) => {
    return(
        <Navigation>
            <Link to='/'>
                <Image src={props.image1} width={props.width1}></Image>
            </Link>
            {
                props.assignment ? 
                <TypeIt
                    style={{fontSize:40, color:"#fff"}}
                    options={{cursor:false,
                                speed:300
                    }}
                >
                    {props.assignment}
                </TypeIt> : null
            }
            <Link to='/'>
                <Image src={props.image2} width={props.width2}></Image>
            </Link>
        </Navigation>
    )
}

export default SymblNavigation