import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import hoverBg from "../images/hover-bg.jpg"; // 공통 호버 배경 이미지

const ProjectCard = ({ 
    defaultImg, 
    hoverImg, 
    title, 
    description, 
    progressbar, 
    customClass, 
    detailsFile,
    uiFolder,
    githublink,
    videolink
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [details, setDetails] = useState("");
    const [uiImages, setUiImages] = useState([]);

    useEffect(() => {
        if (uiFolder) {
            const images = Array.from({ length: 4 }, (_, i) => `${uiFolder}/ui${i + 1}.png`);
            setUiImages(images);
        }
    }, [uiFolder]);

    // ✅ txt 파일 읽기 & 텍스트 저장
    useEffect(() => {
        if (detailsFile) {
            fetch(detailsFile)
                .then(response => response.text())
                .then(text => setDetails(text))
                .catch(error => console.error("404 Not Found :(", error));
        }
    }, [detailsFile]);

    return (
        <div 
            className={`project-card ${customClass}`} 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* 기본 이미지 */}
            <img src={defaultImg} alt={title} className="project-image" />

            {/* 호버 시 나타나는 배경 이미지 */}
            {isHovering && (
                <img src={hoverBg} alt="Hover Background" className="hover-bg" />
            )}

            {/* 호버 시 오버레이되는 png */}
            {isHovering && (
                <img src={hoverImg} alt="Hover Mockup" className="overlay-image" />
            )}

            {/* 호버 시 표시될 프로젝트 정보 */}
            <div className={`project-info ${isHovering ? "visible" : ""}`}>
                <h2 className="project-title">{title}</h2>
                <p className="project-desc">{description}</p>
                
                <div className="progress-bar-container">
                    <span className="progress-label">기여도</span>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${progressbar}%` }}></div>
                    </div>
                    <span className="progress-percent">{progressbar}%</span>
                </div>

                {/*view more클릭 시 팝업 열기 */}
                <button className="view-more" onClick={() => setIsPopupOpen(true)}>VIEW MORE</button>
            </div>

            {/* 프로젝트 상세 팝업 창 */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>{title}</h2>
                        <p className="popup-text">{details}</p> {/* txt 파일 내용 */}
                        <h3>📸 UI</h3>
                        <div className="ui-image-container">
                            {uiImages.map((img, index) => (
                                <img key={index} src={img} alt={`${title} UI ${index + 1}`} className="ui-image" />
                            ))}
                        </div>
                        <h3>🔗 Project Link</h3>
                        {githublink && (
                            <p>
                                <a href={githublink} target="_blank" rel="noopener noreferrer">
                                    📂 GitHub Repository
                                </a>
                            </p>
                        )}
                        {videolink && (
                            <p>
                                <a href={videolink} target="_blank" rel="noopener noreferrer">
                                    🎥 Project Demonstration Video
                                </a>
                            </p>
                        )}
                        <button className="close-popup" onClick={() => setIsPopupOpen(false)}>close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
