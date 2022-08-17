import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import './style.css'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['React', 'Javascript', 'Node.js', 'Html5', 'Css', 'Mysql'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 9, 8, 8, 8, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const Technology = () => {
  return ( 
    <div id='contents'>
        <div id='detail'>
            <p>Skills</p><hr/>
            <div className='list'>
                <div>
                <p>REACT</p>
                <ul>
                    <li>React를 사용한 웹앱 제작 가능</li>
                    <li>useState, useEffect, axios 리덕스 등을 활용한 웹앱 제작 가능</li>
                </ul>
                </div>
                <div>
                <p>HTML</p>
                <ul>
                    <li>HTML 5, XHTML 마크업</li>
                    <li>웹 표준 / 접근성 준수</li>
                </ul>
                </div>
                <div>
                <p>JAVASCRIPT</p>
                <ul>
                    <li>동적인 웹사이트 제작 가능</li>
                    <li>JSON,배열메서드,Object,캔버스 등을 활용한 다양한 웹 사이트 제작 가능</li>
                </ul>
                <p>NODE.JS</p>
                <ul>
                    <li>간단한 웹 서버 제작 가능</li>
                    <li>soket을 활용한 간단한 채팅 어플 제작 가능</li>
                </ul>
                <p>MY-SQL</p>
                <ul>
                    <li>간단한 쿼리문 사용 가능</li>
                    <li>데이터베이스와 테이블 생성, 데이터 삽입과 삭제, 조인 툴 사용 가능</li>
                </ul>
                </div>
            </div>
        </div>
    <div id='chart'>
  <PolarArea data={data} />
  </div>
  </div>
  );
};

export default Technology;