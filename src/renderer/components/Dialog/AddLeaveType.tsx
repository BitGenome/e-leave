import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { addLeaveTypeService } from "../../services/leave_type/add-leave-type.service";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ResponseErrorCode } from "../../../main/types/response";
import { useToast } from "../ui/use-toast";

const categorySchema = z.object({
  category_name: z.string().min(1, {
    message: "Leave type must be at least 1 characters.",
  }),
  accrual_rate: z.number(),
});

export type LeaveType = z.infer<typeof categorySchema>;

export default function AddLeaveCategory({ toggle }: { toggle: () => void }) {
  const { toast } = useToast();

  const form = useForm<LeaveType>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      category_name: "",
      accrual_rate: 0,
    },
  });
  async function onSubmit(values: LeaveType) {
    const response = await addLeaveTypeService(values);
    if (response.code !== ResponseErrorCode.Success) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong.",
      });
    }

    /**
     * if success we close the modal
     */
    toggle();
    toast({
      title: "Success",
      description: "Successfully added leave type",
    });
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>New Leave Type</DialogTitle>
        <DialogDescription>
          Add here the employee leaves type.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="category_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leave Type</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accrual_rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accrual Rate (in days per year)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(event) => field.onChange(+event.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
