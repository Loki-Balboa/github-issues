import axios from "axios";
import { useQuery } from "react-query";

import { GITHUB_API_URL } from "../../../config/baseUrls";
import { GithubSearchResponse } from "./types";

export interface RepositoryData {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  license: {
    name: string;
  };
  stargazers_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
}

const POPULAR_REPO_STARS_COUNT = 500;
const searchReposUrl = `${GITHUB_API_URL}/search/repositories`;

export const getRepos = async (query: string) => {
  const { data } = await axios.get(`${searchReposUrl}?q=${query}`);
  return data;
};

const useRepositories = (searchPhrase: string) => {
  const today = new Date();
  today.setDate(today.getDate() - 7);

  const query =
    searchPhrase !== ""
      ? searchPhrase
      : `stars:>=${POPULAR_REPO_STARS_COUNT}+pushed:${today
          .toISOString()
          .replace(/T.*/, "")}`;

  return useQuery<GithubSearchResponse<RepositoryData>>(
    ["repos", searchPhrase],
    async () => getRepos(query)
  );
};

export default useRepositories;
