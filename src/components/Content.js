import React from 'react';
import {Link} from 'react-router-dom';

const Content = () => {
    return (
        <div id="Section">
            <div className="first">
                <div className="first_left">
                    <img src={process.env.PUBLIC_URL + `/assets/mimo-1.png`} className="mimo" />
                    <p className="first_left_first"><span className="big_letter">소소한 성취</span>에 만족하는게</p>
                    <p className="first_left_second"> 우리의 <span className="red_letter"><b>진짜 행복</b></span>인가요?</p>
                </div>
                <div className="first_right">
                    <p className="first_right_first"><span className="big_letter">좋은 대학, 좋은 기업</span>에 들어가는게</p>
                    <p className="first_right_second">우리의 <span className="red_letter"><b>진짜 꿈인가요?</b></span></p>
                    <img src={process.env.PUBLIC_URL + `/assets/mimo-2.png`} className="mimo" />
                </div>
            </div>
            <div className="second">
                <div className="second_left">
                    <img src={process.env.PUBLIC_URL + `/assets/book.png`} className="second_img" />
                    <p className="second_left_first"><span className="big_letter">전공/전무</span>에</p>
                    <p className="second_left_second">나를 끼워맞추지 말고</p>
                </div>
                <div className="second_right">
                    <img src={process.env.PUBLIC_URL + `/assets/moji.png`} className="second_img" />
                    <p className="second_right_first"><span className="big_letter">소확행</span>에</p>
                    <p className="second_right_second">안주하지 않고</p>
                </div>
            </div>
            <div className="second_comment">
                    <p>내가 좋아하는 것을 잘하는 것으로 계발하여</p>
                    <p><span className="red_letter big_letter">나의 가치</span>를 <span className="red_letter big_letter">Upgrade</span> 시키자!</p>
            </div>
            <div className="third">
                <img src={process.env.PUBLIC_URL + `/assets/logo.png`} className="logo" />
                <p><span className="purple big_letter">으샤!</span>는 개개인의 <span className="bolder">관심사를 역량으로</span></p>
                <p>계발할 수 있는 <span className="red_letter">온/오프라인 커뮤니티</span> 서비스 입니다.</p>
            </div>
            <div className="forth">
                <p><span className="thin_letter">STEP 1. </span>나의 <span className="red_letter big_letter">워너비</span>를 만나보세요.</p>
                <p>먼저 성공을 경험한 코치님의 <span className="red_letter">꿀팁</span>을 커뮤니티에서 나눠보아요.</p>
                <div className="forth_people">
                    <div className="person">
                        <img src={process.env.PUBLIC_URL + `/assets/person_1.jpg`} className="person_img" />
                        <h4>악세사리 덕후에서<br />쇼핑몰 사장으로.</h4>
                        <h3>강다교 님</h3>
                    </div>
                    <div className="person">
                        <img src={process.env.PUBLIC_URL + `/assets/person_2.jpg`} className="person_img" />
                        <h4>여행 덕후에서<br />유튜버로.</h4>
                        <h3>정지윤 님</h3>
                    </div>
                    <div className="person">
                        <img src={process.env.PUBLIC_URL + `/assets/person.jpg`} className="person_img" />
                        <h4>미드 덕후에서<br />통역가로.</h4>
                        <h3>이민재 님</h3>
                    </div>
                </div>
            </div>
            <div className="fifth">
                <div className="fifth_text">
                    <p><span className="thin_letter">STEP 2. </span>나의 <span className="red_letter big_letter">관심사</span>를 선택해보세요.</p>
                    <p>방구석 취미를 나의 <span className="red_letter">능력</span>으로, 커뮤니티에서 알려드려요.</p>
                </div>
                <div className="button_box">
                    {/* <Link to={"/register"}> */}
                        <button class="category_btn">악세사리</button>
                    {/* </Link> */}
                    <button class="category_btn">여행</button>
                    <button class="category_btn">영상편집</button>
                </div>
                <div className="button_box">
                    <button class="category_btn">외국어</button>
                    <button class="category_btn">디자인</button>
                    <button class="category_btn">프로그래밍</button>
                </div>
            </div>
            <div className="sixth">
                <h1>좋아하는 것을 <b>잘하는 것</b>으로</h1>
                <h1>작은 성취가 모여 <b>큰 성공</b>으로</h1>
                <div className="on_media"><p>더 많은 으샤의 소식을 듣고 싶다면!</p>
                    <img src={process.env.PUBLIC_URL + `/assets/appstore_logo.png`} className="icon_logo" />
                    <a href="https://www.instagram.com/usha.2022_official/">
                        <img src={process.env.PUBLIC_URL + `/assets/instagram_logo.png`} className="icon_logo" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCfJHKnrDUueNEvYjNdXdkQw">
                        <img src={process.env.PUBLIC_URL + `/assets/youtube_logo.png`} className="icon_logo" />
                    </a>
                </div>
                <div className="social_icons">
                    <img src={process.env.PUBLIC_URL + `/assets/appstore.png`} className="icons" />
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