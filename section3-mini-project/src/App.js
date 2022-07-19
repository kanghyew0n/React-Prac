import "./App.css";
import ItemList from "./page/ItemList";
import Edit from "./page/Edit";
import Basicbutton from "./component/Basicbutton";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useRef } from "react";

const App = () => {
  const initData = [
    {
      title: "안녕하세용 ",
      content: "미니 프로젝트입니다. api는 못했어요!!!!",
      createdAt: new Date().toLocaleDateString(),
      id: 1,
    },
    {
      title: "반가워용  ",
      content: "저녁 뭐먹지 ",
      createdAt: new Date().toLocaleDateString(),
      id: 2,
    },
    {
      title: "오늘의 할 일   ",
      content: "리액트 라우터 헷갈려서 다시 공부해야게따!",
      createdAt: new Date().toLocaleDateString(),
      id: 3,
    },
    {
      title: "로그인,,",
      content: "로그인은 안됩니다 하하 흑흑 ",
      createdAt: new Date().toLocaleDateString(),
      id: 4,
    },
    {
      title: "배고프네",
      content: "졸리네 하하하 ",
      createdAt: new Date().toLocaleDateString(),
      id: 5,
    },
  ];
  const [item, setItem] = useState(initData);
  const nextId = useRef(4);

  const onCreate = (title, content) => {
    const newdiary = {
      title: title,
      content: content,
      createdAt: new Date().toLocaleDateString(),
      id: (nextId.current += 1),
    };

    setItem([newdiary, ...item]);

    console.log(item); // 첫번째 ㄷㅔ이터가 안담겨용
  };

  const onDelete = (itemId) => {
    console.log("삭제버튼 눌림 " + itemId);
    const filtered = item.filter((el) => el.id !== itemId);
    alert("삭제한다?");
    // if(window.confirm){

    // }
    setItem(filtered);
  };

  const onUpdate = (content, title, id) => {
    setItem(
      item.map((el) =>
        el.id === id ? { ...el, content: content, title: title } : el
      )
    );
    console.log(item);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/edit">
            <Basicbutton text={"글쓰기"} type={"edit"}></Basicbutton>
          </Link>

          <Link to="/login">
            <Basicbutton text={"로그인"} type={"login"}></Basicbutton>
          </Link>
        </header>

        <Link to="/">
          <div className="logoTitle">Todo !</div>
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <ItemList item={item} onDelete={onDelete} onUpdate={onUpdate} />
            }
          />
          <Route path="/edit" element={<Edit onCreate={onCreate} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
