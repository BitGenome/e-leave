export enum ResponseErrorCode {
  Success = 200,
  ClientError = 400,
  ServerError = 500,
}

export type ResponseErrorMessage = "success" | "client_error" | "server_error";
export type Response<T> = {
  code: ResponseErrorCode;
  message: ResponseErrorMessage;
  data?: T | undefined;
};
