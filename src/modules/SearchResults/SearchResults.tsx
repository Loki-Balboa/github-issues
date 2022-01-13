import { FunctionComponent, ReactElement } from "react";

import RepoRow from "./RepoRow";
import { ResultsCount, ResultsWrapper } from "./SearchResults.components";
import UserRow from "./UserRow";
import { useGetUsersAndReposQuery } from "../../generated/graphql";
import { RepoData, UserData } from "./types";

interface ResultElement {
  id: number;
  component: ReactElement;
  elementType: "user" | "repo";
}

interface Props {
  searchPhrase: string;
}

const SearchResults: FunctionComponent<Props> = ({ searchPhrase }) => {
  const usersQuery = searchPhrase !== "" ? searchPhrase : `followers:>=500`;

  const today = new Date();
  today.setDate(today.getDate() - 7);

  const reposQuery =
    searchPhrase !== ""
      ? searchPhrase
      : `stars:>=500 pushed:${today.toISOString().replace(/T.*/, "")}`;

  const { data } = useGetUsersAndReposQuery({
    variables: { usersQuery, reposQuery },
  });

  const users: ResultElement[] =
    data?.users?.edges
      ?.filter((edge) => edge?.node?.__typename === "User")
      .map((edge) => {
        const userData = edge?.node as UserData;
        return {
          id: userData.databaseId ?? 0,
          component: (
            <UserRow key={`user_${userData.databaseId}`} userData={userData} />
          ),
          elementType: "user",
        };
      }) ?? [];

  const repos: ResultElement[] =
    data?.repos?.edges
      ?.filter((edge) => edge?.node?.__typename === "Repository")
      .map((edge) => {
        const repoData = edge?.node as RepoData;
        return {
          id: repoData.databaseId ?? 0,
          component: (
            <RepoRow key={`repo_${repoData.databaseId}`} repoData={repoData} />
          ),
          elementType: "repo",
        };
      }) ?? [];

  const totalCount =
    (data?.repos?.repositoryCount ?? 0) + (data?.users?.userCount ?? 0);

  const showTotalCount = searchPhrase !== "";

  const allData = [...users, ...repos]
    .sort((a, b) => a.id - b.id)
    .map((i) => i.component);

  return (
    <ResultsWrapper>
      {showTotalCount && (
        <ResultsCount>
          {totalCount.toLocaleString("en-US")} results
        </ResultsCount>
      )}
      {allData}
    </ResultsWrapper>
  );
};

export default SearchResults;
