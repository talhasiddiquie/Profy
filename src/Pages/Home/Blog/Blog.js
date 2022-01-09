import React from 'react'
import Container from '@material-ui/core/Container';    

import background from "../../../Assets/bradcam.png";
import { blogdata } from './Data';
import "./blog.css"
import Wrapper from '../../../Components/wrapper.comp';
const Blog = () => {
    return (
        <Wrapper>
                  <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          zIndex: "0",
          height: "32em",
          width: "100%",
        //   marginTop: "105px",
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1 style={{ fontSize: "60px" }}>Blog</h1>
        </div>
      </div>
           <Container>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginTop:"50px"}}>
                
                {blogdata.map(user => (
                       <div style={{marginBottom:"50px",width:"60%"}}>
                           <div className="blog_item_img" style={{position:"relative"}}>
                               <img style={{width:"100%"}} alt=""  src={user.imgUrl} />
                            <a style={{textDecoration:"none"}} className="blog_item_date" href="!#" >
                                <h3 style={{textAlign:"center"}}>{user.dateh1}</h3>
                                <h3>{user.dateh2}</h3>
                            </a>
                           </div>

                           <div className="blog_details">
                            <a  className="blog_area" href="!#">
                                <h3>{user.heading}</h3>
                            </a>
                            <p style={{marginBottom:"35px"}}>
                                {user.shortDesc}
                            </p>

                           </div>

                           </div>
                ))}

                
                
                </div>

            
                </Container>
        </Wrapper>

       
    )
}

export default Blog
