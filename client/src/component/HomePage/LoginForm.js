import React from "react";

function LoginForm() {
    return (
        <form>
            <p>SIGN IN</p>
            <input type="text" name="email" value="" placeholder="Mobile / Email" />
            <input type="password" name="password" value="" placeholder="Password" />
            <p className="forgot_password">Forgot Password?</p>
            <button>Sign In</button>
        </form>
    )
}

export default LoginForm;