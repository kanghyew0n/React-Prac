import React, { useState } from "react";
import "./App.css";
import dummy from "./resource/dummyData";

import ContentList from "./pages/ContentList";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";

const App = () => {
  const [contents, setContents] = useState(dummy); // 추가 데이터 불러오기
  const [clickCreate, setClickCreate] = useState(true); // 글쓰기 버튼이 클릭 되었는가?
  const [clickTitle, setClickTitle] = useState(false); // 타이틀이 클릭 되었는가?
  const [clickUpdate, setClickUpdate] = useState(false); // 수정  버튼이 클릭 되었는가?
  const [updateData, setUpdateData] = useState("");

  const [selectData, setSelectData] = useState(""); // 선택된 타이틀에 해당하는 data 담기

  // 글쓰기 버튼 클릭 여부에 따라 create 창 띄우기
  const onCreateBtn = () => {
    setClickCreate(true);
    setClickTitle(false);
    setUpdateData(false);
  };

  // 제목 클릭 -> 해당 content 만 가져오기
  const handleFilter = (username, clickIdx) => {
    setClickCreate(false);
    const clickTitle = contents.filter((content, idx) => idx === clickIdx);
    alert(`${username} 님의 글입니다.`);
    setSelectData(clickTitle);
    setClickTitle(true);
    setClickCreate(false);
    setClickUpdate(false);

    console.log(clickTitle);
  };

  // 삭제 -> 삭제하고 다시 create 불러오기
  const handleDelete = (username, deleteIdx) => {
    const deletes = contents.filter((content, idx) => idx !== deleteIdx);
    alert(`${username} 님이 작성한 글을 삭제합니다`);
    setContents(deletes); // 삭제하지 않는 항목들
    setClickTitle(false);
    setClickCreate(true);
  };

  // 수정 -> update에 기본값 불러서 가져오고 -> 다시 update하기 ?
  const handleUpdate = (username, updateIdx) => {
    const updates = contents.filter((content, idx) => idx === updateIdx);
    alert(`${username} 님이 작성한 글을 수정합니다.`);
    setContents((contents) =>
      contents.map((content) =>
        content.id === updateIdx ? { updates, ...content } : content
      )
    );
    setUpdateData(updates);
    setClickUpdate(true);
    setClickTitle(false);
    setClickCreate(false);
    // 다른 창 닫아주기
  };

  return (
    <div className="App">
      <h1>React-CRUD-Project</h1>
      <div className="component">
        <div className="list">
          <header>
            <div></div>
            <h2>목록</h2>
            <button className="contentList__btn" onClick={onCreateBtn}>
              글쓰기
            </button>
          </header>
          {contents.map((content, idx) => {
            return (
              <ContentList
                content={content}
                key={content.id}
                handleFilter={handleFilter}
                idx={idx}
              />
            );
          })}
        </div>

        {clickCreate ? (
          <Create contents={contents} setContents={setContents} />
        ) : (
          <div></div>
        )}
        {clickTitle ? (
          selectData.map((content, idx) => {
            return (
              <Read
                content={content}
                key={content.id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                idx={idx}
              />
            );
          })
        ) : (
          <div></div>
        )}

        {clickUpdate ? (
          <Update
            updateData={updateData}
            clickUpdate={clickUpdate}
            contents={contents}
            handleUpdate={handleUpdate}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;
