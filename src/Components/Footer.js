import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
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
               <p>conbusi@support.com</p>
              </Box>
              <Box>
               <p>+10 873 672 6782</p>
              </Box>
              <Box>
               <p>600/D, Green road, NewYork</p>
              </Box>
              <div >
                 <FaFacebookF  className="footerIcons"/>
                 
                     <FaTwitter  className="footerIcons"/>
                    <FaInstagram  className="footerIcons"/>
              </div>
               
               
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="footerTitle" >Services</Box>
              <Box>
                <Link className="footerItems"  href="/" color="inherit">
                Marketing & SEO
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Startup
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Finance solution
                </Link>
              </Box>

              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Food
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Travel
                </Link>
              </Box>

              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="footerTitle" >Useful Links</Box>
              <Box>
                <Link className="footerItems"  href="/" color="inherit">
                About
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Blog
                </Link>
              </Box>
              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Contact
                </Link>
              </Box>

              <Box>
                <Link className="footerItems" href="/" color="inherit">
                Appointment
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