"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { EMPLOYEE_CHANNELS } from "../../../main/channels/employees.channel";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useToast } from "../ui/use-toast";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: string;
  employee_id: string;
  firstname: string;
  lastname: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "employee_id",
    header: "Employee Id",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {row.getValue("employee_id")}
      </div>
    ),
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Firstname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstname")}</div>
    ),
  },
  {
    accessorKey: "lastname",
    header: () => <div className="text-right">Lastname</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium capitalize">
          {row.getValue("lastname")}
        </div>
      );
    },
  },
  {
    accessorKey: "position",
    header: () => <div className="text-right">Position</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("position")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { toast } = useToast();
      async function handleDeleteEmployee() {
        const { id } = row.original;
        const response = await window.electron.ipcRenderer.invoke(
          EMPLOYEE_CHANNELS.EMPLOYEE_DELETE_BY_ID,
          { id }
        );
        if (response.code === 200)
          return toast({
            title: response.data,
          });

        return toast({
          title: "Error",
          variant: "destructive",
        });
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDeleteEmployee}
              className="text-red-500"
            >
              Delete employee
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
