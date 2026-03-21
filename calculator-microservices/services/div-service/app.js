const express = require("express");
const app = express();
const port = process.env.PORT || 3004;

app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "div-service" });
});

app.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid input. Provide numeric a and b." });
  }

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed." });
  }

  return res.json({
    service: "div-service",
    operation: "div",
    a,
    b,
    result: a / b
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`div-service running on port ${port}`);
});
