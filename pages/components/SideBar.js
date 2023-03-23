import React, { useState } from 'react'
import styles from '../../styles/SideBar.module.css'
import Link from 'next/link'
const SideBar = (props) => {
  const [activeClass,SetActiveClass]= useState('general');
  const setActive = (e)=>{
    props.setCategories(e.target.id);
    SetActiveClass(e.target.id);
  }
 
  return (
    <div className={`${styles.container} ${!props.ham?'hamActive':''}`}>
      <style jsx>{`
        li.active{
          background: #41888b;
          color: white;
          box-shadow: 0px 0px 8px 3px #41888b;
        }
        .hamActive{
          transform: translateX(0px);
        }
      `}</style>
        <Link href="/"><h1>My News App</h1></Link>
        <h2>Categories</h2>
        <ul>
            <li onClick={setActive} id = 'general' className={activeClass === 'general'?'active':''}><span className="material-symbols-outlined">newspaper</span>&nbsp; General</li>
            <li onClick={setActive} id = 'sports'  className={activeClass === 'sports'?'active':''}><span className="material-symbols-outlined">sports_basketball</span>&nbsp; Sports</li>
            <li onClick={setActive} id = 'technology'  className={activeClass === 'technology'?'active':''}><span className="material-symbols-outlined">biotech</span>&nbsp; Technology</li>
            <li onClick={setActive} id = 'entertainment'  className={activeClass === 'entertainment'?'active':''}><span className="material-symbols-outlined">live_tv</span>&nbsp; Entertainment</li>
            <li onClick={setActive} id = 'business'  className={activeClass === 'business'?'active':''}><span className="material-symbols-outlined">account_balance</span>&nbsp; Business</li>
            <li onClick={setActive} id = 'health'  className={activeClass === 'health'?'active':''}><span className="material-symbols-outlined">health_and_safety</span>&nbsp; Health</li>
            <li onClick={setActive} id = 'science'  className={activeClass === 'science'?'active':''}><span className="material-symbols-outlined">science</span>&nbsp; Science</li>
        </ul>
    </div>
  )
}
export default SideBar;
