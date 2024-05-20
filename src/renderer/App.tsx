import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ROUTES } from "./constants/routes";
import Main from "./screen";
import { Toaster } from "./components/ui/toaster";
import FileLeave from "./screen/FileLeave";
import Employees from "./screen/Employees";
import LeaveReports from "./screen/LeaveReports";
import LeaveCategory from "./screen/LeaveCategory";
import MainLayout from "./components/Layout/Main";

export default function App() {
  return (
    <div>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<Main />} />
              <Route path={ROUTES.FILE_LEAVE} element={<FileLeave />} />
              <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
              <Route path={ROUTES.LEAVE_REPORTS} element={<LeaveReports />} />
              <Route path={ROUTES.LEAVE_CATEGORY} element={<LeaveCategory />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </TooltipProvider>
    </div>
  );
}
