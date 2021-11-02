import React from "react";

function RegisterForm() {
    return (
        <form>
            <p>Register</p>
            <input type="text" name="name" value="" placeholder="Name" />
            <input type="text" name="email" value="" placeholder="Mobile / Email" />
            <input type="text" name="phone" value="" placeholder="Phone" />
            <input type="text" name="state" value="" placeholder="State" />
            <input type="text" name="district" value="" placeholder="District" />
            <input type="text" name="address" value="" placeholder="Address" />
            <input type="text" name="pincode" value="" placeholder="Pincode" />
            <input type="password" name="password" value="" placeholder="Password" />
            <button>Register</button>
        </form>
    )
}

export default RegisterForm;