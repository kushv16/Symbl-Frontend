import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
const Button = styled.a`
    padding:15px;
    font-size:20px;
    font-family: Arial;
    background: transparent;
    border: 2px solid #fff;
    background-clip: border-box;
    cursor: pointer;
    text-align: center;
    text-decoration:none;
    border-radius:10px;
    color:#fff;
    margin: 10px;
    &:hover{
        background: #e8ecfcbb;
        backdrop-filter: blur(10px);
        border: none;
        color: #000
    }
`

const ButtonGroup = (props) => {
    return(
        <ButtonDiv>
            <Button href={props.code} target="_blank">
                Source Code
            </Button>
            <Button href= "https://docs.google.com/document/d/15Sd1iXj3zHWB3gin7uQkFGhU9jrtwX-2_h3kfxh3X6g/edit?usp=sharing" target ="_blank">
                Output Screenshots
            </Button>
        </ButtonDiv>
    )
}

export default ButtonGroup