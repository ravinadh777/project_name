const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "add-service" });
});

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid input. Provide numeric a and b." });
  }

  return res.json({
    service: "add-service",
    operation: "add",
    a,
    b,
    result: a + b
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`add-service running on port ${port}`);
});
