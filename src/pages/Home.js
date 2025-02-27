import React, { useRef } from 'react';
import Menu from '../components/Menu';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';

const Home = () => {
    // 각 섹션을 참조할 ref 생성
    const mainRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <div className='center'>
            {/* Menu에 스크롤 함수와 ref 전달 */}
            <Menu sections={{ mainRef, aboutRef, projectsRef}} />
            <section ref={mainRef}><Main /></section>
            <section ref={aboutRef}><About /></section>
            <section ref={projectsRef}><Projects /></section>
        </div>
    );
};

export default Home;
