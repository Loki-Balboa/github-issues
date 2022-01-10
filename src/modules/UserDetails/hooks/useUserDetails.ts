import axios from "axios";
import { useQuery } from "react-query";

import { GITHUB_API_URL } from "../../../config/baseUrls";

export interface UserDetailsData {
  id: number;
  login: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
}

const usersUrl = `${GITHUB_API_URL}/users`;

const getUserDetails = async (name?: string) => {
  const { data } = await axios.get(`${usersUrl}/${name}`);
  return data;
};

const useUserDetails = (name?: string) =>
  useQuery<UserDetailsData>(
    ["userDetails", name],
    async () => getUserDetails(name),
    {
      enabled: !!name,
    }
  );

export default useUserDetails;
