/* eslint-disable import/prefer-default-export */
import { ResponseErrorMessage } from "../types/response";

type TMessage = {
  message: ResponseErrorMessage;
  code: number;
};

export const RESPONSE: Record<ResponseErrorMessage, TMessage> = {
  success: {
    message: "success",
    code: 200,
  },
  client_error: {
    message: "client_error",
    code: 400,
  },
  server_error: {
    message: "server_error",
    code: 500,
  },
};
