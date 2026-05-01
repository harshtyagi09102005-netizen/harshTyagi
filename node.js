console.log("Starting server");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.get("/", (req, res) => {
  console.log("Rendering index");
  const courses = ["Node.js", "MongoDB", "React", "Express"];
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Courses</title>
</head>
<body>
<h2>Course List</h2>
<ul>
  ${courses.map(course => `<li>${course}</li>`).join('')}
</ul>
</body>
</html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});