import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import '../styles/sidebar.css'
export const Sidebar = ({setPage}) => {
  return (
    <aside className="sidebar-wrp">
      <div className="sidebar-cnt">
        <div className="sidebar">
          <h2>Multiple disease prediction system</h2>
        </div>
        <div className="sidebar" onClick={()=>setPage('diabetes')}>
          <span>
            <TbActivityHeartbeat />
          </span>
          <span>Diabetes Prediction</span>
        </div>
        <div className="sidebar" onClick={()=>setPage('heart')}>
          <span>
            <AiOutlineHeart />
          </span>
          <span>Heart disease Prediction</span>
        </div>
        <div className="sidebar" onClick={()=>setPage('parkinsons')}>
          <span>
            <BiUser />
          </span>
          <span>Parkinsons Prediction</span>
        </div>
      </div>
    </aside>
  );
};
