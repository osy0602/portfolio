import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div>
        <div  className='title'>
            <p>about me</p>
        </div>
        <div className='about-content'>
            <div className='about-textbox'>
                <div className='about-title'>
                    {/* <p>끊임없는 도전과 성실함으로
                    <br/>빠르게 적응하는 신입 개발자 오세영입니다.</p> */}
                    <p> I bring strong problem solving skills, 
                    <br/>adaptability, and a genuine curiosity for learning
                    </p>
                </div>
                <div className='about-introduction'>
                    {/* <p>다양한 프로젝트 경험을 통해 문제 해결 능력을<br/> 키웠으며 챗봇, 미디어 아트, 성격 테스트 등<br/> 다양한 인터랙티브 시스템을 개발하며<br/>  사용자와 소통하는 서비스를 만듭니다</p> */}
                    <p>Passionate Frontend Developer 
                    <br/>with hands-on experience
                    <br/>building AI-powered and interactive web applications.
                    <br/>and interactive web applications.</p>
                </div>
                <div className='about-hashtag'>
                    <p>#ChallengeDriven</p>
                    <p>#Reliable</p>
                    <p>#TeamPlayer</p>
                    <p>#GoodCommunicator</p>
                    <p>#Composed</p>
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
                        <td className='info-title'>Name</td>
                        <td className='info-content'>Seyoung Oh</td>
                        <td className='info-title'>email</td>
                        <td className='info-content'>osy5318@gmail.com</td>
                    </tr>
                    <tr>
                        <td className='info-title'>Nationality</td>
                        <td className='info-content'>Republic of Korea</td>
                        <td className='info-title'>Contact</td>
                        <td className='info-content'>82+)1036095318</td>
                    </tr>
                    <tr>
                        <td className='info-title'>Education</td>
                        <td className='info-content'>Duksung Women's University ITMedia Engineering</td>
                        <td className='info-title'>Visa</td>
                        <td className='info-content'>Working Holiday visa(valid untill Aug 2026)</td>
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