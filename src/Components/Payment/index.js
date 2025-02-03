import React, { useState } from "react";
import "./index.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    upiId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, accountNumber, upiId, password } = formData;

    if (!name || !accountNumber || !upiId || !password) {
      toast.error("Please fill in all fields!");
      return false;
    }

    if (!/^\d+$/.test(accountNumber)) {
      toast.error("Account Number must contain only numbers!");
      return false;
    }

    if (!upiId.includes("@")) {
      toast.error("UPI ID must contain '@'!");
      return false;
    }

    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      toast.error("Password must contain an uppercase letter, a number, and a special character!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast.success("Payment Done Successfully!");
    setFormData({ name: "", accountNumber: "", upiId: "", password: "" });
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Account Number</label>
        <input
          type="text"
          name="accountNumber"
          placeholder="Enter account number"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />

        <label>UPI ID</label>
        <input
          type="text"
          name="upiId"
          placeholder="Enter UPI ID (e.g., example@upi)"
          value={formData.upiId}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="payment-button">
          Submit Payment
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
