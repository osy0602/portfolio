import React, {useState} from 'react';
import '../styles/main.css';
import scrollImageBlack from '../images/scrollblack.png'
import outerBlack from '../images/outercircle.png'
import innerBlack from '../images/innercircle.png'
import normalGithub from '../images/normalgithub.png'
const Main = () => {
    const [circleIsClicked, setCircleIsClicked] = useState(false);
    
    const clickInnerCirle = () => {
        setCircleIsClicked((prevState) => !prevState); // 이전 상태의 반대값으로 업데이트
    };

    const clickGithub = () =>{
        window.open('https://github.com/osy0602')
    }
    return (
        <div>
            <div className='leftright'>
                <div className='introduction'>
                    <p className='intro'>Hi there!</p>
                    <p className='mid'>사용자 맞춤형<br></br> 서비스를 개발하는</p>
                    <div className='name'>
                        <p className='myname'>오세영</p>
                        <p className='ip'>입니다</p>
                    </div>
                </div>
                <div className='scrollimages'>
                    <img src = {scrollImageBlack} alt="scroll" className='scroll'/>
                    <img src = {outerBlack} alt="outercircle" className='outercircle'/>
                    <img src = {innerBlack} alt="innercircle" className={`innercircle ${circleIsClicked ? 'innercircleup' : 'innercircledown'}`} onClick={clickInnerCirle}/>
                </div>
            </div>
            <div class = "imageContainer">
                <img src = {normalGithub} alt="github" className='githubnormal' onClick={clickGithub}/>
            </div>
        </div>
    );
};

export default Main;