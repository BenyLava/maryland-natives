import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(__dirname, "..", "public", "oak-leaf-logo.svg");
const outPath = path.join(__dirname, "..", "public", "favicon.ico");

async function main() {
  const sizes = [16, 32];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svgPath).resize(size, size).png().toBuffer()
    )
  );
  const ico = await pngToIco(pngBuffers);
  fs.writeFileSync(outPath, ico);
  console.log("Generated public/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
