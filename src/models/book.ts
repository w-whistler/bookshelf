export interface IBookSearchParams {
  q: string;
  startIndex?: number;  // Default 0
  maxResults?: number;  // Default 10
}

export interface IBook {
  id: string;
  title: string;
  subtitle?: string;
  publishedDate: string;
  previewLink: string;
  pageCount: number;
  thumbnail: string;
  publisher: string;
  authors?: string[];
}

export interface IBookState {
  loading: boolean;
  totalItems: number;
  books: IBook[];
}
