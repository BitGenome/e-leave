/* eslint-disable import/no-cycle */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { ResponseErrorCode } from "../../../main/types/response";

import { useResetForm } from "../../hooks/use-reset-form";
import { addEmployeeService } from "../../services/employee/add-employee.service";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  employee_id: z.string().min(1, {
    message: "Employee id must be at least 1 characters.",
  }),
  firstname: z.string().min(1, {
    message: "Firstname must be at least 1 characters.",
  }),
  lastname: z.string().min(1, {
    message: "Lastname must be at least 1 characters.",
  }),
  position: z.string().min(1, {
    message: "Employee position must be at least 1 characters.",
  }),
});

export type TAddEmployee = z.infer<typeof formSchema>;

type TAddEmployeeProps = {
  toggle: () => void;
};
export default function AddEmployee({ toggle }: TAddEmployeeProps) {
  const { toast } = useToast();
  const form = useForm<TAddEmployee>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      employee_id: "",
      position: "",
    },
  });

  async function onSubmit(values: TAddEmployee) {
    const response = await addEmployeeService(values);
    if (response.code !== ResponseErrorCode.Success) return;

    /**
     * if success we close the modal
     */
    toggle();
    toast({
      title: "Success",
      description: "successfully added an employee",
    });
  }
  useResetForm({
    isSubmitSuccessful: form.formState.isSubmitSuccessful,
    reset: form.reset,
  });
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Employee</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="employee_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Dela Cruz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="Manager" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogContent>
  );
}
