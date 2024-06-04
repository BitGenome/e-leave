import { ipcMain as ipc } from "electron";

import { type Response } from "../../types/response";
import { RESPONSE } from "../../utils/response-code";
import { LEAVE_TYPE } from "../../channels/leave-type.channels";
import Leavetype, { LeavetypeAttributes } from "../../models/leave_type";

type TLeavetype = {
  id?: string;
  category_name: string;
  accrual_rate?: number;
};

async function addLeaveCategoryHandler(
  _event: any,
  props: TLeavetype
): Promise<Response<string>> {
  const response = await Leavetype.create({
    name: props.category_name,
    accrual_rate: props.accrual_rate,
  });

  if (!response)
    return {
      code: RESPONSE.server_error.code,
      message: RESPONSE.server_error.message,
      data: "Error. Please try again",
    };
  return {
    code: RESPONSE.success.code,
    message: RESPONSE.success.message,
    data: "Success",
  };
}

async function getLeaveCategory(): Promise<
  Response<LeavetypeAttributes[] | string>
> {
  const response = await Leavetype.findAll({ raw: true });
  if (!response)
    return {
      code: RESPONSE.server_error.code,
      message: RESPONSE.server_error.message,
      data: "Error",
    };
  return {
    code: RESPONSE.success.code,
    message: RESPONSE.success.message,
    data: response,
  };
}
function LeaveCategoryService() {
  ipc.handle(LEAVE_TYPE.LEAVE_TYPE_ADD, addLeaveCategoryHandler);
  ipc.handle(LEAVE_TYPE.LEAVE_TYPE_GET_ALL, getLeaveCategory);
}

export default LeaveCategoryService;
