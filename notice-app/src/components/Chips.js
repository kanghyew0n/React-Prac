import styled from "styled-components";
import { useState } from "react";

const Chips = ({ item, setItem }) => {
  const originItem = Object.assign([], item);
  const [copyItem, setCopyItem] = useState(originItem);
  const [isChecked, setIsChecked] = useState(false);
  const filtedItem = copyItem.map((el) => el.category);

  const filteredCateg = new Set(filtedItem);
  const category = ["All", ...filteredCateg];

  const handleFiltered = (e) => {
    setIsChecked(!isChecked);

    console.log("copyItem", copyItem);

    if (e.target.textContent === "All") {
      e.target.style.color = "#fff";
      e.target.style.backgroundColor = "#0a1929";
      return setItem(copyItem);
    }
    const filteredItem = copyItem.filter(
      (item) => item.category === e.target.textContent
    );
    console.log(filteredItem);
    setItem(filteredItem);
  };

  return (
    <ChipList>
      {category.map((item, idx) => (
        <span className="chip" key={idx} onClick={handleFiltered}>
          {item}
        </span>
      ))}
    </ChipList>
  );
};

const ChipList = styled.div`
  width: 75vw;
  margin: 0 auto;
  margin-top: 50px;
  .chip {
    padding: 10px 20px;
    border: 1px solid #0a1929;
    margin-right: 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      /* border: 1px solid #0a1929; */
      color: #fff;
      background-color: #0a1929;
    }
  }
`;

export default Chips;
