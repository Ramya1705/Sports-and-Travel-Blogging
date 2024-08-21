import React, { useState } from "react";
import axios from "axios";
import "./signup.css"; // We'll create this CSS file

export const SignUp = () => {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [register, setRegister] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/signup", {
                gmail,
                password,
                phone,
                register
            });
            if (response.data) {
                alert("Signup successful");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                
                <div className="form-group">
                    <label htmlFor="register">Register Number</label>
                    <input
                        type="text"
                        id="register"
                        value={register}
                        onChange={(e) => setRegister(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        required
                    />
                    <small>We'll never share your email.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <small>We'll never share your password.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};