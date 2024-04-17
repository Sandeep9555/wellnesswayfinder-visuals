import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "180px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
      bgcolor="white" // Changed background color to white
      color="blue" // Changed text color to blue
    >
      <Typography color="#1976d2" fontWeight="600" fontSize="26px">
        Wellness Exercise Search & Visuals
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: " 40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="primary" // Changed button color to primary (default blue)
        sx={{ backgroundColor: "##000FFF", padding: "10px" }} // Set button background to original color
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="blue" // Changed color to blue
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        textAlign="center"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
