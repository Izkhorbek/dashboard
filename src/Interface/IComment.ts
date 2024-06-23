import IHairdresserInfo from "./IHairdresserInfo";
import IUserInfo from "./IUserInfo";

export interface IComment {
  Id: number;
  HairdresserId: number;
  UserId: number;
  Hairdresser: IHairdresserInfo;
  User: IUserInfo;
  DateTime: string;
  Comment: string;
}
