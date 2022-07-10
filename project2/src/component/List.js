import React from "react";
import ListItem from "./ListItem";
import "./List.css";

function List({ item, onDelete, onUpdate }) {
  return (
    <div className="List">
      <h2>혜원이의 일기 리스트</h2>
      <h5>{item.length}개의 일기가 있슴미다!</h5>
      {item.map((el) => {
        return (
          <ListItem
            key={el.id}
            item={el}
            onDelete={onDelete}
            onUpdate={onUpdate}
          ></ListItem>
        );
      })}
    </div>
  );
}

export default List;
