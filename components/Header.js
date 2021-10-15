import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" ,backgroundColor:"#e1ad01" }}>
      <Link route="/">
        <a className="item"style={{ color:"white",backgroundColor:"black" ,fontSize:"30px" }} >ClearCoin</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item" style={{ color:"white",backgroundColor:"black" ,fontSize:"20px" }}>Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
