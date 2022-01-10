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

const searchReposUrl = `${GITHUB_API_URL}/search/repositories`;

export const getRepos = async (searchPhrase: string) => {
  const { data } = await axios.get(`${searchReposUrl}?q=${searchPhrase}`);
  return data;
};

const useRepositories = (searchPhrase: string) =>
  useQuery<GithubSearchResponse<RepositoryData>>(
    ["repos", searchPhrase],
    async () => getRepos(searchPhrase),
    {
      enabled: searchPhrase !== "",
    }
  );

export default useRepositories;
