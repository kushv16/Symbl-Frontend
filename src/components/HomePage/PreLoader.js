import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import React from "react";

const PreLoader = () => {
    return(
        <div style={{
            height:"100vh",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
          }}>
            <ClimbingBoxLoader color={"orange"} size={40}/>
        </div>
    )
}

export default PreLoader;