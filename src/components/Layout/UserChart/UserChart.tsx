import React from "react";
import "./UserChart.css";
function UserChart() {
  return (
    <div>
      <div className="grid-item chart"></div>
      <div className="grid-item description ">
        {/* Umumiy foydalanuvchilar */}
        <div className="overall-user">
          <h3>Umumiy foydalanuvchilar</h3>
          <h1>5000</h1>
          <h4>dona</h4>
        </div>
        {/* Xizmat ko'rsatuvchilar */}
        <div className="service-provider">
          <h3>Xizmat beruvchilar</h3>
          <h1>1000</h1> <span>dona</span>
          <h4>20%</h4>
        </div>
        {/* Xizmat oluvchilar */}
        <div className="client">
          <h3>Xizmat oluvchilar</h3>
          <h1>4000</h1>
          <span>dona</span>
          <h4>80%</h4>
        </div>
      </div>
    </div>
  );
}

export default UserChart;
