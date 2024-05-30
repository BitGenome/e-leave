import { app } from "electron";
import log from "electron-log";
import path from "path";
import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from "../services/database/database.service";
import fs from "fs";

const migrationsPath = app.isPackaged
  ? path.join(app.getPath("userData"), "migrations")
  : path.join(app.getAppPath(), "src", "main", "migrations");

log.info("app asar file", fs.readdirSync(app.getAppPath()));

const migrationpath = path.join(migrationsPath, "*.js");

log.debug("migration path", migrationpath);
log.info("mig path", migrationsPath);
export const umzug = new Umzug({
  migrations: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    glob: [migrationpath, { windowsPathsNoEscape: true }],
  },
  storage: new SequelizeStorage({ sequelize }),
  context: sequelize,
  logger: console,
});

export async function runMigrations() {
  try {
    //await umzug.down({migrations: ['20230601022154-create-barangay-offical.js']});
    await umzug.up({ migrations: ["20240518021533-create-employee-table.js"] });

    const pending = await umzug.pending();
    log.info("pending", pending);
    const executed = await umzug.executed();
    log.info("migrated", executed);
  } catch (e: unknown) {
    log.error("umzug error", e);
  }
}
