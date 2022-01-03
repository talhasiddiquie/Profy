import React from 'react'
import whatwe from "../../Assets/whatwe.png"
import "./clientwhotrust.css"

export const ClientWhoTrustedUs = () => {
    return (
        <div id='clientMainDiv'>
            <div id="clientContentDiv" >
            
            <h1 id="clientHeading"> <strong style={{color:"#0d6efd"}}>Clients</strong> who trusted us</h1>
            <img src={whatwe} alt=""/>
            </div>
        </div>
    )
}
