const initialState = {
  node_0: {
    id: "node_0",
    counter: 0,
    childIds: []
  }
};
window.nodeid = 1;
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHILD":
      const childId = "node_" + window.nodeid++;
      const newState = addNode(state, childId);
      return {
        ...newState,
        [action.nodeId]: {
          ...state[action.nodeId],
          childIds: [...state[action.nodeId].childIds, childId]
        }
      };
    case "INCREMENT":
      return {
        ...state,
        [action.nodeId]: {
          ...state[action.nodeId],
          counter: state[action.nodeId].counter + 1
        }
      };
    case "REMOVE_NODE":
      const nodeId = action.nodeId;
      const currentState = { ...state };
      const allChilds = getAllChilds(currentState, nodeId, [nodeId]);
      if (action.parentId === undefined) {
        alert("Top Node cannot be Deleted.");
        return state;
      }
      allChilds.forEach(child => delete currentState[child]);
      const newChild = currentState[action.parentId].childIds.filter(
        child => child !== nodeId
      );
      currentState[action.parentId].childIds = [...newChild];
      return currentState;
    default:
      return state;
  }
};

const addNode = (state, childId) => {
  return {
    ...state,
    [childId]: {
      id: childId,
      counter: 0,
      childIds: []
    }
  };
};

const getAllChilds = (state, id, removeId) => {
  state[id].childIds.forEach(child => {
    removeId.push(child);
    getAllChilds(state, child, removeId);
  });
  return removeId;
};
