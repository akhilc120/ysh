import React, { useState } from "react";
import { postRequest } from "../../utils/request";

function RegisterForm() {
    const [formData, setFormData] = useState({})

    async function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function submitForm(e) {
        e.preventDefault();
        console.log(formData);
        postRequest("/register", formData);
    }

    return (
        <form onSubmit={submitForm}>
            <p>Register</p>
            <input onChange={handleChange} type="text" name="name" value={formData.name || ""} placeholder="Name" />
            <input onChange={handleChange} type="text" name="email" value={formData.email || ""} placeholder="Email" />
            <input onChange={handleChange} type="text" name="phone" value={formData.phone || ""} placeholder="Phone" />
            <input onChange={handleChange} type="text" name="state" value={formData.state || ""} placeholder="State" />
            <input onChange={handleChange} type="text" name="district" value={formData.district || ""} placeholder="District" />
            <input onChange={handleChange} type="text" name="address" value={formData.address || ""} placeholder="Address" />
            <input onChange={handleChange} type="text" name="pincode" value={formData.pincode || ""} placeholder="Pincode" />
            <input onChange={handleChange} type="password" name="password" value={formData.password || ""} placeholder="Password" />
            <button type="submit" disabled={!(formData.name && formData.email && formData.password && formData.phone)}>Register</button>
        </form>
    )
}

export default RegisterForm;