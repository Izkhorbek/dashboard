import { IAppealType } from "./IAppealType";
import IHairdresserInfo from "./IHairdresserInfo";
import IUserInfo from "./IUserInfo";

export interface IAppeal {
  Id: number;
  UserId: number;
  User: IUserInfo;
  HairdresserId: number;
  Hairdresser: IHairdresserInfo;
  AppealId: number;
  DateTime: string;
  Appeal: IAppealType;
  AppealText: string;
  State: string;
}
