import React from 'react';
import './style.css'
const Contents = () => {
    return (
        <div className='portfolio'>
                        <div id='hr-sect'>포트폴리오 Portfolio </div> 
        <div className='contentsdiv'>
            <div className='imgdiv'>
                <img src='./img/flex.gif'></img>
            </div>
            <div className='contents'>
               <h1>01 </h1><span className='title'>FLEX</span>
               <p>리액트로 만든 개인 포트폴리오 사이트입니다.
                <br/>
                API 미사용으로 영화는 테이블에 모두 들어있고, 내용은 sql문으로 가져오도록 하였습니다.
                채팅은 soket을 사용하였습니다.
                <br/>
                영화소개, 찜하기, 리뷰, 회원가입, 간단한 실시간채팅 기능을 넣었습니다.
               </p>
            <h3>
                사용언어 : React, Javascript, node.js, Mysql, html, css
               <br/> 사용서버 : AWS, heroku, vercel
            </h3>
            <span>
                제작인원 : 1인 / 제작기간 : 12일
                <br/>
                향후 업데이트 예정 : 리펙토링, 로그인 상태를 직관적으로 알수있도록, 하단부를 알수있게 footer제작
                <br/>
                부족한점 : 변수 네이밍, 서비스의도의 불명확함
            </span>
            <h4><a href='http://flex-client-ten.vercel.app' target='_blank' rel='noreferrer'>GoTo</a></h4>
            <h5><a href='https://github.com/ITnewbie3/flex_client' target='_blank' rel='noreferrer'>
                <img src='./img/github.png'></img></a></h5>
            </div>
            </div>
            </div>
    );
};

export default Contents;