import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map((link)=>{
    <a key={link} href={link}>{link}</a>
  })
  return (
  <nav>{/* display an <a> tag for each link here */}
    {linkList}
  </nav>
  );
}

export default NavBar;
