export interface Word {
  word: string;
  url: any;
}

export interface WordQuery {
  pron: string | undefined;
  query: string;
  result: Word[];
}
