import { FunctionComponent } from "react";

import { RowDescription, RowHeader, RowWrapper } from "../../shared/components";
import { UserData } from "../types";
import { UserBio, UserImg, UserLink, UserLocation } from "./UserRow.components";

interface Props {
  userData: UserData;
}

const UserRow: FunctionComponent<Props> = ({ userData }) => {
  return (
    <RowWrapper>
      <UserLink to={userData.login}>
        <UserImg src={userData.avatarUrl} alt={`${userData.login}_avatar`} />
        <RowHeader>{userData.login}</RowHeader>
        <RowDescription>{userData.name}</RowDescription>
        <UserBio>{userData.bio}</UserBio>
        <UserLocation>{userData.location}</UserLocation>
      </UserLink>
    </RowWrapper>
  );
};

export default UserRow;
