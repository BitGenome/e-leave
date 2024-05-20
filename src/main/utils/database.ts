import { app } from "electron";
import path from "path";

const productionDbName = path.join(
  app.getPath("userData"),
  "database/eLeave_prod.db"
);
const developmentDbName = "database/eLeave_dev.db";

export const isProduction = app.isPackaged;

export const DATABASE_PATH = isProduction
  ? productionDbName
  : developmentDbName;
