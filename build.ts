import PegasusGenerate from "./src/emails/pegasus";
import GriffonGenerate from "./src/emails/griffon";
import DamaGenerate from "./src/emails/dama";

import { copyFileSync, copySync } from "fs-extra";
import { existsSync, rmdirSync, mkdirSync, readdirSync } from "fs";
import { join, resolve } from "path";
(async () => {
  const assets = resolve(__dirname, "assets");
  const dist = resolve(__dirname, "dist");

  // Create dist
  if (existsSync(dist)) {
    rmdirSync(dist, { recursive: true });
    mkdirSync(dist);
  }

  // Generate emails
  await PegasusGenerate();
  await GriffonGenerate();
  await DamaGenerate();

  // Copy emails
  const emails = resolve(__dirname, "emails");
  if (existsSync(emails)) {
    const dirs = readdirSync(emails);
    dirs.forEach(dir => {
      const dirPath = join(emails, dir);
      if (existsSync(dirPath) && !dir.includes(".")) {
        const files = readdirSync(dirPath);
        files.forEach(file => {
          const filePath = join(dirPath, file);
          if (existsSync(filePath) && file.includes(".")) {
            copyFileSync(filePath, join(dist, `${dir}_${file}`));
          }
        });
      }
    });
  }

  // Copy assets
  if (existsSync(assets)) {
    copySync(assets, dist);
  }
})();
