export interface Word {
  word: string;
  url: any;
}

export interface WordQuery {
  query: string;
  result: Word[];
}
