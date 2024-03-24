import { Type } from "typescript";

export default interface IUserData {
  title: string[];
  servicers: (string | number)[];
  clients: (string | number)[];
}
