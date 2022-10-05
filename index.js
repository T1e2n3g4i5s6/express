const express = require("express");
const { append } = require("express/lib/response");

const app = express();
const port = 8008;

const users = [
  { id: 1, firstName: "Saraa", lastName: "Maraa" },
  { id: 2, firstName: "Bill", lastName: "Duluu" },
  { id: 3, firstName: "one", lastName: "Duluu" },
  { id: 4, firstName: "two", lastName: "Duluu" },
  { id: 5, firstName: "three", lastName: "Duluu" },
  { id: 7, firstName: "four", lastName: "Duluu" },
];

app.get("/", (req, res) => {
  res.send("Hello Leap2");
});

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, firstName: "Saraa", lastName: "Maraa" },
      { id: 2, firstName: "Bill", lastName: "Duluu" },
      { id: 3, firstName: "one", lastName: "Duluu" },
      { id: 4, firstName: "two", lastName: "Duluu" },
      { id: 5, firstName: "three", lastName: "Duluu" },
      { id: 7, firstName: "four", lastName: "Duluu" },
    ],
  });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id, "param");

  if (req.params.id == 1) {
    res.status(200).json({ id: 1, firstName: "Duluu", lastName: "Saraa" });
  } else {
    res.status(200).json({ id: 2, firstName: "Uka", lastName: "Bold" });
  }
});

app.delete("/users/:id", (request, response) => {
  console.log(request.params.id);
  const { id } = request.params;
  if (id > users.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exist` });
  } else {
    response
      .status(200)
      .json({});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});