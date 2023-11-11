const groupTickets = (tickets, grouping) => {
  if (!tickets || tickets.length === 0) {
    return {};
  }

  const groupKey =
    grouping === "status"
      ? "status"
      : grouping === "user"
      ? "userId"
      : "priority";

  return tickets.reduce((grouped, ticket) => {
    const key = ticket[groupKey];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(ticket);
    return grouped;
  }, {});
};

const sortedTickets = (groupedTickets, sorting) => {
  if (!groupedTickets || Object.keys(groupedTickets).length === 0) {
    return {};
  }

  const sortingLogic = (a, b) => {
    if (sorting === "priority") {
      return b.priority - a.priority;
    } else if (sorting === "title") {
      return a.title.localeCompare(b.title);
    }
  };

  const sortedGroups = Object.keys(groupedTickets).reduce((sorted, key) => {
    sorted[key] = groupedTickets[key].sort(sortingLogic);
    return sorted;
  }, {});

  return sortedGroups;
};

export { groupTickets, sortedTickets };
