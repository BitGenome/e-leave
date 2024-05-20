import {
  CalendarCheck,
  FileText,
  LayoutGrid,
  LayoutList,
  User,
} from "lucide-react";
import { HtmlHTMLAttributes, ReactElement, ReactNode } from "react";

import { ROUTES } from "../../constants/routes";
import { cn } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type LeftIconProps = {
  link: string;
  name: string;
  icon: (isActive?: boolean) => ReactElement;
};

type IconButtonProps = HtmlHTMLAttributes<HTMLSpanElement> & {
  isActive: boolean;
  toolTipContent: string;
  icon: ReactNode;
};

function IconButton({
  className,
  isActive,
  icon,
  toolTipContent,
  ...props
}: IconButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          {...props}
          className={cn(
            `cursor-pointer ${
              isActive ? "bg-primary" : "bg-muted-foreground"
            } rounded-full h-8 w-8 flex items-center justify-center hover:bg-primary`,
            className
          )}
        >
          {icon}
        </span>
      </TooltipTrigger>
      <TooltipContent side="right" align="center" sideOffset={10}>
        <p>{toolTipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// eslint-disable-next-line import/prefer-default-export
export const LeftMenuIcons: LeftIconProps[] = [
  {
    link: ROUTES.DASHBOARD,
    name: "Dashboard",
    icon: (isActive = false) => (
      <IconButton
        icon={<LayoutGrid className="text-white h-4 w-4" />}
        isActive={isActive}
        toolTipContent="Dashboard"
      />
    ),
  },
  {
    link: ROUTES.FILE_LEAVE,
    name: "File Leave",
    icon: (isActive = false) => (
      <IconButton
        icon={<CalendarCheck className="text-white h-4 w-4" />}
        isActive={isActive}
        toolTipContent="File a leave"
      />
    ),
  },
  {
    link: ROUTES.EMPLOYEES,
    name: "Employees",
    icon: (isActive = false) => (
      <IconButton
        icon={<User className="text-white h-4 w-4" />}
        isActive={isActive}
        toolTipContent="Employees"
      />
    ),
  },
  {
    link: ROUTES.LEAVE_REPORTS,
    name: "Reports",
    icon: (isActive = false) => (
      <IconButton
        icon={<FileText className="text-white h-4 w-4" />}
        isActive={isActive}
        toolTipContent="Leave Reports"
      />
    ),
  },
  {
    link: ROUTES.LEAVE_CATEGORY,
    name: "Leave Category",
    icon: (isActive = false) => (
      <IconButton
        icon={<LayoutList className="text-white h-4 w-4" />}
        isActive={isActive}
        toolTipContent="Leave Category"
      />
    ),
  },
];
