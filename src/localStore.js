export const loadState = () => {
  try {
    const data = localStorage.getItem("nodes");
    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem("nodes", data);
    localStorage.setItem("nodeid", (window.nodeid = 1));
  } catch (err) {
    console.log(err);
  }
};
