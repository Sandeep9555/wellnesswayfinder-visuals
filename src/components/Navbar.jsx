import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import ExerciseSchedule from "./ExerciseSchedule"
// import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        
       <Link
          to="/"
          style={{
  textDecoration: "none",
  color: "#3A1212",
  borderBottom: "3px solid transparent", // Start with a transparent border
  justifyContent: "space-around",
  marginLeft: "20px",
  marginTop: "20px",
  transition: "border-color 0.3s ease", // Smooth transition for the border color change
  "&:hover": {
    borderBottomColor: "#000FFF", // Change only the color on hover
  },
}}


        >
          Wellness WayFinder
        </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            marginTop:"20px",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", 
          color: "#3A1212",
          marginTop:"20px"
          }}
        >
          Exercises
        </a>
        
      </Stack>
    </Stack>
  );
};

export default Navbar;
