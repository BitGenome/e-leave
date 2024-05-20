import { Plus } from "lucide-react";

import { Button } from "../../components/ui/button";
import { DataTable } from "../../components/ui/data-table";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
// import { useFetchEmployees } from "../../hooks/data/Employee/use-fetch-employee";
import useDisclosure from "../../hooks/use-disclosure";

export default function Employees() {
  const { isOpen, toggle } = useDisclosure();

  return (
    <>
      <div className="border-b p-5 h-20 ">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-xl font-bold  first:mt-0">
            Employee list
          </h2>
          <Dialog open={isOpen} onOpenChange={toggle}>
            <DialogTrigger>
              <Button>
                <Plus className="mr-2" />
                New employee
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <div className="p-5 w-full"></div>
    </>
  );
}
