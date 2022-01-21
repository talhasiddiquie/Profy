import React from 'react'
import "./getToKnowUsBetter.css"
import Card from "@material-ui/core/Card";

const GetToKnowUsBetter = () => {
    return (
        <div id="knowUsBetterMainDiv">
            <div id="KnowUsBetterheadingDivv">
                <h1 id="KnowUsBetterH1">Get to <strong style={{ color: "#0d6efd" }}>know us</strong>  better</h1>
                <div id="KnowUsBetterTwoDiv">
                    <Card variant="outlined" id="KnowUsBettercardSetting" >
                        <h2 style={{ textAlign: "center", marginBottom: "15px" }}><strong style={{ color: "#0d6efd" }}>Who</strong> we are</h2>
                        <span style={{ fontSize: "18px", fontWeight: "400", paddingBottom: "10px" }}>We are a team of passionate Software Engineers ready to face data challenges.
                        </span>
                        <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "10px" }}>Our mission is to show companies how they can improve their businesses using advanced Artificial Intelligence and data technologies</p>
                        <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "10px" }} style={{ fontSize: "18px", fontWeight: "400", marginTop: "10px" }}>Our clients benefit from,
                        </p>
                        <ul>
                            <li style={{ fontSize: "15px", fontWeight: "400", marginTop: "8px" }}>Relevant Insights
                            </li>
                            <li style={{ fontSize: "15px", fontWeight: "400", marginTop: "8px" }}>Easy Analytics</li>
                            <li style={{ fontSize: "15px", fontWeight: "400", marginTop: "8px" }}>Easy Decision Making</li>
                        </ul>
                    </Card>

                    <Card variant="outlined" id="KnowUsBettercardSetting" >
                        <h2 style={{ textAlign: "center", marginBottom: "15px" }}><strong style={{ color: "#0d6efd" }}>What</strong> do We Do</h2>
                        <p style={{ fontSize: "18px", fontWeight: "400", }}>We build custom business Intelligence solutions based on advanced technologies (ML, Business Intelligence) for companies.Our services include:
                        </p>
                        <ul>
                            <li style={{ fontSize: "18px", fontWeight: "400", marginTop: "2px", color: "#0d6efd" }}>Machine Learning

                            </li>
                            <li style={{ fontSize: "18px", fontWeight: "400", marginTop: "2px", color: "#0d6efd" }}>Business Intelligence
                            </li>

                        </ul>
                        <p style={{ fontSize: "18px", fontWeight: "400", marginTop: "10px" }}>We will guide you through the entire process, from consulting the appropriate technology for your company’s needs to building solution and implementing it in your existing infrastructure.
                        </p>


                    </Card>

                   
                </div>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
               
                </div>
            </div>
        </div>
    )
}

export default GetToKnowUsBetter
