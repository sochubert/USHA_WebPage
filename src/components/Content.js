import React from 'react';
import {Link} from 'react-router-dom';

const Content = () => {
    return (
        <div id="Section">
            <div className="first">
                <p className='first_text'>난 뭐해서 먹고 살아야하지?</p>
                <img src={process.env.PUBLIC_URL + `/assets/1_img.png`} className="first_img" />
                <div className="first_box">
                    <p className="first_description">자격증이나 따고 보자 했더니,<br />218만원 낭비...<br /><div className='first_description_sub'>잡코리아, 국내 4년제대학 3~4학년과 올해 졸업예정자 총 798명을 대상<br />'취업사교육 경험'관련 설문조사 진행  결과</div></p>
                    <img src={process.env.PUBLIC_URL + `/assets/1_receipt.png`} className="first_receipt_img" />
                </div>
            </div>
            <div className="second">
                <img src={process.env.PUBLIC_URL + `/assets/2_main.png`} className="second_img" />
                <p className='second_main_description'>[ 진로 선택 가이드 ]</p>
                <img src={process.env.PUBLIC_URL + `/assets/2_arrow.png`} className="second_arrow" ></img>
            </div>
            <div className="third">
                <img src={process.env.PUBLIC_URL + `/assets/3_progressbar.png`} className="third_progress_img" />
                <p className="third_description">STEP1. 취업 vs 창업 정하셨나요?</p>
                <hr />
                {/* <img src={process.env.PUBLIC_URL + `/assets/logo.png`} className="logo" />
                <p><span className="purple big_letter">으샤!</span>는 개개인의 <span className="bolder">관심사를 역량으로</span></p>
                <p>계발할 수 있는 <span className="red_letter">온/오프라인 커뮤니티</span> 서비스 입니다.</p> */}
            </div>
            <div className="third_sub">
                <img src={process.env.PUBLIC_URL + `/assets/3_person_1.png`} className="third_sub_person_img" />
                <p className="third_sub_text">3년 후</p>
                <img src={process.env.PUBLIC_URL + `/assets/3_person_2.png`} className="third_sub_person_img" />
            </div>
            <div className="forth">
                <img src={process.env.PUBLIC_URL + `/assets/4_progressbar.png`} className="forth_progress_img" />
                <div className='forth_box'>
                    <img src={process.env.PUBLIC_URL + `/assets/4_result_img.png`} className="forth_result_img" />
                    <div className='forth_sub_box'>
                        <p>취업 적합형 or 창업적합형,</p>
                        <p>나는 어떤 유형인지 궁금하다면?</p>
                        <img src={process.env.PUBLIC_URL + `/assets/4_speech_img.png`} className="forth_speech_img" />
                    </div>
                </div>
            </div>
            <div className='fifth'>
                <img src={process.env.PUBLIC_URL + `/assets/5_progressbar.png`} className="forth_progress_img" />
                <p>STEP2. 실전 역량 키우기</p>
                <hr />
                <div className='fifth_box'>
                    <img src={process.env.PUBLIC_URL + `/assets/5_book_img.png`} className="fifth_book_img" />
                    <p>직무/전공에 맞춘<br/>따분한 강의 말고</p>    
                </div>
                <img src={process.env.PUBLIC_URL + `/assets/5_main_img.png`} className="fifth_main_img" />
                <p>'좋아하는 것'을 '잘하는 것'으로 개발하는 커뮤니티!</p>
                <div className='community_list'>
                    <img src={process.env.PUBLIC_URL + `/assets/6_carrot.png`} className="community" />
                    <img src={process.env.PUBLIC_URL + `/assets/6_estate.png`} className="community" />
                    <img src={process.env.PUBLIC_URL + `/assets/6_smart.png`} className="community" />
                </div>
                <div className='community_list'>
                    <img src={process.env.PUBLIC_URL + `/assets/6_coding.png`} className="community" />
                    <img src={process.env.PUBLIC_URL + `/assets/6_python.png`} className="community" />
                    <img src={process.env.PUBLIC_URL + `/assets/6_business.png`} className="community" />
                </div>
            </div>
            <div className='sixth'>
                <img src={process.env.PUBLIC_URL + `/assets/7_progressbar.png`} className="forth_progress_img" />
                <p>돈벌면서 나만의 스펙 쌓고 싶다면?</p>
                <div className='sixth_box'>
                    <div className='sixth_sub_box'>
                        <img src={process.env.PUBLIC_URL + `/assets/7_speech.png`} className="sixth_speech_img" />
                        <p className='sixth_sub_descriprion'>커뮤니티는 소수의 인원을 대상으로 하기에<br />선착순으로 조기 마감될 수 있습니다.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + `/assets/7_application.png`} className="sixth_app_img" />
                </div>
            </div>
            <div className="seventh">
                <h1>좋아하는 것을 <b>잘하는 것</b>으로</h1>
                <h1>작은 성취가 모여 <b>큰 성공</b>으로</h1>
                <div className="on_media"><p>더 많은 으샤의 소식을 듣고 싶다면!</p>
                    <a href="https://apps.apple.com/kr/app/%EC%9C%BC%EC%83%A4-usha/id1612055310">
                        <img src={process.env.PUBLIC_URL + `/assets/appstore_logo.png`} className="icon_logo" />
                    </a>
                    <a href="https://www.instagram.com/usha.2022_official/">
                        <img src={process.env.PUBLIC_URL + `/assets/instagram_logo.png`} className="icon_logo" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCfJHKnrDUueNEvYjNdXdkQw">
                        <img src={process.env.PUBLIC_URL + `/assets/youtube_logo.png`} className="icon_logo" />
                    </a>
                </div>
                <div className="social_icons">
                    <a href="https://apps.apple.com/kr/app/%EC%9C%BC%EC%83%A4-usha/id1612055310">
                        <img src={process.env.PUBLIC_URL + `/assets/appstore.png`} className="icons" />
                    </a>
                    <a href="https://www.instagram.com/usha.2022_official/">
                        <img src={process.env.PUBLIC_URL + `/assets/instagram.png`} className="icons" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCfJHKnrDUueNEvYjNdXdkQw">
                        <img src={process.env.PUBLIC_URL + `/assets/youtube.png`} className="icons" />
                    </a>
                </div>
            </div>
            <div className="about">
                <p>문의</p>
                <p><a href="tel:010-9609-3868">010-9609-3868</a></p>
                <p><a href="mailto:headingwarm10@gmail.com">headingwarm10@gmail.com</a></p>
                <div className="spacing">
                </div>
                <span className="desktop">
                    <h4>사업자명 : 헤딩웜(Heading Warm) | 대표 : 정지윤 | 사업자 등록번호 : 845-08-01863</h4>
                    <h4>경기도 안산시 상록구 한양대학로 55, 제5공학관 지하 107-7호 창업 4호실(사동, 한양대학교 내)</h4>
                </span>
                <span className="mobile">
                    <h4>사업자명 : 헤딩웜(Heading Warm) | 대표 : 정지윤</h4>
                    <h4>사업자 등록번호 : 845-08-01863</h4>
                    <h4>경기도 안산시 상록구 한양대학로 55, </h4>
                    <h4>제5공학관 지하 107-7호 창업 4호실(사동, 한양대학교 내)</h4>
                </span>
            </div>
        </div>
    );
};

export default Content;