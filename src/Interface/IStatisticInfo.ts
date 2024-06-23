import IMonthlyOrders from "./IMonthlyOrders";

export default interface IStatisticInfo {
  TotalUsers: number;
  AllClients: number;
  PercentageOfClients: number;
  AllHairdressers: number;
  PercentageOfHairdresser: number;

  CurrTotalUsers: number;
  CurrClients: number;
  CurrPercentageOfClients: number;
  CurrHairdressers: number;
  CurrPercentageOfHairdresser: number;
  MonthlyOrders: Array<IMonthlyOrders>;
  ActiveServices: number;
  BlockedUsers: number;
  ServerInfo: IServerInfo;
}

export interface IServerInfo {
  Memory: number;
  LeftMemory: number;
}
