import React from "react";

const Navbar_header_modal = ({
  grouping,
  sorting,
  setGrouping,
  setSorting,
  onClose,
}) => {

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.value;
    setGrouping(newGrouping);
    localStorage.setItem("grouping", newGrouping);
    onClose();
  };

  const handleSortingChange = (e) => {
    const newSorting = e.target.value;
    setSorting(newSorting);
    localStorage.setItem("sorting", newSorting);
    onClose();
  };

  return (
    <div className="modal__layout">
      <div className="modal____grid____container">
        <div className="modal___grid___item">Grouping</div>
        <div className="modal___grid___item">
          <select
            className="modal___select___input"
            id="grouping"
            value={grouping}
            onChange={handleGroupingChange}
          >
            <option  value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="modal___grid___item">Ordering</div>
        <div className="modal___grid___item">
          {" "}
          <select
  
            className="modal___select___input"
            id="sorting"
            value={sorting}
            onChange={handleSortingChange}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar_header_modal;
