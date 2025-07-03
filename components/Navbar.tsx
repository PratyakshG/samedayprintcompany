import React from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";

const navList = [
  "Stationery",
  "Corporate Gifts",
  "Drinkware",
  "Labels & Packaging",
  "Apparel",
  "Signs, Marketing & Promo",
  "Photo Gifts",
];

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full bg-black text-white text-center py-2">
        Announcements
      </div>

      <div className="flex items-center justify-between py-5 px-10">
        <h1 className="uppercase text-3xl font-bold font-poppins">
          Sameday
        </h1>
        <div className="flex items-center justify-center gap-5 *:size-5">
          <CiUser />
          <CiShoppingCart />
        </div>
      </div>

      <ul className="flex items-center justify-start gap-8 px-10">
        {navList.map((item, _) => (
          <li key={_}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
