import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		credentials: true,
	},
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
		credentials: true,
  })
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

httpServer.listen(9999, () => {
  console.log("Server is running on http://localhost:9999");
});
