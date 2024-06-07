import { useCallback, useEffect, useState } from "react";

import { LeavetypeAttributes } from "../../../../main/models/leave_type";
import { fetchLeaveTypeService } from "../../../services/leave_type/all-leave-type.service";

export const usefetchLeaveType = () => {
  const [leaveType, setLeaveType] = useState<LeavetypeAttributes[] | undefined>(
    []
  );

  async function fetchLeaveType() {
    try {
      const result = await fetchLeaveTypeService();
      setLeaveType(result.data);
    } catch (error) {
      setLeaveType(undefined);
      throw new Error(error as any);
    }
  }
  const fetchData = useCallback(() => {
    fetchLeaveType();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { leaveType };
};
