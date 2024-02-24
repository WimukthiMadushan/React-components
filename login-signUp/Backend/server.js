import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "#WM@b2000#",
  database: "Form",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/members", (req, res) => {
  const allMembers = "SELECT * FROM members";
  db.query(allMembers, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/signup", (req, res) => {
  const q = "INSERT INTO members (`Name`, `Email`, `Password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Member has been created successfully.");
  });
});
app.post("/login", (req, res) => {
  const q = "SELECT * FROM members WHERE Email = ? AND Password = ?";
  const v = [req.body.email, req.body.password];
  db.query(q, v, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (result.length > 0) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
