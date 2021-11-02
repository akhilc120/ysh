import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function HomePage() {
    const [showLogin, toggleShowLogin] = useState(false);
    return (
        <React.Fragment>
            <Navbar />
            <div className="main">
                <div className={`${showLogin ? "" : "small"} left`}>
                    <h2 className="heading">Laundry</h2>
                    <h2 className="heading">Service</h2>
                    <p className="sub_heading">Doorstep wash and Dryclean Service</p>
                    <br />
                    <p className="no_account">{showLogin ? "Don't have an account" : ""}</p>
                    <br />
                    <button onClick={() => toggleShowLogin(!showLogin)}>{showLogin ?  "Register" : "Sign In" }</button>
                </div>
                <div className={`${showLogin ? "" : "large"} right`}>
                    <div className="boundry"></div>
                    {showLogin ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
            <div className="refer_banner">
                <h3>Now Refer and Earn 500 for every referral*</h3>
                <p>Terms and condition applied</p>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;
