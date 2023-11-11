import React, { useEffect, useState } from "react";
import Navbar_header_btn from "../components/Navbar/Navbar_header_btn";
import Navbar_header_modal from "../components/Navbar/Navbar_header_modal";
import "../Styles/navbar.css";
import { LocalStorageData } from "../utils/LocalStorage";

const Navbar = ({ grouping, sorting, setSorting, setGrouping }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    LocalStorageData(setGrouping, setSorting);
  }, []);
  return (
    <div className="navbar">

      <Navbar_header_btn closeModal={closeModal} />
      {showModal && (
        <Navbar_header_modal
          grouping={grouping}
          sorting={sorting}
          setGrouping={setGrouping}
          setSorting={setSorting}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Navbar;
