import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white p-10 space-y-10">
      <h1 className="font-bold text-5xl uppercase">Sameday</h1>

      <div>
        <h3 className="font-semibold text-lg">Office Address</h3>
        <p className="font-light">Near Udyog Vibhag Office</p>
        <p className="font-light">Pharenda Rd, Udyog Chauraha, Shastri Nagar</p>
        <p className="font-light">Maharajganj, Uttar Pradesh 273303</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Contact</h3>
        <p className="font-light">Moblie: +91 998453099</p>
        <p className="font-light">Email: theprintcompany.in@gmail.com</p>
      </div>

      <h4>©2025 Sameday The Print Company. All Rights Reserved.</h4>
    </footer>
  );
};

export default Footer;
