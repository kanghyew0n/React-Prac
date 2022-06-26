import React from "react";
import "./Read.css";

function Read({ content, handleDelete, idx, onUpdateBtn }) {
  return (
    <div className="Read">
      <div className="Read__item">
        <li className="Read__list" key={content.id}>
          <div className="username">{content.username}</div>
          <div className="title">{content.title}</div>
          <div className="content">{content.content}</div>
          <div className="createAt">{content.createdAt}</div>
        </li>
      </div>
      <div className="Read__btns">
        <button
          className="수정"
          onClick={() => onUpdateBtn(content.username, content.id)}
        >
          수정
        </button>
        <button
          className="삭제"
          onClick={() => handleDelete(content.username, idx)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default Read;
