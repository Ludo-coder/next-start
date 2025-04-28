#!/usr/bin/env node

import { join } from "path";
import { existsSync, removeSync } from "fs-extra";
import { createInterface } from "readline";
import { execSync } from "child_process";

// Ask for the name of the application
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your application name: ", (appName) => {
  const targetDir = join(process.cwd(), appName);

  // Check if the target directory already exists
  if (existsSync(targetDir)) {
    console.log("Directory already exists:", targetDir);
    rl.close();
    return;
  }

  // Clone the repository
  const repoUrl = "https://github.com/Ludo-coder/next-start";
  const cloneCommand = `git clone --depth 1 ${repoUrl} ${targetDir}`;

  try {
    // Clone the repository
    console.log("Project cloning...");
    execSync(cloneCommand, { stdio: "inherit" });

    // Remove node_modules
    const nodeModulesPath = join(targetDir, "node_modules");
    if (existsSync(nodeModulesPath)) {
      removeSync(nodeModulesPath);
      console.log("node_modules removed");
    }

    console.log(`Project ${appName} successfully cloned to ${targetDir}!`);
    rl.close();
  } catch (error) {
    console.error("Error cloning the repository:", error);
    rl.close();
  }
});
