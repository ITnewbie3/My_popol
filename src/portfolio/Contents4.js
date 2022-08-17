import React from 'react';
import './style.css'

const Contents4 = () => {
    return (
        <div className='portfolio'>
        <div className='contentsdiv'>
            <div className='imgdiv'>
                <img src='./img/baseball.png'></img>
            </div>
            <div className='contents'>
               <h1>04 </h1><span className='title'>BASEBALL</span>
               <p>Javascript로 만든 팀별 과제입니다.
                <br/>
                Javascript를 배운 후 처음으로 만들어본 프로젝트 입니다.
                랜덤함수와 if문, function함수를 이용해 제작하였습니다.
                <br/>
                처음해본 프로젝트라 선언을 잘못하거나 값 확인, 등의 실수가 많았지만
                생에 첫 팀과제인 만큼 서로서로 열심히 만들었습니다.
                <br/>
                바닐라자바스크립트로 제작되었습니다.
               </p>
            <h3>
                사용언어 : Javascript, html, css
               <br/> 사용서버 : datnet
            </h3>
            <span>
                제작인원 : 2인 / 제작기간 : 7일
                <br/>
                부족한점 : 변수네이밍, 기능부족, 객체미선언
            </span>
            <h4><a href='http://sh98224.dothome.co.kr/baseball' target='_blank' rel='noreferrer'>GoTo</a></h4>
            <h5><a href='https://github.com/ITnewbie3/baseball' target='_blank' rel='noreferrer'>
                <img src='./img/github.png'></img></a></h5>
            </div>
            </div>
            </div>
    );
};

export default Contents4;