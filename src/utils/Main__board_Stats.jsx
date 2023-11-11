import { useState, useEffect } from "react";
import { fetchData } from "./Api";

export const useMainBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    const  SetState = async () => {
      try {
        const data = await fetchData();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error setting state:", error);
      }
    };
    SetState();
  }, []);

  return { tickets, users, grouping, sorting, setGrouping, setSorting };
};
