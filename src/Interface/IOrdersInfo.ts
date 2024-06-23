import HairdresserInfo from "./IHairdresserInfo";
import IService from "./IService";
import IUserInfo from "./IUserInfo";

export interface IOrdersInfo {
  Id: number;
  DateTime: string;
  Hairdresser: HairdresserInfo;
  Service: IService;
  User: IUserInfo;
}
