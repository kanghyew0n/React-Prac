import React from "react";
import "./Update.css";

function Update({
  updateData,
  handleUpdate,
  handleButtonCancel,
  handleChangeUser,
  handleChangeTitle,
  handleChangeMsg,
}) {
  return (
    <div className="Update">
      <header>
        <h2>수정하기</h2>
      </header>
      <div className="update__content">
        <form>
          <div className="name__box">
            <input
              placeholder="이름을 입력하세요."
              value={updateData.username}
              onChange={handleChangeUser}
            ></input>
          </div>
          <div className="title__box">
            <input
              placeholder="제목을 입력하세요."
              value={updateData.title}
              onChange={handleChangeTitle}
            ></input>
          </div>
          <div className="content__box">
            <textarea
              placeholder="내용을 입력하세요."
              value={updateData.msg}
              onChange={handleChangeMsg}
            ></textarea>
          </div>
        </form>

        <div className="update__btns">
          <button className="cancel" onClick={handleButtonCancel}>
            취소
          </button>
          <div className="btn"></div>
          <button className="save" onClick={handleUpdate}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
