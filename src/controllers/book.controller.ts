import { Request, Response } from "express";
import BookService from "../services/book.service";
import type { BookCreateDTO } from "../interfaces/book.interface";

class BookController {
  private bookService = new BookService();

  createBook = (req: Request, res: Response) => {
    const data = req.body as BookCreateDTO;

    if (!data.title || !data.author || !data.price || !data.publishedYear) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = this.bookService.createBook(data);
    res.status(201).json(book);
  };

  getBooks = (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const sort = (req.query.sort as string) || "id";

    const books = this.bookService.getAllBooks(page, limit, sort);
    res.status(200).json(books);
  };

  getBookById = (req: Request, res: Response) => {
    const book = this.bookService.getBookById(Number(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  };

  updateBook = (req: Request, res: Response) => {
    const updatedBook = this.bookService.updateBook(
      Number(req.params.id),
      req.body
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    res.json(updatedBook);
  };

  deleteBook = (req: Request, res: Response) => {
    const book = this.bookService.deleteBook(Number(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted successfully" });
  };
}

export default BookController;
