export interface GithubSearchResponse<T> {
  total_count: number;
  incomplete_response: boolean;
  items: T[];
}
