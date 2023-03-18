"use client"
import NavbarCodeCSS from '@/components/navbar/navbarCodeCSS';
import CodeHTML from '@/components/navbar/navbarCodeHTML';
import { useState } from 'react';
import './page.css';
import { HomeProps } from './page.types';

export default function Home(props: HomeProps) {
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  
  const showCode = () => {
    setIsOpenCode(!isOpenCode);
  }
  
  
  const showCss = () => {
    setIsOpenCss(!isOpenCss);
  }

  return (
    <div className="home-container">
      <div className="heading">
        <h1>create a navbar with three items and show the code and make it responsive</h1>
      </div>
      <div className="layout">
        <div className="listItems">
          <ul className="items">
            <li className="item">item 1</li>
            <li className="item">item 2</li>
            <li className="item">item 3</li>
          </ul>
        </div>
      </div>
      <div className="code">
      <div className="code-html">
        <button onClick={showCode}>show code</button>
        {isOpenCode && <CodeHTML />}
      </div>
      <div className="code-css">
      <button onClick={showCss}>show css</button>
        {isOpenCss && <NavbarCodeCSS />}
      </div>
      </div>
    </div>
  );
}
