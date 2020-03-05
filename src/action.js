export const addChild = nodeId => {
  return {
    type: "ADD_CHILD",
    nodeId
  };
};

export const increment = nodeId => {
  return {
    type: "INCREMENT",
    nodeId
  };
};

export const removeNode = (nodeId, parentId) => {
  return {
    type: "REMOVE_NODE",
    nodeId,
    parentId
  };
};
