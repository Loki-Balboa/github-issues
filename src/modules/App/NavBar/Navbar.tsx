import {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

import { GithubLogo, NavbarWrapper, SearchInput } from "./Navbar.components";

interface Props {
  setSearchPhrase: Dispatch<SetStateAction<string>>;
}

const REQUEST_DELAY = 500;

const Navbar: FunctionComponent<Props> = ({ setSearchPhrase }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchPhrase(inputValue);
    }, REQUEST_DELAY);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, setSearchPhrase]);

  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <NavbarWrapper>
      <Link to="/">
        <GithubLogo />
      </Link>
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
