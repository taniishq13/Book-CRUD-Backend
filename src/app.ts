import express from "express";
import BookRoutes from "./routes/book.routes";

const app = express();
app.use(express.json());

const bookRoutes = new BookRoutes();
app.use("/", bookRoutes.router);

export default app;
