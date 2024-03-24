import React from "react";
import "./MainWindow.css";
//var CanvasJSReact = require('@canvasjs/react-charts');
import UserChart from "../../Layout/UserChart/UserChart";
import Chart from "react-google-charts";

function MainWindow() {
  const allUserData = {
    title: ["Users", "Dasturdan foydalanuvchilar"],
    servicers: ["Xizmat beruchi", 5],
    clients: ["Xizmat oluvchi", 11],
  };

  const activeUserData = {
    title: ["Users", "Dasturdan foydalanuvchilar"],
    servicers: ["Xizmat beruchi", 4],
    clients: ["Xizmat oluvchi", 50],
  };

  const allOrders = [
    ["Month", "Orders"],
    ["yanvar", 1000],
    ["fevral", 1170],
    ["mart", 660],
    ["aprel", 1030],
    ["may", 1030],
    ["iyun", 1030],
    ["iyul", 1030],
    ["avgust", 1030],
    ["sentabr", 1030],
    ["oktabr", 1030],
    ["noyabr", 1030],
    ["dekabr", 1030],
  ];

  const options = {
    title: "BUYURMALAR KO'RSATKICHLARI",
    titleTextStyle: {
      fontfamily: "Times New Roman Times serif",
      alignContent: "center",
      fontSize: 20,
    },
    hAxis: { title: "Month", titleTextStyle: { color: "#A0B294" } },
    vAxis: { minValue: 0 },
    legend: "none",
    chartArea: {
      width: "87%",
      height: "60%",
      backgroundColor: {
        stroke: "#4322c0",
        strokeWidth: 1,
      },
    },
  };
  return (
    <div className="dashboard_container">
      <div className="dashboard__overall-users">
        <h3>DASTURDAN FOYDALANUVCHILAR</h3>
        <UserChart
          title={allUserData.title}
          servicers={allUserData.servicers}
          clients={allUserData.clients}
        />
      </div>
      <div className="dashboard__current-users">
        <h3>AYNI VAQTDA FOYDALANUVCHILAR</h3>
        <UserChart
          title={activeUserData.title}
          servicers={activeUserData.servicers}
          clients={activeUserData.clients}
        />
      </div>
      <div className="dashboard__info">
        <div className="dashboard__active-service">
          <div>Amaldagi mavjud xizmatlar</div>
          <h1>500</h1>
          <h3>Dona</h3>
        </div>
        <div className="dashboard__black-list">
          <div>Qora Ro'yxatga tushgan foydalanuvchilar</div>
          <h1>500</h1>
          <h3>Dona</h3>
        </div>
        <div className="dashboard__server-memory">
          <h3 style={{ textAlign: "center" }}>Serverning xotirasi</h3>
          <progress
            value={75}
            max={100}
            style={{
              width: "95%",
              height: "30px",
              marginLeft: "10px",
            }}
          />
          <h6 style={{ marginLeft: "10px" }}>1000MB xotiradan 700MB qoldi.</h6>
        </div>
      </div>
      <div className="dashboard__order-rate">
        <Chart
          chartType="AreaChart"
          data={allOrders}
          options={options}
          height="100%"
          loader={<div>Loading Chart</div>}
        ></Chart>
      </div>
    </div>
  );
}

export default MainWindow;
