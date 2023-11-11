import React, { useState } from "react";
import "../../Styles/card.css";
import { CgProfile } from "react-icons/cg";
import { FaCircle } from "react-icons/Fa";
import { BsFillExclamationSquareFill } from "react-icons/bs";
const Card = ({ ticket }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card____container">
      <div className="card____container____item1">
        <h5>{ticket.id}</h5>
        <CgProfile />
      </div>
      <div className="card____container____item2">
        <p>
          {ticket.title.length > 30 ? (
            <span onClick={() => setReadMore(!readMore)}>
              {readMore ? ticket.title : `${ticket.title.substring(0, 30)}...`}
            </span>
          ) : (
            ticket.title
          )}
        </p>
      </div>

      <div className="card____container____item3">
        <div className="card____container____item3__icon">
          {" "}
          <BsFillExclamationSquareFill
            style={{ fontSize: "0.8em", fontWeight: "lighter" }}
          />
        </div>

        <div className="card____container____item3____tag">
          <FaCircle style={{ fontSize: "0.6em", fontWeight: "lighter" }} />
          <p> {ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
