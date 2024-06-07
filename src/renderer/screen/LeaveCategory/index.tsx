import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";

import AddLeaveCategory from "../../components/Dialog/AddLeaveType";
import { usefetchLeaveType } from "../../hooks/data/LeaveType/use-fetch-leave-type";
import { DataTable } from "../../components/ui/data-table";
import { leaveTypeColumns } from "../../components/DataTableColumns/LeaveTypeColumns";

export default function LeaveCategory() {
  const { leaveType } = usefetchLeaveType();
  return (
    <div className="w-full">
      <div className="border-b p-5 h-20 ">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-xl font-bold  first:mt-0">
            Leave Category
          </h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2" />
                New leave type
              </Button>
            </DialogTrigger>
            <AddLeaveCategory />
          </Dialog>
        </div>
      </div>
      <div className="p-5 w-full">
        {leaveType && <DataTable columns={leaveTypeColumns} data={leaveType} />}
      </div>
    </div>
  );
}
