import React from "react";
import Navbar from "./Navbar";
import Card from "../components/Card/Card";
import "../Styles/main.css";
import { getGroupHeading } from "../utils/Title__headings";
import { groupTickets, sortedTickets } from "../utils/Utils___functions";
import { useMainBoard } from "../utils/Main__board_Stats";
import ThemeToggle from "../components/ToggleBtn/ToggleBtn";

const MainBoard = () => {
  const { tickets, users, grouping, sorting, setGrouping, setSorting } =
    useMainBoard();

  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroups = sortedTickets(groupedTickets, sorting);

  return (
    <>
       
      <div className="mainBoard__Container">
        <ThemeToggle/>
        <Navbar
          grouping={grouping}
          sorting={sorting}
          setGrouping={setGrouping}
          setSorting={setSorting}
        />
        <div className="mainBoard__Container___items___cards">
          {Object.keys(sortedGroups).map((group, index) => (
            <div key={index}>
              <h2>{getGroupHeading(group, grouping, users)}</h2>
              {sortedGroups[group].map((ticket) => (
                <Card key={ticket.id} ticket={ticket} users={users} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainBoard;
