import { Router } from "express";
import BookController from "../controllers/book.controller";

class BookRoutes {
  public router = Router();
  private controller = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/books", this.controller.createBook);
    this.router.get("/books", this.controller.getBooks);
    this.router.get("/books/:id", this.controller.getBookById);
    this.router.put("/books/:id", this.controller.updateBook);
    this.router.delete("/books/:id", this.controller.deleteBook);
  }
}

export default BookRoutes;
