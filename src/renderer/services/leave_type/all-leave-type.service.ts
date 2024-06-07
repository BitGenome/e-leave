import { LEAVE_TYPE } from "../../../main/channels/leave-type.channels";
import { type LeavetypeAttributes } from "../../../main/models/leave_type";
import { Response } from "../../../main/types/response";

export async function fetchLeaveTypeService(): Promise<
  Response<LeavetypeAttributes[] | undefined>
> {
  return window.electron.ipcRenderer.invoke(LEAVE_TYPE.LEAVE_TYPE_GET_ALL);
}
