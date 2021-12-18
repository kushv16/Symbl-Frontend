import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.a)`
  display: inline-block;
  padding: 3em;
  margin: 2em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  height: 350px;
  width: 250px;
  max-height: 350px;
  max-width: 250px;
  text-align: center;
  text-decoration:none;
  color:black;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 8px;
`;

const StyledH1 = styled.h1`
  line-heright: 1.5;
  letter-spacing: 1.5;
  font-family: "Gilroy";
  margin: 20px;
`;

const StyledH3 = styled.h3`
  line-heright: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = (props) => {
  const [propos, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      href={props.link}
      target="_blank"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: propos.xys.interpolate(trans),
      }}
    >
      <StyledImg src={props.image} />
      <StyledH1>Assignment {props.assignmentNumber}</StyledH1>
      <StyledH3>{props.assignmentText}</StyledH3>
    </Container>
  );
};

export default Card;
