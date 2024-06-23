export default interface ILoginResponse {
  data?: {
    ErrorMessage: string[];
    IsSuccess: boolean;
    Result: {
      Token: string;
    };
  };
}
