import FadeIn from "react-fade-in/lib/FadeIn";

const Home = () => {
    return (
        <div id="home">
            <div id='home_text_box' className="text-effect">
                <FadeIn delay={300} transitionDuration={2000}>
                    <h1>좋아하는 것을</h1>
                    <h1>잘하는 것으로, <span className="responsive">으샤 USHA!</span></h1>
                </FadeIn>
            </div>
        </div>
    );
};

export default Home;