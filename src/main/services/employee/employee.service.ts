/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */

import { ipcMain as ipc } from "electron";
import { Response } from "../../types/response";

import Employee from "../../models/employee";
import { EMPLOYEE_CHANNELS } from "../../channels/employees.channel";
import { RESPONSE } from "../../utils/response-code";

type EmployeeProps = {
  id: string;
  employee_id: string;
  firstname: string;
  lastname: string;
  position: string;
  fullName: string;
};

async function AddEmployeeHandler(
  _event: unknown,
  props: EmployeeProps
): Promise<Response<unknown>> {
  const employeeResult = await Employee.create({
    firstname: props.firstname,
    lastname: props.lastname,
    employee_id: props.employee_id,
    position: props.position,
  });

  if (!employeeResult)
    return {
      code: RESPONSE.server_error.code,
      message: RESPONSE.server_error.message,
      data: "Something went wrong",
    };

  return {
    code: RESPONSE.success.code,
    message: RESPONSE.success.message,
    data: "Success",
  };
}

async function getAllEmployee(): Promise<Response<EmployeeProps[] | string>> {
  const employeeData = await Employee.findAll({ raw: true });

  if (!employeeData || employeeData.length === 0)
    return {
      code: RESPONSE.server_error.code,
      message: RESPONSE.server_error.message,
      data: "Employees not found",
    };

  const employee = employeeData.map((employee) => {
    return {
      ...employee,
      fullName: `${employee.firstname} ${employee.lastname}`,
    };
  });

  return {
    code: RESPONSE.success.code,
    message: RESPONSE.success.message,
    data: employee,
  };
}

async function deleteEmployee(
  _event: unknown,
  props: Pick<EmployeeProps, "id">
): Promise<Response<string>> {
  try {
    await Employee.destroy({
      where: {
        id: props.id,
      },
    });

    return {
      code: RESPONSE.success.code,
      message: RESPONSE.success.message,
      data: "Successfully deleted the employee",
    };
  } catch (error) {
    return {
      code: RESPONSE.server_error.code,
      message: RESPONSE.server_error.message,
      data: `Error: ${error}`,
    };
  }
}

function EmployeeService() {
  ipc.handle(EMPLOYEE_CHANNELS.EMPLOYEE_ADD, AddEmployeeHandler);
  ipc.handle(EMPLOYEE_CHANNELS.EMPLOYEE_GET_ALL, getAllEmployee);
  ipc.handle(EMPLOYEE_CHANNELS.EMPLOYEE_DELETE_BY_ID, deleteEmployee);
}

export { EmployeeService };
