const express = require("express");
const app = express();
const port = 3000; // You can choose your own port

// Simulate certificate verification (replace with actual logic)
app.get("/verify", (req, res) => {
    const certificateCode = req.query.code;
    const isValid = certificateCode === " 1234"; // Replace with your validation logic
    res.json({ valid: isValid });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});