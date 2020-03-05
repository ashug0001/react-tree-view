import React from "react";
import "./styles.css";
import TreeItem from "./TreeItem";

export default function App({ id }) {
  return (
    <div>
      <TreeItem id={id} parendId="undefined" />
    </div>
  );
}
