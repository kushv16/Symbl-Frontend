import styled from 'styled-components';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import '../../App.module.css'
import assignment1 from '../../images/sandwich.gif'
import assignment2 from '../../images/api.gif'
import assignment3 from '../../images/react.gif'
import background from '../../images/background1.jpg';
import Github from '../../images/github.png';
import Symbl from '../../images/symbl.png';
import SymblNavigation from "../HomePage/SymblNavigation"
import Card from '../Miscellaneous/Card';
import Preloader from "../HomePage/PreLoader"

const FlexWrapper = styled.div`
    margin:auto;
    display:flex;
    flex-direction:row;
`

function AssignmentList() {
  const assignment1Text = "Write steps to prepare Peanut Butter-Jelly Sandwich"
  const assignment2Text = "Get data from the API Endpoint using Python and Javascript"
  const assignment3Text = "Display the JSON data on the frontend using ReactJS"

  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

  return (
    <div>
      {
        !loading ? (
          <div className="App"
          style={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <SymblNavigation image1={Symbl} image2={Github} width1={100} width2={80}/>
          <FlexWrapper>
              <Card image={assignment1} assignmentNumber={1} assignmentText={assignment1Text} link={"https://docs.google.com/document/d/1jUsaaCNPww9lKvAbeRt_PPotq3z0Sb_3B8QAIDMwPwA/edit?usp=sharing"}/>
              <Link to="/view_assignments/2" style={{textDecoration:"none", color:"black"}}>
                <Card image={assignment2} assignmentNumber={2} assignmentText={assignment2Text}/>
              </Link>
            <Link to="/view_assignments/3" style={{textDecoration:"none", color:"black"}}>
              <Card image={assignment3} assignmentNumber={3} assignmentText={assignment3Text}/>
            </Link>
          </FlexWrapper>
        </div>
        ) : <Preloader/>
      }
    </div>
  
  );
}

export default AssignmentList;
