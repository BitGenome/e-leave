import { Button } from "../../../components/ui/button";

export default function FileLeaveForm() {
  return (
    <div className="w-full">
      <div className="w-full bg-slate-200 h-14 flex items-center justify-between px-5">
        <span className="font-bold">File Leave</span>
        <div className="flex justify-between gap-2">
          <Button>Save</Button>
          <Button variant="secondary">Close</Button>
        </div>
      </div>
    </div>
  );
}
