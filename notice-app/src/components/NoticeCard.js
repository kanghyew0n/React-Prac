import React, { useState } from "react";
import styled from "styled-components";
import { Chip } from "./Chip";

const NoticeCard = ({ item }) => {
  const [isSave, setIsSave] = useState(false);

  const handleChange = () => {
    setIsSave(!isSave);
  };

  return (
    <Card>
      <div className="btnbox">
        <div className="chipBtn">edit</div>
        <div className="chipBtn">delete</div>
      </div>
      <div className="cardbox">
        <div className="card_top">
          <span>{item.title}</span>
          <span className={`save ${isSave ? "on" : ""}`} onClick={handleChange}>
            ⬤
          </span>
        </div>
        <div className="date">{item.createdAt}</div>
        <div className="content">{item.content}</div>
        <div className="chipbox">
          <Chip text={item.category} />
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: calc((75vw - 96px) / 4);
  height: 35vh;
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  .btnbox {
    opacity: 0;
    top: 40%;
    left: 15%;
    position: absolute;
    display: flex;
    text-align: center;

    .chipBtn {
      padding: 10px 20px;
      border-radius: 50px;
      margin: 10px;
      border: 1px solid #fff;
    }
  }
  &:hover {
    background-color: #000;
    box-sizing: border-box;
    .cardbox {
      opacity: 0;
    }
    .btnbox {
      opacity: 1;
      color: #fff;
    }
  }

  .cardbox {
    padding: 25px 30px;
  }
  .card_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 24px;
      font-weight: 700;
    }
    .save {
      line-height: 0.8;
      font-size: 17px;
      cursor: pointer;
    }
    .save.on {
      color: red;
    }
  }

  .date {
    color: #999;
    font-size: 14px;
    margin-top: 10px;
  }

  .content {
    line-height: 150%;
    margin-top: 20px;
    height: 70px;
    overflow: hidden;
  }

  .chipbox {
    position: absolute;
    bottom: 40px;
    right: 25px;
  }
`;

export default NoticeCard;
