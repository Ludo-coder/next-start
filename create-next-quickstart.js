#!/usr/bin/env node

import { execSync } from "child_process";
import { join } from "path";
import { existsSync } from "fs";

const repoUrl = "https://github.com/Ludo-coder/next-start.git";
const appName = process.argv[2];

if (!appName) {
  console.log("Erreur : Veuillez fournir un nom pour le projet.");
  process.exit(1);
}

const appPath = join(process.cwd(), appName);

if (existsSync(appPath)) {
  console.log(`Erreur : Le dossier ${appName} existe déjà.`);
  process.exit(1);
}

console.log(`Clonage du projet depuis ${repoUrl}...`);
execSync(`git clone ${repoUrl} ${appName}`, { stdio: "inherit" });

process.chdir(appPath);
