import React from "react";
import "./UserChart.css";
import { Chart } from "react-google-charts";
import IUserData from "../../../interfaces/interfaces";

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

const UserChart = (props: IUserData) => {
  const chartData = [props.title, props.servicers, props.clients];
  let servicers: number = props.servicers[1] as number;
  let clients: number = props.clients[1] as number;
  return (
    <div className="dashboard__users-chart">
      <div>
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          height="100%"
        />
      </div>
      <div className="dashboard__users-chart--info">
        <div className="chart--info--overall">
          <h6>Umumiy foydalanuvchilar</h6>
          <h3>{servicers + clients}</h3>
          <h5>Dona</h5>
        </div>
        <div className="chart--info--servicer">
          <h6>Xizmat beruvchilar</h6>
          <h3>{servicers} dona</h3>
          <h5>20 %</h5>
        </div>
        <div className="chart--info--client">
          <h6>Xizmat beruvchilar</h6>
          <h3>{clients} dona</h3>
          <h5>80 %</h5>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
