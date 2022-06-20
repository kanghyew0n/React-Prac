import React, { useState } from "react";
import "./Create.css";

function Create({ contents, setContents }) {
  const nextId = contents.length + 1;
  const [username, setName] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const handleButtonClick = (event) => {
    const newcontent = {
      id: nextId,
      username: username,
      title: title,
      content: msg,
      createdAt: new Date().toLocaleDateString(),
    };

    const newContents = [newcontent, ...contents];

    setContents(newContents);
    console.log(newContents);
  };

  const handleButtonCancel = (event) => {
    alert("취소하시겠습니까?");
    setName("");
    setTitle("");
    setMsg("");
  };

  const handleChangeUser = (event) => {
    console.log(username);
    setName(event.target.value);
  };

  const handleChangeTitle = (event) => {
    console.log(title);
    setTitle(event.target.value);
  };

  const handleChangeMsg = (event) => {
    console.log(msg);
    setMsg(event.target.value);
  };

  return (
    <div className="Create">
      <header>
        <h2>생성하기</h2>
      </header>
      <div className="create__content">
        <form>
          <div className="name__box">
            <input
              placeholder="이름을 입력하세요."
              value={username}
              onChange={handleChangeUser}
            ></input>
          </div>
          <div className="title__box">
            <input
              placeholder="제목을 입력하세요."
              value={title}
              onChange={handleChangeTitle}
            ></input>
          </div>
          <div className="content__box">
            <textarea
              placeholder="내용을 입력하세요."
              value={msg}
              onChange={handleChangeMsg}
            ></textarea>
          </div>
        </form>

        <div className="create__btns">
          <button className="cancel" onClick={handleButtonCancel}>
            취소
          </button>
          <div className="btn"></div>
          <button className="save" onClick={handleButtonClick}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
