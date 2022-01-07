import styled from "styled-components";

import { media } from "../../../helpers/media";
import { ReactComponent as Logo } from "./icons/github-logo.svg";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 15px 0 20px;
  background-color: ${({ theme }) => theme.colors.darkGray3};

  @media ${media.phone} {
    height: 58px;
  }
`;

export const GithubLogo = styled(Logo)`
  height: 38px;
  width: 38px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchInput = styled.input`
  height: 37px;
  width: 242px;
  background: transparent;
  border-radius: 5px;
  padding: 6px 17px 7px 17px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray3};

  &:focus,
  &:active {
    outline: none;
  }
  color: ${({ theme }) => theme.colors.lightGray3};

  &::placeholder {
    opacity: 1;
  }
`;
