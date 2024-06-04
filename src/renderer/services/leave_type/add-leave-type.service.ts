import { LEAVE_TYPE } from "../../../main/channels/leave-type.channels";
import { Response } from "../../../main/types/response";
import { LeaveType } from "../../components/Dialog/AddLeaveType";

// eslint-disable-next-line import/prefer-default-export
export async function addLeaveTypeService(
  values: LeaveType
): Promise<Response<string>> {
  return window.electron.ipcRenderer.invoke(LEAVE_TYPE.LEAVE_TYPE_ADD, values);
}
