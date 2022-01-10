import { ReactElement, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useUsers from "./hooks/useUsers";
import useRepositories from "./hooks/useRepositories";
import Navbar from "./NavBar";
import { ResultsCount, ResultsWrapper } from "./App.components";
import RepoRow from "./RepoRow";
import UserRow from "./UserRow/UserRow";
import UserDetails from "../UserDetails";

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
    <>
      <Navbar setSearchPhrase={setSearchPhrase} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ResultsWrapper>
                <ResultsCount>
                  {totalCount.toLocaleString("en-US")} results
                </ResultsCount>
                {allData}
              </ResultsWrapper>
            }
          />
          <Route path=":userLogin" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
