import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserLink = styled(Link)`
  text-decoration: none;
`;

export const UserImg = styled.img`
  position: absolute;
  top: 20px;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

export const UserBio = styled.p`
  color: ${({ theme }) => theme.colors.darkGray3};
  font-size: 14px;
  margin-top: 20px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const UserLocation = styled.p`
  color: ${({ theme }) => theme.colors.darkGray2};
  font-size: 12px;
  margin-top: 8px;
`;
