import styled from "styled-components";

export const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
`;

export const ProfileImg = styled.img`
  height: 296px;
  width: 296px;
  border-radius: 50%;
`;

export const FullName = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray3};
  font-size: 26px;
  margin-top: 16px;
`;

export const UserLogin = styled.h2`
  color: ${({ theme }) => theme.colors.lightGray2};
  font-size: 20px;
`;

export const SocialInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGray2};
  font-size: 12px;
  margin-top: 13px;

  span {
    svg {
      margin-right: 4px;
    }
  }

  span:not(:last-child) {
    margin-right: 20px;
  }
`;
