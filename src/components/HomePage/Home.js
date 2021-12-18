import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import {Link} from "react-router-dom";
import PlanetOne from "../../images/planet.svg";
import PlanetTwo from "../../images/planet-2.svg";
import PlanetThree from "../../images/planet-3.svg";
import PlanetFour from "../../images/planet-4.svg";
// import background from "../../images/home_bg.gif";
import TextAnimation from "../Miscellaneous/TextAnimation";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  padding-bottom: 0rem;
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  padding-bottom: 0rem;
  width: 40vw;
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 4rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 250px;
  height: 250px;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-bottom: 0rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 140px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 20px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 55px;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 3rem;
  margin: 4px;
  font-size: 1.3rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  text-decoration: none;
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1>
            <TextAnimation text={"Kush Vora"}/>
          </motion.h1>
          <motion.p>
            <TypeIt
              getBeforeInit={(instance) => {
                instance.type("Symbl.AI").pause(750).delete(8).pause(750).type("Github Externship");
                return instance;
              }}
              options={{
                speed:200,
                loop: true
              }}
          />
          </motion.p>
          <div>
            <Link to='/view_assignments' style={{ textDecoration: "none" }}>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: "#67F6E7",
                  border: "none",
                  color: "#000",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
              >
                View Assignments
              </Button>
            </Link>
            <Button
              href='https://kushvora.me/'
              target='_blank'
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#67F6E7",
                border: "none",
                color: "#000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              About me
            </Button>
          </div>
        </ColumnLeft>
        <ColumnRight>
        <Image
              src={PlanetOne}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetTwo}
              alt='planet'
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetThree}
              alt='planet'
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetFour}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
        </ColumnRight>
      </Container>
    </Section>
    // </div>
  );
};

export default Home;
