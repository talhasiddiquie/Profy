import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import logo1 from "../Assets/logo1.png"
import { FaFacebookF ,FaTwitter,FaInstagram} from "react-icons/fa";


import "./footer.css"
export default function Footer() {
  return (
    <footer style={{background:"#2b2b2b"}}>
      <Box 
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
       
        color="#919191"
      >
        <Container maxWidth="lg" >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
             
              <Box>
                <img  alt="" src={logo1}/>
              </Box>
              <Box>
               <p>info@ssuet.edu.pk</p>
              </Box>
              <Box>
               <p>(021)34988000</p>
              </Box>
              <Box>
               <p>ST-16 University Rd, Block 5 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh</p>
              </Box>
              <div >
              
                <FaFacebookF  onClick={() => {
                  window.open("https://www.facebook.com/Business-Solutions-100598259185296");
                }}  className="footerIcons"/>
                
                
                 
                     <FaTwitter onClick={() => {
                  window.open("https://www.twitter.com");
                }}    className="footerIcons"/>
                    <FaInstagram onClick={() => {
                  window.open("https://www.instagram.com/bsteam871/");
                }}   className="footerIcons"/>
              </div>
               
               
              
            </Grid>
            <Grid item xs={12} sm={4}>
            <Box className="footerTitle" >Services</Box>
            <Box>
                <Link className="footerItems"  to="/" color="inherit">
                Home
                </Link>
              </Box>
              <Box>
                <Link className="footerItems"  to="/login" color="inherit">
                Login
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" to="/signup" color="inherit">
                Signup
                </Link>
              </Box>
             

              
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="footerTitle" >Useful Links</Box>
              <Box>
                <Link className="footerItems"  to="/about" color="inherit">
                About
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" to="/services" color="inherit">
                Services
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" to="/casestudy" color="inherit">
                CaseStudy
                </Link>
              </Box>

              <Box>
                <Link className="footerItems" to="/blog" color="inherit">
               Blog
                </Link>
              </Box>
              

              
            </Grid>

            
            
          </Grid>
          <Box  textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Copyright ©2021 All rights reserved  &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}