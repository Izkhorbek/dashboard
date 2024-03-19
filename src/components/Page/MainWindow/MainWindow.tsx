import React from "react";
import "./MainWindow.css";
//var CanvasJSReact = require('@canvasjs/react-charts');
import { Chart } from "react-google-charts";
export const data = [
  ["Users", "Dasturdan foydalanuvchilar"],
  ["Xizmat beruchi", 5],
  ["Xizmat oluvchi", 11],
];

export const options = {
  fontSize: 12,
  legend: {
    position: "bottom",
    textStyle: {
      color: "233238",
      fontSize: 12,
    },
  },
  chartArea: {
    left: 0,
    width: "100%",
    height: "70%",
  },
  colors: ["#F17623", "#4875CA"],
  containerId: "chart_div",
};
function MainWindow() {
  return (
    <div className="dashboard_container">
      <div className="dashboard__overall-users">
        <h3>DASTURDAN FOYDALANUVCHILAR</h3>
        <div className="dashboard__users-chart">
          <div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              height="100%"
            />
          </div>
          <div className="dashboard__users-chart--info">
            <div className="chart--info--overall">
              <h6>Umumiy foydalanuvchilar</h6>
              <h3>5000</h3>
              <h5>Dona</h5>
            </div>
            <div className="chart--info--servicer">
              <h6>Xizmat beruvchilar</h6>
              <h3>5000 dona</h3>
              <h5>20 %</h5>
            </div>
            <div className="chart--info--client">
              <h6>Xizmat beruvchilar</h6>
              <h3>5000 dona</h3>
              <h5>80 %</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__current-users">
        <h4>Ayni vaqtda foydalanuvchilar</h4>
      </div>
      <div className="dashboard__info">
        <div className="dashboard__active-service">
          <h4>Amaldagi mavjud xizmatlar</h4>
        </div>
        <div className="dashboard__black-list">
          <h4>Qora Ro'yxatga tushgan foydalanuvchilar</h4>
        </div>
        <div className="dashboard__server-memory">
          <h4>Serverning xotirasi</h4>
        </div>
      </div>
      <div className="dashboard__order-rate">
        <h4>Buyurtmalar ko'rsatkichi</h4>
      </div>
    </div>
  );
}

export default MainWindow;
