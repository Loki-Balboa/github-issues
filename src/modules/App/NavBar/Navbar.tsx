import React, {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { GithubLogo, NavbarWrapper, SearchInput } from "./Navbar.components";

interface Props {
  setSearchPhrase: Dispatch<SetStateAction<string>>;
}

const REQUEST_DELAY = 500;

const Navbar: FunctionComponent<Props> = ({ setSearchPhrase }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(inputValue);
      setSearchPhrase(inputValue);
    }, REQUEST_DELAY);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, setSearchPhrase]);

  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <NavbarWrapper>
      <GithubLogo />
      <SearchInput
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
    </NavbarWrapper>
  );
};

export default Navbar;
