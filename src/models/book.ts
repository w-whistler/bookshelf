export interface IBookSearchParams {
  q?: string;
  title?: string;
  author?: string;
  page?: number;
  limit?: number;
}

export interface IBook {
  title: string;
  authorName: string[];
  firstPublishYear: number;
  numberOfPagesMedian: number;
  subject: string[];
  publishPlace: string[];
}

export interface IBookState {
  loading: boolean;
  numFound: number;
  start: number;
  books: IBook[];
}
