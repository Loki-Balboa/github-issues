import axios from "axios";
import { useQuery } from "react-query";

import { GITHUB_API_URL } from "../../../config/baseUrls";
import { GithubSearchResponse } from "./types";

export interface UserData {
  id: number;
  login: string;
  avatar_url: string;
}

const POPULAR_USER_FOLLOWERS_COUNT = 500;
const usersUrl = `${GITHUB_API_URL}/search/users`;

const getUsers = async (query: string) => {
  const { data } = await axios.get(`${usersUrl}?q=${query}`);
  return data;
};

const useUsers = (searchPhrase: string) => {
  const query =
    searchPhrase !== ""
      ? searchPhrase
      : `followers:>=${POPULAR_USER_FOLLOWERS_COUNT}`;

  return useQuery<GithubSearchResponse<UserData>>(
    ["users", searchPhrase],
    async () => getUsers(query)
  );
};

export default useUsers;
