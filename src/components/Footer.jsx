import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="#007bff"
    color="#ffffff"
    py="40px"
    textAlign="center"
  >
    <Typography variant="h5" sx={{ fontSize: { lg: "28px", xs: "20px" } }}>
      Wellness WayFinder
    </Typography>
    <Typography variant="h6" sx={{ fontSize: { lg: "20px", xs: "16px" } }}>
      Made By Sidakpreet Sandeep Sonu Vishesh (Group 5)
    </Typography>
  </Box>
);

export default Footer;
