import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <section className="footer-container">
      <InstagramIcon></InstagramIcon>
      <FacebookIcon />
      <LinkedInIcon />
      <RedditIcon />
      <PinterestIcon />
    </section>
  );
}

export default Footer;
