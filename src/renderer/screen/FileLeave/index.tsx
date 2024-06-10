import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import CalendarLayout from "../../components/Calendar";
import { Button } from "../../components/ui/button";
import { ROUTES } from "../../constants/routes";

export default function FileLeave() {
  return (
    <div className="h-[calc(100vh-5rem)] w-[calc(100vw-5rem)]">
      <div className="border-b p-5 h-20 ">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-xl font-bold  first:mt-0">
            Employee leave
          </h2>
          <Link to={ROUTES.LEAVE_FORM}>
            <Button>
              <Plus className="mr-2" />
              File leave
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-full p-5">
        <CalendarLayout />
      </div>
    </div>
  );
}
