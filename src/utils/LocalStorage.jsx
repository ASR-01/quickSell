// localStorageUtils.js
export const LocalStorageData = (setGrouping, setSorting) => {
  const inputGroup = localStorage.getItem("grouping");
  const inputSort = localStorage.getItem("sorting");

  if (inputGroup) {
    setGrouping(inputGroup);
  }
  if (inputSort) {
    setSorting(inputSort);
  }
};
