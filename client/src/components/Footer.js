import React from "react";

const style={
  footer:{
  paddingTop: "5px",
  width: "100%",
  backgroundColor: "purple",
  position: "fixed",
  bottom: "0",
},
  paragraph: {
  margin: "10px 0 0 0",
  textAlign: "center",
  backgroundColor: "gray"
}}

function Footer() {

  return (
    <footer style={style.footer}>
    <p style={style.paragraph}> &copy; Copyright </p>
  </footer>


  );
}

export default Footer;
