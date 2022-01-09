import axios from "axios";
import { useQuery } from "react-query";

import { GITHUB_API_URL } from "../../../config/baseUrls";
import { GithubSearchResponse } from "./types";

export interface UserData {
  id: number;
  login: string;
}

const usersUrl = `${GITHUB_API_URL}/search/users`;

const getUsers = async (searchPhrase: string) => {
  const { data } = await axios.get(`${usersUrl}?q=${searchPhrase}`);
  return data;
};

const useUsers = (searchPhrase: string) =>
  useQuery<GithubSearchResponse<UserData>>(
    ["users", searchPhrase],
    async () => getUsers(searchPhrase),
    {
      enabled: searchPhrase !== "",
    }
  );

export default useUsers;
