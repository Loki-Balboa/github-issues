import React, { ReactElement, useState } from "react";

import useUsers from "./hooks/useUsers";
import useRepositories from "./hooks/useRepositories";
import Navbar from "./NavBar";
import { ResultsCount, ResultsWrapper } from "./App.components";
import RepoRow from "./RepoRow";

interface ResultElement {
  id: number;
  component: ReactElement;
  elementType: "user" | "repo";
}

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const usersQuery = useUsers(searchPhrase);
  const reposQuery = useRepositories(searchPhrase);

  const users: ResultElement[] =
    usersQuery.data?.items.map((user) => ({
      id: user.id,
      component: (
        <div key={`user_${user.id}`}>
          {user.id}, {user.login}
        </div>
      ),
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
    <>
      <Navbar setSearchPhrase={setSearchPhrase} />
      <ResultsWrapper>
        <ResultsCount>
          {totalCount.toLocaleString("en-US")} results
        </ResultsCount>
        {allData}
      </ResultsWrapper>
    </>
  );
};

export default App;
