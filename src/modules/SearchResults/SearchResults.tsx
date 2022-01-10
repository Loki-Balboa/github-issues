import { FunctionComponent, ReactElement } from "react";

import useRepositories from "./hooks/useRepositories";
import useUsers from "./hooks/useUsers";
import RepoRow from "./RepoRow";
import { ResultsCount, ResultsWrapper } from "./SearchResults.components";
import UserRow from "./UserRow";

interface ResultElement {
  id: number;
  component: ReactElement;
  elementType: "user" | "repo";
}

interface Props {
  searchPhrase: string;
}

const SearchResults: FunctionComponent<Props> = ({ searchPhrase }) => {
  const usersQuery = useUsers(searchPhrase);
  const reposQuery = useRepositories(searchPhrase);

  const users: ResultElement[] =
    usersQuery.data?.items.map((user) => ({
      id: user.id,
      component: <UserRow key={`user_${user.id}`} userData={user} />,
      elementType: "user",
    })) ?? [];

  const repos: ResultElement[] =
    reposQuery.data?.items.map((repo) => ({
      id: repo.id,
      component: <RepoRow key={`repo_${repo.id}`} repoData={repo} />,
      elementType: "repo",
    })) ?? [];

  const totalCount =
    (usersQuery.data?.total_count ?? 0) + (reposQuery.data?.total_count ?? 0);

  const allData = [...users, ...repos]
    .sort((a, b) => a.id - b.id)
    .map((i) => i.component);

  return (
    <ResultsWrapper>
      <ResultsCount>{totalCount.toLocaleString("en-US")} results</ResultsCount>
      {allData}
    </ResultsWrapper>
  );
};

export default SearchResults;
