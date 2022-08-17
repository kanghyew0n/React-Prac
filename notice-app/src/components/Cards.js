import React from "react";
import styled from "styled-components";
import Chips from "./Chips";
import NoticeCard from "./NoticeCard";

const Cards = ({ item, setItem }) => {
  return (
    <>
      <Chips item={item} setItem={setItem} />
      <CardGroup>
        {item.map((el) => {
          return <NoticeCard key={el.id} item={el} />;
        })}
      </CardGroup>
    </>
  );
};

const CardGroup = styled.div`
  width: 75vw;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 200px;
`;

export default Cards;
