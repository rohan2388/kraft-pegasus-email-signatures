import express from "express";
import PegasusGenerate from "./src/emails/pegasus";
import GriffonGenerate from "./src/emails/griffon";
import DamaGenerate from "./src/emails/dama";

const app = express();
const port = 3000;

app.use(express.static("dist"));
app.use(express.static("assets"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/pegasus", async (_, res) => {
  const result = await PegasusGenerate();
  res.send(render(result));
});

app.get("/griffon", async (_, res) => {
  const result = await GriffonGenerate();
  res.send(render(result));
});

app.get("/dama", async (_, res) => {
  const result = await DamaGenerate();
  res.send(render(result));
});

app.listen(port, () => {
  console.clear();
  console.log(`Open in browser: http://localhost:${port}/`);
});

function render(result: string[]) {
  const html = result
    .map(item => `<div class="frame" style="margin: 10px 0;">${item}</div>`)
    .join("");

  return `
  <html>
    <head>
      <title>Signature</title>
    </head>
    <body style="background: #ddd;">
      <div style="margin: 50px auto; max-width: 600px;">
      ${html}
      </div>
    </body>
  </html>
`;
}

["SIGTERM"].forEach(event => {
  process.on(event, (reason, p) => {
    console.log("Shutting down server");
    process.exit();
  });
});
