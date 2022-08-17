import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBox>
      <div className="inner">
        <Link to="/">
          <div className="myName">
            <p>kanghyew0n</p>
          </div>
        </Link>

        <ul className="menu">
          <Link to="/">
            <li>save</li>
          </Link>

          <li>add</li>
          <Link to="/">
            <li>login</li>
          </Link>
        </ul>
      </div>
    </NavBox>
  );
};

const NavBox = styled.div`
  height: 80px;
  color: #0a1929;
  font-size: 18px;

  .inner {
    width: 75vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 1px solid #0a1929; */
    .myName {
      display: flex;
      align-items: center;
      p:nth-child(1) {
        margin-right: 10px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;

      li {
        margin-left: 50px;
      }
    }
  }
`;

export default Nav;
