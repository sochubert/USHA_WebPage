import React from "react";
import { Link } from "react-router-dom";
import Fade, { Slide } from "react-reveal/Fade";

const Content = () => {
  return (
    <div id="Section">
      <div className="first">
        <p className="first_text">
          <span className="first_text_small">난</span> 뭐해서 먹고 살아야
          <span className="first_text_small">하지?</span>
        </p>
        <img
          src={process.env.PUBLIC_URL + `/assets/1_img.png`}
          className="first_img"
        />
        <div className="first_box">
          <Fade bottom>
            <p className="first_description">
              자격증이나 따고 보자
              <span className="first_description_small"> 했더니,</span>
              <br />
              <br />
              <span className="first_descrition_red">218만원 낭비...</span>
              <br />
              <div className="first_description_sub">
                잡코리아, 국내 4년제대학 3~4학년과 올해 졸업예정자 총 798명을
                대상
                <br />
                '취업사교육 경험'관련 설문조사 진행 결과
              </div>
            </p>
          </Fade>
          <img
            src={process.env.PUBLIC_URL + `/assets/1_receipt.png`}
            className="first_receipt_img"
          />
        </div>
      </div>
      <div className="second">
        <Fade bottom>
          <img
            src={process.env.PUBLIC_URL + `/assets/2_main.png`}
            className="second_img"
          />
          <p className="second_main_description">[ 진로 선택 가이드 ]</p>
          <img
            src={process.env.PUBLIC_URL + `/assets/2_arrow.png`}
            className="second_arrow"
          ></img>
        </Fade>
      </div>
      <div className="third">
        <img
          src={process.env.PUBLIC_URL + `/assets/3_progressbar.png`}
          className="third_progress_img"
        />
        <Fade left>
          <p className="third_description">
            STEP1. <span className="third_description_blue">취업 vs 창업</span>{" "}
            정하셨나요?
          </p>
        </Fade>
        <hr />
      </div>
      <div className="third_sub">
        <Fade left>
          <img
            src={process.env.PUBLIC_URL + `/assets/3_person_1.png`}
            className="third_sub_person_img"
          />
        </Fade>
        <p className="third_sub_text">3년 후</p>
        <Fade right>
          <img
            src={process.env.PUBLIC_URL + `/assets/3_person_2.png`}
            className="third_sub_person_img"
          />
        </Fade>
      </div>
      <div className="forth">
        <Fade bottom>
          <img
            src={process.env.PUBLIC_URL + `/assets/4_progressbar.png`}
            className="forth_progress_img"
          />
        </Fade>
        <Fade left>
          <div className="for_font">
            <p className="forth_sub_box_description">
              취업 적합형 or 창업적합형,
            </p>
            <p>
              <span className="forth_sub_box_text">나는 어떤 유형인지</span>{" "}
              궁금하다면?
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="forth_box">
            <img
              src={process.env.PUBLIC_URL + `/assets/4_result_img.png`}
              className="forth_result_img"
            />
            <div className="forth_sub_box">
              <img
                src={process.env.PUBLIC_URL + `/assets/bubble_QR1.png`}
                className="forth_speech_img is_pc"
              />
              <a href="https://pf.kakao.com/_xeqefs/chat">
                <img
                  src={process.env.PUBLIC_URL + `/assets/bubble_icon1.png`}
                  className="sixth_speech_img is_mobile"
                />
              </a>
            </div>
          </div>
        </Fade>
      </div>
      <div className="fifth">
        <Fade bottom>
          <img
            src={process.env.PUBLIC_URL + `/assets/5_progressbar.png`}
            className="forth_progress_img"
          />
        </Fade>
        <Fade left>
          <p className="fifth_description">
            STEP2. <span className="third_description_blue">실전 역량</span>{" "}
            키우기
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <div className="fifth_box">
            <img
              src={process.env.PUBLIC_URL + `/assets/5_book_img.png`}
              className="fifth_book_img"
            />
            <p className="fifth_box_text">
              직무/전공에 맞춘
              <br />
              따분한 강의 말고
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + `/assets/5_main_img.png`}
            className="fifth_main_img"
          />
        </Fade>
        <Fade left>
          <p className="fifth_box_description">
            <span className="fifth_box_description_highlight">좋아하는 것</span>
            을{" "}
            <span className="fifth_box_description_highlight_2">잘하는 것</span>
            으로 개발하는 커뮤니티!
          </p>
        </Fade>
        <Fade bottom>
          <div className="community_list">
            <img
              src={process.env.PUBLIC_URL + `/assets/6_carrot.png`}
              className="community"
            />
            <img
              src={process.env.PUBLIC_URL + `/assets/6_estate.png`}
              className="community"
            />
            <img
              src={process.env.PUBLIC_URL + `/assets/6_smart.png`}
              className="community"
            />
          </div>
          <div className="community_list">
            <img
              src={process.env.PUBLIC_URL + `/assets/6_coding.png`}
              className="community"
            />
            <img
              src={process.env.PUBLIC_URL + `/assets/6_python.png`}
              className="community"
            />
            <img
              src={process.env.PUBLIC_URL + `/assets/6_business.png`}
              className="community"
            />
          </div>
        </Fade>
      </div>
      <div className="sixth">
        <Fade bottom>
          <img
            src={process.env.PUBLIC_URL + `/assets/7_progressbar.png`}
            className="forth_progress_img special"
          />
        </Fade>
        <Fade left>
          <p className="sixth_text">
            <span className="sixth_big">돈</span> 벌면서{" "}
            <span className="sixth_big">나만의 스펙</span> 쌓고 싶다면?
          </p>
        </Fade>
        <Fade bottom>
          <div className="sixth_box">
            <div className="sixth_sub_box">
              <img
                src={process.env.PUBLIC_URL + `/assets/bubble_QR2.png`}
                className="sixth_speech_img is_pc"
              />
              <a href="https://pf.kakao.com/_xeqefs/chat">
                <img
                  src={process.env.PUBLIC_URL + `/assets/bubble_icon2.png`}
                  className="sixth_speech_img is_mobile"
                />
              </a>
              <p className="sixth_sub_descriprion">
                커뮤니티는 소수의 인원을 대상으로 하기에
                <br />
                선착순으로 조기 마감될 수 있습니다.
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + `/assets/7_application.png`}
              className="sixth_app_img"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Content;
