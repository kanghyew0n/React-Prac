import { React, useState } from "react";
import "./App.css";

import ContentList from "./pages/ContentList";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";

const App = () => {
  // 무한 로딩!!! -> useEffect 사용해야함
  const [contents, setContents] = useState([]); // 추가 데이터 불러오기
  const url = "http://localhost:3001/discussions";

  const getcontent = fetch(url)
    .then((res) => res.json())
    .then((data) => setContents(data));

  const [clickCreate, setClickCreate] = useState(true); // 글쓰기 버튼이 클릭 되었는가?
  const [clickTitle, setClickTitle] = useState(false); // 타이틀이 클릭 되었는가?
  const [clickUpdate, setClickUpdate] = useState(false); // 수정  버튼이 클릭 되었는가?

  const [selectData, setSelectData] = useState(""); // 선택된 타이틀에 해당하는 data 담기

  // 글쓰기 버튼 클릭 여부에 따라 create 창 띄우기
  const onCreateBtn = () => {
    setClickCreate(true);
    setClickTitle(false);
    setClickUpdate(false);
  };

  // 제목 클릭 -> 해당 content 만 가져오기
  const handleFilter = (username, clickIdx) => {
    setClickCreate(false);
    const clickTitle = contents.filter((content, idx) => idx === clickIdx);
    //alert(`${username} 님의 글입니다.`);
    setSelectData(clickTitle);
    setClickTitle(true);
    setClickCreate(false);
    setClickUpdate(false);

    console.log(clickTitle);
  };

  // 삭제 -> 삭제하고 다시 create 불러오기
  const handleDelete = (username, deleteIdx) => {
    fetch(`${url}/${deleteIdx}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(getcontent)
      .catch((error) => console.error(error.message));

    console.log(deleteIdx);
    //const deletes = contents.filter((content, idx) => idx !== deleteIdx);
    alert(`${username} 님이 작성한 글을 삭제합니다`);
    setContents(contents); // 삭제하지 않는 항목들
    setClickTitle(false);
    setClickCreate(true);
  };

  // 수정 -> update에 기본값 불러서 가져오고 -> 다시 update하기 ?
  const onUpdateBtn = (username) => {
    alert(`onUpdateBtn : ${username} `);
    setClickUpdate(true);
    setClickTitle(false);
    setClickCreate(false);

    // 다른 창 닫아주기
  };

  const handleUpdate = (username, title, msg, content) => {
    alert(`handleUpdate : ${username}`);

    const updateContent = fetch(`${url}/${content.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: content.id,
        username: username,
        title: title,
        content: msg,
        createdAt: new Date().toLocaleString(),
      }),
    })
      .then((response) => response.json())
      .then(getcontent)
      .catch((error) => console.error(error.message));

    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === updateContent.id) {
        contents[i] = updateContent;
        break;
      }
    }
    setContents(contents);
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
                onUpdateBtn={onUpdateBtn}
                idx={idx}
              />
            );
          })
        ) : (
          <div></div>
        )}

        {clickUpdate ? (
          selectData.map((content, idx) => {
            return (
              <Update
                content={content}
                key={content.id}
                idx={idx}
                handleUpdate={handleUpdate}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;
