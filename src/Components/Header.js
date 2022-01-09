import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Header.css"
import logo1 from "../Assets/logo1.png"
  const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Case Study",
      href: "/casestudy",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    
  ];
  
  const useStyles = makeStyles((theme) => ({
    header: {
      backgroundColor: "transparent",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        alignItems: "center",
      },
      "@media (max-width: 1024px)": {
        paddingRight: "0px",
        paddingLeft: "0px",
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#F7A52F",
      textAlign: "left",
      "@media (max-width: 900px)": {
        display: "none",
      },
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
      "@media (max-width: 1024px)": {
        marginLeft: "0px",
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    btncolor: {
      borderRadius: "20px",
      color: "white",
      borderColor: "white",
    },
  }));
  
  export default function Header(props) {
    const { header, menuButton, toolbar, drawerContainer, btncolor } =
      useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const DisplayDesktop = () => {
      const location = useLocation();
      return (
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <div
            style={{
              color: location.pathname === "/" ? "white" : "white",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {getMenuButtons()}
            <div className={menuButton} style={{ display: "flex" }}>
              <div display="flex">
                <RouterLink style={{ textDecoration: "none" }} to="/login">
                  <Button className={btncolor} variant="outlined" color="white">
                    LOGIN
                  </Button>
                </RouterLink>
              </div>
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <RouterLink style={{ textDecoration: "none" }} to="/signup">
                  <Button className={btncolor} variant="outlined" color="white">
                    SIGNUP
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "primary",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "Right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className={drawerContainer}
            >
              {getDrawerChoices()}
              <div style={{ display: "flex",marginTop :"12px"}}>
                <div display="flex">
                  <RouterLink style={{textDecoration:"none"}} to="/Login">
                    <Button
                      className={btncolor}
                      variant="outlined"
                      color="#f7a52f"
                    >
                      LOGIN
                    </Button>
                  </RouterLink>
                </div>
                <div style={{ display: "flex", marginLeft: "10px" }}>
                  <RouterLink style={{ textDecoration: "none" }} to="/signup">
                    <Button
                      className={btncolor}
                      variant="outlined"
                      color="#f7a52f"
                    >
                      SIGNUP
                    </Button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </Drawer>
  
          <div>{femmecubatorLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
             
              style: { textDecoration: "none",color:"white" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const femmecubatorLogo = (
      <RouterLink style={{ textDecoration: "none" }} to="/">
        <img alt="" src={logo1}></img>
      </RouterLink>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <div>
        <header>
          <AppBar className={header}>
            {mobileView ? displayMobile() : DisplayDesktop()}
          </AppBar>
        </header>
      </div>
    );
  }
  