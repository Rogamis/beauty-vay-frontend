import React from 'react'
import videoback from "../../video/videoback.mp4"

function BackgroundLoginPage() {
  return (
    <video src={videoback} autoPlay loop muted width="100%"
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            filter: "brightness(70%)"
        }}> 
        </video>
  )
}

export default BackgroundLoginPage;