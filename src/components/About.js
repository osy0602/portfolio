import React from 'react';
import '../styles/About.css';

import syimage from '../images/sygra.png'
const About = () => {
    return (
        <div>
        <div  className='title'>
            <p>about me</p>
        </div>
        <div className='about-content'>
            <div className='about-textbox'>
                <div className='about-title'>
                    <p>끊임없는 도전과 성실함으로
                    <br/>빠르게 적응하는 신입 개발자 오세영입니다.</p>
                </div>
                <div className='about-introduction'>
                    <p>다양한 프로젝트 경험을 통해 문제 해결 능력을<br/> 키웠으며 챗봇, 미디어 아트, 성격 테스트 등<br/> 다양한 인터랙티브 시스템을 개발하며<br/>  사용자와 소통하는 서비스를 만듭니다</p>
                </div>
                <div className='about-hashtag'>
                    <p>#도전정신</p>
                    <p>#신뢰감</p>
                    <p>#협업</p>
                    <p>#소통</p>
                    <p>#침착함</p>
                </div>
            </div>
            {/* <div className='about-imagebox'>
                    <img src = {syimage} alt="my" className='myimage'/>
            </div> */}
            
        </div>
        <div className='about-info'>
            <table>
                <tbody>
                    <tr>
                        <td className='info-title'>이름</td>
                        <td className='info-content'>오세영</td>
                        <td className='info-title'>이메일</td>
                        <td className='info-content'>osy0602@naver.com</td>
                    </tr>
                    <tr>
                        <td className='info-title'>생년월일</td>
                        <td className='info-content'>99.06.02</td>
                        <td className='info-title'>연락처</td>
                        <td className='info-content'>010.3609.5318</td>
                    </tr>
                    <tr>
                        <td className='info-title'>학력</td>
                        <td className='info-content'>덕성여자대학교 IT미디어공학과</td>
                        <td className='info-title'>주소</td>
                        <td className='info-content'>경기도 군포시 당동</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div  className='title'>
            <p>skills</p>
        </div>
        <div className='about-skills'>
            <table>
                <tbody>
                    <tr>
                        <td className='skills-title'>Language</td>
                        <td className='skills-list'>Python</td>
                        <td className='skills-list'>Javascript</td>
                    </tr>
                    <tr>
                        <td className='skills-title'>Frontend</td>
                        <td className='skills-list'>React</td>
                        <td className='skills-list'>Streamlit</td>
                    </tr>
                    <tr>
                        <td className='skills-title'>Backend</td>
                        <td className='skills-list'>FastAPI</td>
                        <td className='skills-list'>Node.js</td>
                        <td className='skills-list'>OpenAI</td>
                    </tr>
                    <tr>
                        <td className='skills-title'>Database</td>
                        <td className='skills-list'>MySQL</td>
                        <td className='skills-list'>MongoDB</td>
                    </tr>
                    <tr>
                        <td className='skills-title'>DevOps</td>
                        <td className='skills-list'>Docker</td>
                    </tr>
                    <tr>
                        <td className='skills-title'>OS</td>
                        <td className='skills-list'>Linux</td>
                        <td className='skills-list'>Window</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>

        </div>
        </div>
    );
};

export default About;