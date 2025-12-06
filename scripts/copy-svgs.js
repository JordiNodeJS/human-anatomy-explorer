/**
 * Script para copiar los archivos SVG del paquete anatomogram a public/svg
 * Se ejecuta antes del build de producción
 */

import { copyFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const svgFiles = ["homo_sapiens.male.svg", "homo_sapiens.brain.svg"];

const sourceDir = join(
  rootDir,
  "node_modules",
  "@ebi-gene-expression-group",
  "anatomogram",
  "lib",
  "svg"
);

const targetDir = join(rootDir, "public", "svg");

// Crear directorio destino si no existe
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
  console.log("✓ Creado directorio public/svg");
}

// Copiar cada archivo SVG
svgFiles.forEach((file) => {
  const source = join(sourceDir, file);
  const target = join(targetDir, file);

  if (existsSync(source)) {
    copyFileSync(source, target);
    console.log(`✓ Copiado ${file}`);
  } else {
    console.error(`✗ No encontrado: ${source}`);
    process.exit(1);
  }
});

console.log("\n✓ SVGs copiados exitosamente a public/svg");
