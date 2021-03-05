const express = require("express");

const app = express();
const port = 5005;

app.get("/file.txt", async (req, res) => {
  await new Promise((r) => setTimeout(r, 5000));
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Back-end listening at http://localhost:${port}`);
});
