import React, {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
} from "react";

import { GithubLogo, NavbarWrapper, SearchInput } from "./Navbar.components";

interface Props {
  searchPhrase: string;
  setSearchPhrase: Dispatch<SetStateAction<string>>;
}

const Navbar: FunctionComponent<Props> = ({
  searchPhrase,
  setSearchPhrase,
}) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setSearchPhrase(e.currentTarget.value);

  return (
    <NavbarWrapper>
      <GithubLogo />
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchPhrase}
        onChange={handleChange}
      />
    </NavbarWrapper>
  );
};

export default Navbar;
