import { React, useState } from "react";
import "./Update.css";

function Update({ content, handleUpdate }) {
  const [username, setName] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

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
    <div className="Update">
      <header>
        <h2>수정하기</h2>
      </header>
      <div className="update__content">
        <form>
          <div className="name__box">
            <input
              placeholder={content.username}
              value={username}
              onChange={handleChangeUser}
            ></input>
          </div>
          <div className="title__box">
            <input
              placeholder={content.title}
              value={title}
              onChange={handleChangeTitle}
            ></input>
          </div>
          <div className="content__box">
            <textarea
              placeholder={content.content}
              value={msg}
              onChange={handleChangeMsg}
            ></textarea>
          </div>
        </form>

        <div className="update__btns">
          <button className="cancel" onClick={handleButtonCancel}>
            취소
          </button>
          <div className="btn"></div>
          <button
            className="save"
            onClick={() => handleUpdate(username, title, msg, content)}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
