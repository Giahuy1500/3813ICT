const PORT = 3030;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const express = require("express"); // import express.js
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");
const dbName = "chat_app";
const server = require("./listen.js");
client.connect();
const db = client.db(dbName);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "../dist/3813-ict-assignment/"));
const sockets = require("./socket.js");

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});
//setup Socket
sockets.connect(io, PORT);

//setup routes
app.post("/login", require("./router/postLogin"));
app.post("/createUser", require("./router/postCreateUser"));
app.post("/createGroup", require("./router/postCreateGroup"));
app.post("/createChannel", require("./router/postCreateChannel"));
app.post("/deleteGroup", require("./router/postDeleteGroup"));
app.post("/deleteUser", require("./router/postDeleteUser"));
app.get("/users", require("./router/getUsers"));
app.get("/groups", require("./router/getGroups"));
app.post("/channels", require("./router/postChannels"));
app.get("/assignUser", require("./router/postAssignUser"));
app.post("/updateRole", require("./router/postUpdateRole.js"));
server.listen(http, PORT);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload/chat", upload.single("chatImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const filePath = path.join("uploads", req.file.filename);
  res.send({ filePath });
});
