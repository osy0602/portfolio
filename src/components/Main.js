import React, { useState } from 'react';
import scrollImageBlack from '../images/scrollblack.png';
import outerBlack from '../images/outercircle.png';
import innerBlack from '../images/innercircle.png';
import normalGithub from '../images/normalgithub.png';

const Main = () => {
  const [circleIsClicked, setCircleIsClicked] = useState(false);

  const clickInnerCirle = () => {
    setCircleIsClicked((prevState) => !prevState);
  };

  const clickGithub = () => {
    window.open('https://github.com/osy0602');
  };

  return (
    <div>
      <div className="flex justify-start items-center h-[80vh] pl-[10%] box-border">
        <div className="flex flex-col justify-center items-start box-border pb-[5%]">
          <p className="text-[2vw] text-[#909090] font-medium">Hi there!</p>

          <div className="flex flex-col">
            <p className="text-[3vw] font-nanum inline-block">I'm</p>
            <p className="text-[6vw] font-nanumbold text-[#93C6E7] font-nanum inline-block">Seyoung Oh</p>
          </div>

          <p className="m-0 text-[3vw] font-nanum">
            I develop<br />customized services
          </p>
        </div>

        <div className="flex items-center justify-center h-screen ml-[20%]">
            <img
                src={scrollImageBlack}
                alt="scroll"
                className="w-10 h-10 animate-spin-slow"
            />
          <img
            src={outerBlack}
            alt="outercircle"
            className="absolute max-w-[2%] w-[1%]"
          />
          <img
            src={innerBlack}
            alt="innercircle"
            className={`absolute max-w-[0.5%] transform transition-transform duration-500 ${
              circleIsClicked ? 'translate-y-[-80%]' : 'translate-y-[80%]'
            } hover:cursor-pointer`}
            onClick={clickInnerCirle}
          />
        </div>
      </div>

      <div
        className="flex justify-center items-center pt-[5%] hover:cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        onClick={clickGithub}
      >
        <img src={normalGithub} alt="github" className="block max-w-[5%] h-auto" />
      </div>
    </div>
  );
};

export default Main;
