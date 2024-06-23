import React from "react";
import "./UserChart.css";
import { Chart } from "react-google-charts";
import IUserData from "../../../Interface/IUserData";
import CalcPersentage from "../../../utility/CalcPersentage";

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
          <h4>Total Users </h4>
          <h3>{servicers + clients}</h3>
        </div>
        <div className="chart--info--servicer">
          <h5>Hairdressers</h5>
          <h3>{servicers}</h3>
          <h5>{CalcPersentage(servicers + clients, servicers).toFixed(2)} %</h5>
        </div>
        <div className="chart--info--client">
          <h5>Clients</h5>
          <h3>{clients}</h3>
          <h5>{CalcPersentage(servicers + clients, clients).toFixed(2)} %</h5>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
