import { IBook } from "src/models/book";

export const reorderBooks = (books: IBook[], startIndex: number, endIndex: number) => {
  const result = Array.from(books);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
