import { app } from "electron";
import path from "path";

const productionDbName = path.join(
  app.getPath("userData"),
  "database/eLeave.db"
);
const developmentDbName = "database/eLeave.db";

export const isProduction = app.isPackaged;

export const DATABASE_PATH = isProduction
  ? productionDbName
  : developmentDbName;
