#!/usr/bin/env node
import {load} from "js-yaml";
import {readFileSync, writeFileSync} from "fs";

const input = new URL("./.stylelintrc", import.meta.url);
const output = new URL("./index.json", import.meta.url);

writeFileSync(output, JSON.stringify(load(readFileSync(input, "utf8")), null, 2));
