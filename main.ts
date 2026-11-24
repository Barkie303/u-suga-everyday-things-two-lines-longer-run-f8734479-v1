// Everyday Things, Two Lines, Longer Run — entry for make.fun
// u-suga-everyday-things-two-lines-longer-run-f8734479
// Writes two lines to /output/entry.txt: line 1 explains a traffic jam
// to a 10-year-old with one vivid analogy — a parking lot that lost its job;
// line 2 says honestly what the analogy maps and what it leaves out.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const LINE_1 =
  "A traffic jam is a parking lot that forgot it was supposed to be a road.";
const LINE_2 =
  "It maps cars sitting still in rows, but leaves out that the cars all want to move and nobody is actually parked.";

const entry = `${LINE_1}\n${LINE_2}\n`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, entry, "utf8");
