import { FunctionComponent } from "react";

import { UserData } from "../hooks/useUsers";
import { RowHeader, RowWrapper } from "../shared/components";
import { UserImg, UserLink } from "./UserRow.components";

interface Props {
  userData: UserData;
}

const UserRow: FunctionComponent<Props> = ({ userData }) => {
  return (
    <RowWrapper>
      <UserLink to={userData.login}>
        <UserImg src={userData.avatar_url} alt={`${userData.login}_avatar`} />
        <RowHeader>{userData.login}</RowHeader>
      </UserLink>
    </RowWrapper>
  );
};

export default UserRow;
