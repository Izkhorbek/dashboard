import React, { useEffect, useState } from "react";
import "./MainWindow.css";
import UserChart from "../../Layout/UserChart/UserChart";
import Chart from "react-google-charts";
import { useGetStatisticsInfoQuery } from "../../../Apis/mainStatisticsApi";
import IStatisticInfo from "../../../Interface/IStatisticInfo";
import MainLoader from "../../MainLoader/MainLoader";
import IMonthlyOrders from "../../../Interface/IMonthlyOrders";
import monthNames from "../../../utility/CommonDef";

function MainWindow() {
  const [statisticsInfo, SetStatisticsInfo] = useState<IStatisticInfo>();

  const { data, isLoading } = useGetStatisticsInfoQuery(null);
  const [allUserData, setAllUserData] = useState({
    title: ["Users", "Dasturdan foydalanuvchilar"],
    servicers: ["Hairdressers", 5],
    clients: ["Clients", 11],
  });

  const [activeUserData, setActiveUserData] = useState({
    title: ["Users", "Dasturdan foydalanuvchilar"],
    servicers: ["Hairdressers", 4],
    clients: ["Clients", 50],
  });

  const [monthlyOrders, setMonthlyOrders] = useState<string[][]>();

  useEffect(() => {
    if (data) {
      SetStatisticsInfo(data.apiResponse);
      const { AllHairdressers, AllClients } = data.apiResponse;

      const { CurrHairdressers, CurrClients, MonthlyOrders } = data.apiResponse;

      const monthlyOrdersArray: IMonthlyOrders[] = Object.values(MonthlyOrders);

      const newOrderArray = ([[]] as any[]).concat(
        monthlyOrdersArray.map((order) => [monthNames[order.Month], order.Rate])
      );
      newOrderArray[0] = ["Month", "Orders"];
      setMonthlyOrders(newOrderArray);

      // All Users
      setAllUserData({
        title: allUserData.title,
        servicers: ["Hairdressers", Number(AllHairdressers)],
        clients: ["Clients", Number(AllClients)],
      });

      // Active Users
      setActiveUserData({
        title: activeUserData.title,
        servicers: [activeUserData.servicers[0], CurrHairdressers],
        clients: [activeUserData.clients[0], CurrClients],
      });
    }
  }, [data]);

  const options = {
    title: "MONTHLY RATE OF USER ORDERS",
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
  const handleProgressBarVal = (Memory: number, LeftMemory: number): number => {
    if (Memory && LeftMemory) {
      return Memory - LeftMemory;
    } else {
      return 0;
    }
  };

  return (
    <div className="dashboard_container">
      <div className="dashboard__overall-users">
        <h3>ALL USERS</h3>
        <UserChart
          title={allUserData.title}
          servicers={allUserData.servicers}
          clients={allUserData.clients}
        />
      </div>
      <div className="dashboard__current-users">
        <h3>ALL ACTIVE USERS</h3>
        <UserChart
          title={activeUserData.title}
          servicers={activeUserData.servicers}
          clients={activeUserData.clients}
        />
      </div>
      <div className="dashboard__info">
        <div className="dashboard__active-service">
          <div>
            Current Active <br /> services
          </div>
          <h1>{statisticsInfo?.ActiveServices}</h1>
        </div>
        <div className="dashboard__black-list">
          <div>
            Current Blocked Users <br /> Amount
          </div>
          <h1>{statisticsInfo?.BlockedUsers}</h1>
        </div>
        <div className="dashboard__server-memory">
          <h3 style={{ textAlign: "center" }}>The memory of Server</h3>
          <progress
            value={
              statisticsInfo?.ServerInfo.Memory !== undefined &&
              statisticsInfo?.ServerInfo.LeftMemory !== undefined
                ? handleProgressBarVal(
                    statisticsInfo?.ServerInfo.Memory,
                    statisticsInfo?.ServerInfo.LeftMemory
                  )
                : 0
            }
            max={statisticsInfo?.ServerInfo.Memory}
            style={{
              width: "95%",
              height: "30px",
              marginLeft: "10px",
            }}
          />
          <h6 style={{ marginLeft: "10px" }}>
            {statisticsInfo?.ServerInfo.LeftMemory +
              " MB free of " +
              statisticsInfo?.ServerInfo.Memory +
              " MB"}
          </h6>
        </div>
      </div>
      <div className="dashboard__order-rate">
        <Chart
          chartType="AreaChart"
          data={monthlyOrders}
          options={options}
          height="100%"
          loader={<MainLoader />}
        ></Chart>
      </div>
    </div>
  );
}

export default MainWindow;
