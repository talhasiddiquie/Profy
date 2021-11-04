import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import logo1 from "../Assets/logo1.png"
import Button from '@material-ui/core/Button';
import { FaFacebookF ,FaTwitter,FaInstagram} from "react-icons/fa";
import { TextField } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

import "./footer.css"
export default function Footer() {
  return (
    <footer>
      <Box 
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
       
        color="#919191"
      >
        <Container maxWidth="lg" >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
             
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
              <FaFacebookF className="footerIcons"  />
                    <FaTwitter  className="footerIcons"/>
                    <FaInstagram  className="footerIcons"/>
              </div>
               
               
              
            </Grid>
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3}>
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

            <Grid item xs={12} sm={3}>
              <Box className="footerTitle" >Subscribe</Box>
              
              <Box>
              <TextField
              style={{width:"320px", borderRadius:"20px!important"}}
         id="standard-start-adornment"
         variant="outlined"
         label="Enter Your Email"
         InputProps={{
        endAdornment: (
         <InputAdornment >
            <Button  className="footerbtn"  >
            Subscribe
           </Button>
      </InputAdornment>
    )
  }}
/>
              </Box>

              <Box style={{marginTop:"20px"}}>
                <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
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