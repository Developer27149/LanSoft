export type LocalStorageToken = {
  token: string;
  deadlineDate: number;
};

export type SearchResultType = {
  id: number;
  name: string;
  author: string;
  downloadCount: number;
  likeCount: number;
  rankNumber: number;
  size: string;
}[];
