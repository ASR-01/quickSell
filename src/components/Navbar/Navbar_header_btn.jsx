import React from "react";
import { BiSlider } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import ThemeToggle from "../ToggleBtn/ToggleBtn";




const Navbar_header_btn = ({ closeModal }) => {
  return (
    <>
      <button
        className="navbar__btn"
        onClick={closeModal}
      >
        <div className="navbar____item_0">
          <BiSlider />
          Display
        </div>
        <div className="navbar____item_1">
          <IoIosArrowDown />
        </div>
      </button>
    
    </>
  );
};

export default Navbar_header_btn;
