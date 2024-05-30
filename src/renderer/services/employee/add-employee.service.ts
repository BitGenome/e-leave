/* eslint-disable import/prefer-default-export */

import { EMPLOYEE_CHANNELS } from "../../../main/channels/employees.channel";
import { Response } from "../../../main/types/response";
// eslint-disable-next-line import/no-cycle
import { TAddEmployee } from "../../components/Dialog/AddEmployee";

export async function addEmployeeService(
  values: TAddEmployee
): Promise<Response<string | unknown>> {
  return window.electron.ipcRenderer.invoke(
    EMPLOYEE_CHANNELS.EMPLOYEE_ADD,
    values
  );
}
