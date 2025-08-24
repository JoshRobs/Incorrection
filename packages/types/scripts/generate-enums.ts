import fs from "fs";
import path from "path";

// ESM-safe __dirname
const __dirname = path.resolve(); // Node sets __dirname automatically if module=CommonJS

const schemaPath = path.join(__dirname, "../../backend/prisma/schema.prisma");
const schema = fs.readFileSync(schemaPath, "utf-8");

// Extract all enums
const enumMatches = schema.matchAll(/enum (\w+)\s*{([^}]+)}/g);

let content = "// AUTO-GENERATED\n\n";

for (const match of enumMatches) {
  const name = match[1];
  const values = match[2].split(/\s+/).filter(Boolean);
  content += `export const ${name.toLocaleUpperCase()}_VALUES = ${JSON.stringify(
    values
  )} as const;\n`;
}

const outFile = path.join(__dirname, "enums.ts");
fs.writeFileSync(outFile, content);

console.log("✅ Enums generated at", outFile);
