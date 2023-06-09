import PegasusGenerate from "./src/emails/pegasus";
import GriffonGenerate from "./src/emails/griffon";
import DamaGenerate from "./src/emails/dama";

import { copyFileSync, copySync } from "fs-extra";
import {
  existsSync,
  rmdirSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join, resolve } from "path";
(async () => {
  const assets = resolve(__dirname, "assets");
  const dist = resolve(__dirname, "dist");

  // Create dist
  if (existsSync(dist)) {
    rmdirSync(dist, { recursive: true });
    mkdirSync(dist);
  } else {
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

  // // Copy assets
  // if (existsSync(assets)) {
  //   copySync(assets, dist);
  // }

  // Change asset link
  const files = readdirSync(dist);
  files.forEach(file => {
    const filePath = join(dist, file);
    if (existsSync(filePath) && file.includes(".")) {
      const data = readFileSync(filePath, "utf8");
      const result = data.replace(
        /\.\/images\//g,
        "https://pegasus.email.kstage.co.za/"
      );
      writeFileSync(filePath, result, "utf8");
    }
  });
})();
