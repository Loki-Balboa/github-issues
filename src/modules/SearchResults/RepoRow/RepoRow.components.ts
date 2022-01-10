import styled from "styled-components";

import { ReactComponent as Repo } from "./icons/repo.svg";

export const RepoIcon = styled(Repo)`
  position: absolute;
  top: 20px;
  left: 0;
`;

export const RepoDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray2};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const RepoDetails = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGray2};
  margin-top: 12px;
  font-size: 12px;
  line-height: 16px;

  span {
    margin-right: 14px;
  }

  svg,
  div {
    margin-right: 3px;
  }
`;

export const LanguageDot = styled.div<{ color?: string }>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color ?? "#000000"};
`;
