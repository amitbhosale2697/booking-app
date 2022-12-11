import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log("username", user)
  // console.log("username1", user.username)
  

  const navigate = useNavigate(); //using this we can navigate useers to any pagges like history.push() function

  const handleClick = () =>{
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          user?.username 
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton"  
            onClick={()=> handleClick()}
            >Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
