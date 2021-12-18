import React, { useState, useEffect } from "react";
import { useInterval } from 'usehooks-ts'
import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%  {opacity: 0;   transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg)}
    100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg)}
`;
const Wrapper = styled.span`
  display: inline-block;

  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  }
`;


export default function TextAnimation(props) {
    const splitNameArray = props.text.split("")

    return (
    <Wrapper>
        {splitNameArray.map((item, index) => (
            item === " " ? <span key = {index}>&nbsp;</span> : <span key = {index}> {item} </span>
        ))}
    </Wrapper>
  );
}

