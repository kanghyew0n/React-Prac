import React from "react";
import styled from "styled-components";

export const Chip = ({ text }) => {
  return <ChipBtn>{text}</ChipBtn>;
};

const ChipBtn = styled.span`
  padding: 10px 20px;
  border: 1px solid #0a1929;
  margin-right: 10px;
  border-radius: 50px;
`;
