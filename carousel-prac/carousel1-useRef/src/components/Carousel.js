import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Imgitem from "./Imgitem";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const Container = styled.div`
  width: 50%;
  margin: auto;
  height: 50%;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const Button = styled.div`
  font-size: 24px;
  width: 64px;
  height: 64px;
  color: #000;
  border-radius: 50px;
  border: 1px solid #000;
  line-height: 250%;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

const totalImg = 4; //인덱스를 기준으로 함

export default function Slider() {
  const [current, setCurrent] = useState(0); // 현재 보여지는 이미지의 인덱스값
  const slideRef = useRef(null);

  const moveNext = () => {
    // 만약 현재 이미지 위치가 마지막이라면 next 버튼 클릭시 setCurrent는 첫번째 이미지 위치로
    if (current >= totalImg) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  // next 버튼 클릭시
  const movePrev = () => {
    if (current === 0) {
      // 만약 현재 이미지 위치가 첫번째라면 prev 버튼 클릭시 setCurrent는 마지막 이미지 위치로
      setCurrent(totalImg);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${current}00%)`;
    // 이부분 마지막 -첫번째 연결이 이상함
  }, [current]); // current가 변경될때마다 시행됨

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Imgitem img={img1} />
        <Imgitem img={img2} />
        <Imgitem img={img3} />
        <Imgitem img={img4} />
        <Imgitem img={img5} />
      </SliderContainer>
      <ButtonContainer>
        <Button onClick={movePrev}>prev</Button>
        <Button onClick={moveNext}>next</Button>
      </ButtonContainer>
    </Container>
  );
}
