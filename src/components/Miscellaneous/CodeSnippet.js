import React from "react";
import styled from "styled-components";
import PythonSnippet from "../../images/codesnippet_py.png";
import JavascriptSnippet from "../../images/codesnippet_js.png";
import CurlSnippet from "../../images/codesnippet_curl.png";
import NodeJSSnippet from "../../images/codesnippet_node.png";
import ButtonGroup from "./ButtonGroup";

const Image = styled.img`
    display: block;
    margin: 0 auto;
    background: transparent;
    width:1000px;
`
const CodeSnippet = (props) => {
    const snippet = () => {
        switch(props.language) {
            case "python":   return <div>
                    <Image src = {PythonSnippet} />;
                    <ButtonGroup code = {"https://github.com/kushv16/Symbl_API/tree/master/Python"} />
                </div>                
            case "javascript":   return <div>
                    <Image src = {JavascriptSnippet} />;
                    <ButtonGroup code = {"https://github.com/kushv16/Symbl_API/tree/master/Javascript"}/>
                </div>
            case "curl": return <div>
                    <Image src = {CurlSnippet} />;
                    <ButtonGroup code = {"https://github.com/kushv16/Symbl_API/tree/master/cURL"}/>
                </div>
            case "nodejs":  return <div>
                    <Image src = {NodeJSSnippet} />;
                    <ButtonGroup code = {"https://github.com/kushv16/Symbl_API/tree/master/NodeJS"}/>
                </div>
            default:  return <div>
                    <Image src = {CurlSnippet} />;
                    <ButtonGroup code = {"https://github.com/kushv16/Symbl_API/tree/master/cURL"}/>
                </div>
          }
    }

    return(
        <div>
            {snippet()}            
        </div>
    )
}

export default CodeSnippet;