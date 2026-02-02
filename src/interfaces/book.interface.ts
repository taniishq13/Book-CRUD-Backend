export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    publishedYear: number;
  }
  
  export interface BookCreateDTO {
    title: string;
    author: string;
    price: number;
    publishedYear: number;
  }
  