import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../../images/assignment3_bg.png";
import Symbl from "../../images/SymblAI_White.svg";
import Github from "../../images/GitHubExternship.png"
import CodeSnippet from "../Miscellaneous/CodeSnippet";
import SymblNavigation from "../HomePage/SymblNavigation";
import Preloader from "../HomePage/PreLoader";

const ButtonList = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
const Button = styled.button`
    padding:15px;
    background:transparent;
    border:none;
    font-size:17px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration:none;
    color:#fff;
    font-weight:600;
    margin: 20px;
    transition: .2s ease-in-out 0s;
    &:hover{
        z-index: 1;
        color: #000000;
        backdrop-filter: blur(10px);
        background-clip: border-box;
        border: 2px solid transparent;
        background: #e8ecfcbb;
        transform: scale(1.15);
    }
`

const GlassButton = styled.button`
    padding:15px;
    background:transparent;
    border:none;
    font-size:17px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration:none;
    color:#fff;
    font-weight:600;
    margin: 20px;
    transition: .2s ease-in-out 0s;
    z-index: 1;
    color: #000000;
    backdrop-filter: blur(10px);
    background-clip: border-box;
    border: 2px solid transparent;
    background: #e8ecfcbb;
    transform: scale(1.15);
`
const Assignment2 = () => {
    const [language, setLanguage] = useState("curl")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

    return(
        <div>
            {
                !loading ? (
                    <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: "flex",
                flexDirection: "column",
            }} >
                
            <SymblNavigation image1 = {Symbl} image2={Github} width1={140} width2={50} assignment={"Assignment 2"}/>
            <ButtonList>
                {language !== "curl"
                                        ? <Button onClick={() => setLanguage("curl")}>cURL</Button> 
                                        : <GlassButton>cURL</GlassButton>
                }
                {language !== "python"
                                        ? <Button onClick={() => setLanguage("python")}>Python</Button> 
                                        : <GlassButton>Python</GlassButton>
                }
                {language !== "nodejs"
                                        ? <Button onClick={() => setLanguage("nodejs")}>NodeJS</Button> 
                                        : <GlassButton>NodeJS</GlassButton>
                }
                { language !== "javascript"
                                        ? <Button onClick={() => setLanguage("javascript")}>JavaScript</Button> 
                                        : <GlassButton>JavaScript</GlassButton>
                }   
            </ButtonList>
            <CodeSnippet language={language}/>
            </div>
                ) : (<Preloader/>)
            }

        </div>
    )
};

export default Assignment2;
