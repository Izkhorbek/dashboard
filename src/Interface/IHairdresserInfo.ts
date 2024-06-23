export default interface IHairdresserInfo {
  Id: number;
  Name: string;
  Surname: string;
  Phone: string;
  Address?: string; // Assuming this cannot be null in the database
  Location?: string;
  Language?: string;
  Notification?: string;
  WorkingHour?: string;
  UploadImage?: string;
  StoreImage?: string;
  Document?: string;
  Awards?: string;
  Profession: string;
  IsDeleted: boolean; // Changed to bool
  IsBlocked: boolean; // Changed to bool
}
