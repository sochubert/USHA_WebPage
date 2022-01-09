const Content = () => {
    return (
        <div id="Section">
            <div className="first">
                <div className="first_left">
                    <img src={process.env.PUBLIC_URL + `/assets/mimo-1.png`} className="mimo" />
                    <p className="first_left_first">소소한 성취에 만족하는게</p>
                    <p className="first_left_second"> 우리의 진짜 행복인가요?</p>
                </div>
                <div className="first_right">
                    <p className="first_right_first">좋은 대학, 좋은 기업에 들어가는게</p>
                    <p className="first_right_second">우리의 진짜 꿈인가요?</p>
                    <img src={process.env.PUBLIC_URL + `/assets/mimo-2.png`} className="mimo" />
                </div>
            </div>
            <div className="second">
                <h1>test</h1>
            </div>
            <div className="third">
                <h1>test</h1>
            </div>
            <div className="forth">
                <h1>test</h1>
            </div>
            <div className="fifth">
                <h1>test</h1>
            </div>
            <div className="sixth">
                <h1>test</h1>
            </div>
        </div>
    );
};

export default Content;