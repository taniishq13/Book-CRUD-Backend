import { books } from "../models/book.model";
import type { Book, BookCreateDTO } from "../interfaces/book.interface";

class BookService {
  createBook(data: BookCreateDTO): Book {
    const newBook: Book = {
      id: books.length + 1,
      ...data,
    };
    books.push(newBook);
    return newBook;
  }

  getAllBooks(page: number, limit: number, sort: string) {
    let result = [...books];

    if (sort) {
      result.sort((a: any, b: any) => (a[sort] > b[sort] ? 1 : -1));
    }

    const start = (page - 1) * limit;
    return result.slice(start, start + limit);
  }

  getBookById(id: number) {
    return books.find((book) => book.id === id);
  }

  updateBook(id: number, data: Partial<Book>) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return null;

    books[index] = { ...books[index], ...data };
    return books[index];
  }

  deleteBook(id: number) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return null;

    return books.splice(index, 1);
  }
}

export default BookService;
