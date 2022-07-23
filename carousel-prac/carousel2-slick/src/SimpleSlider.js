import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 캐러셀 밑에 dot으로 이동 가능한 네비
      infinite: true, // 마지막 컨테츠에서 첫번재 콘테츠를 가져와 반복한다.
      speed: 1000, // 넘어가는 속도
      slidesToShow: 1, // 화면에 보이는 콘텐츠 수
      slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수
    };
    return (
      <div className="SimpleSlider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
