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
            <span className="first_text_small_gray">대학 졸업하면...</span>
            <br />
            뭐해서
            <span className="first_text_small">
              <span className="blank">ㅤ</span>먹고
              <br />
              살아야 하지?
            </span>
          </p>
        </Fade>
        <div className="first_box">
          <Fade bottom>
            <img
              src={process.env.PUBLIC_URL + `/assets/student.png`}
              className="first_img"
            />
            <p className="first_text">
              <span className="first_text_small_gray">방향도 못 정했는데,</span>
              <br />
              <br />
              자격증부터
              <br />
              <span className="first_text_small">따고보면 될까?</span>
            </p>
          </Fade>
        </div>
      </div>
      <div className="second">
        <div className="second_flexible">
          <Fade bottom>
            <img
              src={process.env.PUBLIC_URL + `/assets/test_result_1.png`}
              className="result_img"
            />
            <div class="second_sub_box">
              <h1 className="second_gray">
                STEP1.
                <br />
                <span className="second_bold">취/창업 테스트</span>
              </h1>
              <h4>
                진로 선택의 <span className="text_orange">첫번째 갈림길,</span>
              </h4>
              <p className="second_description">
                나는 취업이 맞는지, 창업이 맞는지 생각해보신 적 있나요?
                <br />
                알고보면 나도 일론머스크같은 창업가가 될 수도 있습니다!
              </p>
              <button class="btn-hover color-9">둘러보기</button>
            </div>
          </Fade>
        </div>
        <div className="second_flexible">
          <Fade bottom>
            <div class="second_sub_box">
              <h1 className="second_gray">
                STEP2.
                <br />
                <span className="second_bold">역량 개발 커뮤니티</span>
              </h1>
              <h4>
                <span className="text_orange">좋아하는</span> 것을{" "}
                <span className="text_blue">잘하는</span> 것으로!
              </h4>
              <p className="second_description">
                나의 관심사를 취/창업 역량으로 개발할 수 있어요.
                <br />
                코치님이 커뮤니티에서 여러분을 이끌어 줍니다.
              </p>
              <button class="btn-hover color-9">둘러보기</button>
              <p className="second_description">
                커뮤니티는 소수의 인원을 대상으로 하기에
                <br />
                선착순으로 조기 마감될 수 있습니다.
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + `/assets/communities.png`}
              className="result_img"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
