/* eslint-disable import/prefer-default-export */

import { EMPLOYEE_CHANNELS } from "../../../main/channels/employees.channel";
import { Response } from "../../../main/types/response";
import { type Employee } from "../../hooks/data/Employee/use-fetch-employee";

export async function fetchEmployeesService(): Promise<
  Response<Employee[] | undefined>
> {
  return window.electron.ipcRenderer.invoke(EMPLOYEE_CHANNELS.EMPLOYEE_GET_ALL);
}
