import React from 'react';
import './style2.css'
const Contents2 = () => {
    return (
                     <div className='portfolio'>
        <div className='contentsdiv'>
            <div className='imgdiv'>
                <img src='./img/hhh.png'></img>
            </div>
            <div className='contents'>
               <h1>02 </h1><span className='title'>HHH</span>
               <p>리액트로 만든 팀과제 입니다.
                <br/>
                호텔예약 시스템을 만들었습니다. 날자별로 선택가능하도록 만들었고
                전체 예약날자를 가져와 예약되어있는 날자는 비활성화 되도록 제작하였습니다.
                <br/>
                전체보기, 검색기능, 로그인, 예약기능을 첨부하였습니다.
               </p>
            <h3>
                사용언어 : React, Javascript, node.js, Mysql, html, css
               <br/> 사용서버 : AWS, heroku, vercel
            </h3>
            <span>
                제작인원 : 3인 / 제작기간 : 14일
                <br/>
                향후 업데이트 예정 : 위치를 보여주도록 내용을 세분화, 크게보기화면에 표출내용 추가
                <br/>
                부족한점 : 전체적인 기능구현 미흡
            </span>
            <h4><a href='https://hhh-client.vercel.app/' target='_blank' rel='noreferrer'>GoTo</a></h4>
            <h5><a href='https://github.com/Jhyjj/hhh-client' target='_blank' rel='noreferrer'>
                <img src='./img/github.png'></img></a></h5>
            </div>
            </div>
            </div>
      
    );
};

export default Contents2;