import React from "react";
import { connect } from "react-redux";
import { addChild, increment, removeNode } from "./action";

const mapDispatchToProps = {
  addChild,
  increment,
  removeNode
};

const mapStateToProps = state => {
  return { nodesChild: state };
};

function TreeItem({
  id,
  parentId,
  increment,
  removeNode,
  addChild,
  nodesChild
}) {
  const childNodes = nodesChild[id].childIds.map(child => (
    <TreeItem
      id={child}
      increment={increment}
      removeNode={removeNode}
      addChild={addChild}
      nodesChild={nodesChild}
      key={child}
      parentId={id}
    />
  ));

  return (
    <ul>
      <li>
        <span>Counter: </span>
        {nodesChild[id].counter}{" "}
        <button onClick={() => increment(id)} id={id}>
          +
        </button>{" "}
        <span onClick={() => removeNode(id, parentId)} id={id}>
          x
        </span>
        <br />
        {childNodes}
        {/* eslint-disable-next-line */}
        <a
          href="#"
          onClick={() => {
            addChild(id);
          }}
          id={id}
        >
          {" "}
          Add Child
        </a>
      </li>
    </ul>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeItem);
