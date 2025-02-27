import React from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

// 프로젝트별 기본 이미지 & 호버 시 오버레이될 PNG
import trippassImg from "../images/trippass.jpg";
import trippassOverlay from "../images/trippass-hover.png";
import emotionImg from "../images/emotionpalette.png";
import emotionOverlay from "../images/emotionpalette-hover.png";
import ontherockImg from "../images/ontherock.png";
import ontherockOverlay from "../images/ontherock-hover.png";
// import gyeolImg from "../images/gyeol.png";
// import gyeolOverlay from "../images/gyeol-hover.png";

const Projects = () => {
    return (
        <div>
            <div className="title">
                <p>Projects</p>
            </div>
            <div className="image-container">
                <ProjectCard
                    title="TRIPPASS"
                    description={<>AI와 함께하는 맞춤형 여행 일정 추천 서비스🛫<br />여행 크루를 모집하고 함께 떠나는 스마트한 여행!</>}
                    defaultImg={trippassImg}
                    hoverImg={trippassOverlay} // 오버레이 PNG
                    hashtags="#OpenAI #React #FastAPI"
                    progressbar={30}
                    customClass="trippass-style"
                    detailsFile="/data/trippass.txt"
                    uiFolder="../images/trippass"
                    githublink ="https://github.com/osy0602/TripPass_osy0602_develop"
                    videolink="https://drive.google.com/file/d/1YiN4J9GIzEKVOqw6IEpehGkDNqBocLhd/view"
                />
                <ProjectCard
                    title="온더락"
                    description="해외 직구 증감과 국내 온라인 쇼핑몰의 상관관계 조사🛒"
                    defaultImg={ontherockImg}
                    hoverImg={ontherockOverlay}
                    hashtags="#FastAPI #Node.js #JS"
                    progressbar={50}
                    customClass="ontherock-style"
                    detailsFile="/data/ontherock.txt"
                    uiFolder="../images/ontherock"
                    githublink ="https://github.com/osy0602/AWS_SY_apiProject"
                />
                <ProjectCard
                    title="Emotion Palette"
                    description={<>뇌파 기반 1인 맞춤 미디어 아트🎧 <br/> 좋아하는 음악을 들으며 느끼는 감정을 미디어 아트로 표현</>}
                    defaultImg={emotionImg}
                    hoverImg={emotionOverlay}
                    hashtags="#Python #UIUX #React"
                    progressbar={30}
                    customClass="emotion-style"
                    detailsFile="/data/emotionpalette.txt"
                    uiFolder="../images/emotionpalette"
                    githublink ="https://github.com/osy0602/EmotionPalette"
                    videolink="https://www.youtube.com/watch?v=vvR2YzrExpk"
                />
                {/* <ProjectCard
                    title="Gyeol"
                    description="사용자의 성향을 분석하여 이상적인 여행지를 추천"
                    defaultImg={gyeolImg}
                    hoverImg={gyeolOverlay}
                    hashtags="#DataScience #AI #React"
                    progressbar={100}
                    customClass="gyeol-style"
                /> */}
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Projects;
