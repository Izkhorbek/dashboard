import React from "react";
import "./UserChart.css";
function UserChart() {
  return (
    <div className="chart">
      <div className="chart__title ">
        <div className="chart__container">
          <div className="chart__diagram"></div>
          <div className="chart__info">
            {/* Umumiy foydalanuvchilar */}
            <div className="overall-user">
              <h3>Umumiy foydalanuvchilar</h3>
              <h1>5000</h1>
              <h4>dona</h4>
            </div>
            {/* Xizmat ko'rsatuvchilar */}
            <div className="service-provider">
              <div className="service-provider__rect"></div>
              <div className="service-provider__info">
                <h3>Xizmat beruvchilar</h3>
                <h1>1000</h1> <span>dona</span>
                <h4>20%</h4>
              </div>
            </div>
            {/* Xizmat oluvchilar */}
            <div className="client">
              <div className="client__rect"></div>
              <div className="client__info">
                <h3>Xizmat oluvchilar</h3>
                <h1>4000</h1>
                <span>dona</span>
                <h4>80%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChart;
