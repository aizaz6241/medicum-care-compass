import fs from "node:fs";

const pngBuf = fs.readFileSync("public/logo.png");
const b64 = pngBuf.toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%">
  <image href="data:image/png;base64,${b64}" width="1024" height="1024" />
</svg>
`;

fs.writeFileSync("public/favicon.svg", svg, "utf-8");
fs.writeFileSync("public/favicon.ico", pngBuf);
console.log("Updated public/favicon.svg and public/favicon.ico successfully!");
