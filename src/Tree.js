import React from "react";
import TreeItem from "./TreeItem";
export default function({ id, increment, removeChilds, addChild, nodesChild }) {
  return (
    <ul>
      <TreeItem
        id={id}
        increment={increment}
        removeChilds={removeChilds}
        addChild={addChild}
        nodesChild={nodesChild}
      />
    </ul>
  );
}
