import log from "electron-log";
import { initDbService } from "./services/database/database.service";
import { EmployeeService } from "./services/employee/employee.service";

export default async function boot() {
  const dbservice = await initDbService();

  if (!dbservice) {
    log.error("Error initializing the database");
    throw new Error("Error initializing the db");
  }
  EmployeeService();
}
