import React, { useState } from "react";
import "./ListItem.css";

function ListItem({ item, onDelete, onUpdate }) {
  const [updateClick, setUpdayeClick] = useState(false);
  const [originContent, setOriginContent] = useState(item.content);
  const [originTitle, setOriginTitle] = useState(item.title);

  console.log(item);
  const handleDelete = () => {
    onDelete(item.id, item.title);
  };

  const updateBtnClick = (e) => {
    setUpdayeClick(true);
  };

  const handleCancel = () => {
    setUpdayeClick(false);
  };

  const handleChangeContent = (e) => {
    setOriginContent(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setOriginTitle(e.target.value);
  };

  const handleUpdateSubmit = () => {
    setUpdayeClick(false);
    console.log(item);
    onUpdate(originContent, originTitle, item.id);
  };

  return (
    <div className="ListItem">
      {!updateClick ? (
        <div className="item">
          <div className="item-top">
            <p className="itemCrreatedAt">날짜 : {item.createdAt}</p>
            <p className="itemId">일기 id : {item.id}</p>
          </div>

          <p className="itemTitle">일기 제목 : {originTitle}</p>

          <p className="itemContent">오늘의 일기 : {originContent}</p>

          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={updateBtnClick}>수정하기</button>
        </div>
      ) : (
        <div className="item">
          <div className="item-top">
            <p className="itemCrreatedAt">날짜 : {item.createdAt}</p>
            <p className="itemId">일기 id : {item.id}</p>
          </div>
          <input type="text" value={originTitle} onChange={handleChangeTitle} />
          <input
            type="text"
            value={originContent}
            onChange={handleChangeContent}
          />
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleUpdateSubmit}>적용</button>
        </div>
      )}
    </div>
  );
}

export default ListItem;
