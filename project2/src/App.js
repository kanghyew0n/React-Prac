import { useState, useRef } from "react";
import "./App.css";
import Editor from "./component/Editor";
import List from "./component/List";

function App() {
  const [item, setItem] = useState([]);
  const nextId = useRef(0);

  const onCreate = (title, content) => {
    const newdiary = {
      title: title,
      content: content,
      createdAt: new Date().toLocaleString(),
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
    // const newdiary = {
    //   title: title,
    //   content: content,
    // };
    setItem(
      item.map((el) =>
        el.id === id ? { ...el, content: content, title: title } : el
      )
    );
    console.log(item);
  };

  return (
    <div className="App">
      <Editor onCreate={onCreate} />
      <List item={item} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
