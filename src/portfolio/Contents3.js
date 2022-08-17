import React from 'react';
import './style2.css'
const Contents3 = () => {
    return (
        <div className='portfolio'>
        <div className='contentsdiv'>
            <div className='imgdiv'>
                <img src='./img/recipe.png'></img>
            </div>
            <div className='contents'>
               <h1>03 </h1><span className='title'>RECIPE</span>
               <p>php로 만든 팀별 과제 입니다.
                <br/>
                php 수업을 마치고 팀과제로 만든 레시피 소개사이트 입니다. mysql문을 사용하였고,
                사진을 넣을 시 각각 삽입내용의 제목으로 폴더생성 후 폴더에 사진을 넣어 중복이 일어나지
                않도록 제작했습니다.
                <br/>
                전체보기, 검색기능, 로그인, 리뷰, 찜하기기능을 첨부하였습니다.
               </p>
            <h3>
                사용언어 : Javascript, php, Mysql, html, css
               <br/> 사용서버 : AWS, dothome
            </h3>
            <span>
                제작인원 : 3인 / 제작기간 : 13일
                <br/>
                향후 업데이트 예정 : 반응형 웹사이트로 변경
                <br/>
                부족한점 : 변수네이밍
            </span>
            <h4><a href='http://hjindo.dothome.co.kr/php/RECIPE2/' target='_blank' rel='noreferrer'>GoTo</a></h4>
            <h5><a href='https://github.com/Jhyjj/Recipe' target='_blank' rel='noreferrer'>
                <img src='./img/github.png'></img></a></h5>
            </div>
            </div>
            </div>
    );
};

export default Contents3;