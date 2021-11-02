import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
    return (
        <div className="topnav">
            <Link className="nav_link" >Laundry</Link>
            <div className="nav_link_sec">
                <Link>Home</Link>
                <Link>Pricing</Link>
                <Link>Career</Link>
            </div>            
        </div>
    )
}

export default Navbar;