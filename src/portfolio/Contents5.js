import React from 'react';
import './style2.css'
const Contents5 = () => {
    return (
        <div>
              <div className='portfolio'>
        <div className='contentsdiv'>
            <div className='imgdiv'>
                <img src='./img/snake.png'></img>
            </div>
            <div className='contents'>
               <h1>05 </h1><span className='title'>SNAKEGAME</span>
               <p>canvas를 배운 후 만든 개인과제 입니다.
                <br/>
                canvas교육을 마친 후 Javascript와 함께 canvas를 사용해 제작된 게임입니다.
                <br/>
                게임을 만들어보며, 새로이 하나하나 그려가면서 게임이 진행된다는 점이 많이 신기했습니다.
                <br/>
                바닐라자바스크립트로 제작되었습니다.
               </p>
            <h3>
                사용언어 : Javascript, html, css
               <br/> 사용서버 : datnet
            </h3>
            <span>
                제작인원 : 1인 / 제작기간 : 12일
                <br/>
                부족한점 : 객체미선언, 우측으로가는도중 반대편버튼 꾹누를시 이동이 가능함.
            </span>
            <h4><a href='http://sh98224.dothome.co.kr/snakegame/' target='_blank' rel='noreferrer'>GoTo</a></h4>
            <h5><a href='https://github.com/ITnewbie3/snakegame' target='_blank' rel='noreferrer'>
                <img src='./img/github.png'></img></a></h5>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Contents5;