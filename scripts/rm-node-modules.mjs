import fs from "node:fs";
import path from "node:path";

const target = path.join(process.cwd(), "node_modules");

if (!fs.existsSync(target)) {
  process.exit(0);
}

const major = Number.parseInt(process.versions.node.split(".")[0], 10);
const opts = { recursive: true, force: true };
// Retries help Windows (ENOTEMPTY / EBUSY) when tools still touch node_modules.
if (major >= 18) {
  opts.maxRetries = 15;
  opts.retryDelay = 200;
}

fs.rmSync(target, opts);
