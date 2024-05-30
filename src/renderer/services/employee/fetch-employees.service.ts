/* eslint-disable import/prefer-default-export */

import { EMPLOYEE_CHANNELS } from "../../../main/channels/employees.channel";
import { EmployeeAttributes } from "../../../main/models/employee";
import { Response } from "../../../main/types/response";

export async function fetchEmployeesService(): Promise<
  Response<EmployeeAttributes[] | undefined>
> {
  return window.electron.ipcRenderer.invoke(EMPLOYEE_CHANNELS.EMPLOYEE_GET_ALL);
}
