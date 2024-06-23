import IHairdresserInfo from "./IHairdresserInfo";
import IUserInfo from "./IUserInfo";

export default interface IMessageUser {
  isCheck: boolean;
  User: IUserInfo | IHairdresserInfo;
}
