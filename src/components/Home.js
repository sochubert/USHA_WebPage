import React from "react";
import Fade from "react-reveal/Fade";

import "../Home.css";

const Home = () => {
  return (
    <div id="Section">
      <div className="main_bg">
        <Fade bottom>
          <h1>
            진로를 <span className="main_bg_orange">쉽고 빠르게</span>
          </h1>
          <h1>선택하도록 도와주는 서비스,</h1>
          <br />
          <h1>
            <span className="main_bg_blue">Career-Navigation</span>
          </h1>
          <p>진로 선택의 갈림길에 선 대학생들을 위한 진로선택 가이드</p>
        </Fade>
      </div>
      <div className="first">
        <Fade left>
          <img
            src={process.env.PUBLIC_URL + `/assets/1_img.png`}
            className="first_img"
          />
        </Fade>
        <Fade bottom>
          <p className="first_text">
            <span className="first_text_small">대학 졸업하면...</span>
            <br />
            뭐해서
            <span className="first_text_small"> 먹고살아야 하지?</span>
          </p>
        </Fade>
        <div className="first_box">
          <Fade bottom>
            <img
              src={process.env.PUBLIC_URL + `/assets/1_receipt.png`}
              className="first_receipt_img"
            />
            <p className="first_description">
              <span className="first_description_small">
                방향도 못 정했는데,
              </span>
              <br />
              자격증부터 따고보면 될까?
            </p>
          </Fade>
        </div>
      </div>
      <div className="second">
        <Fade bottom>
          <img
            src={process.env.PUBLIC_URL + `/assets/4_result_img.png`}
            className="result_img"
          />
          <p className="second_main_description">[ 진로 선택 가이드 ]</p>
          <img
            src={process.env.PUBLIC_URL + `/assets/2_arrow.png`}
            className="second_arrow"
          ></img>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
