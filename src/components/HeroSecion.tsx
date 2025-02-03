import React from 'react';
import { Box, Typography } from '@mui/material';
import banner from "../../public/banner.jpeg";
import './HeroSection.css';  
// import { LayoutSection } from './LayoutSection'; 

const HeroSection = () => {
  return (
    <>
    <Box className="hero-box">
      <Typography className="menu-title">
        Menu
      </Typography>

      <Typography className="menu-description">
        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
        place an order, use the "Order Online" button located below the menu.
      </Typography>
    </Box>
   
    </>
  );
};

export default HeroSection;
