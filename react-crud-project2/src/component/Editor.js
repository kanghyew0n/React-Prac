import React, { useState } from "react";
import "./Editor.css";

function Editor({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    //console.log(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
    //console.log(e.target.value);
  };

  const handleSubmit = () => {
    if (title.length === 0) {
      alert("일기 제목을 입력해주세요!");
    }
    if (content.length === 0) {
      alert("일기 내용을 입력해주세요!");
    } else {
      onCreate(title, content);
      console.log(title, content);
    }
  };

  return (
    <div className="Editor">
      <h2>혜원이의 일기</h2>
      <input
        type="text"
        value={title}
        placeholder="혜원이의 일기 제목"
        onChange={handleChangeTitle}
      />
      <textarea
        placeholder="혜원이의 하루"
        onChange={handleChangeContent}
        value={content}
      />
      <button className="saveBtn" onClick={handleSubmit}>
        저장하기
      </button>
    </div>
  );
}

export default Editor;
