import { FunctionComponent } from "react";
import { useParams } from "react-router";

import useUserDetails from "./hooks/useUserDetails";
import {
  FullName,
  ProfileImg,
  SocialInfoWrapper,
  UserDetailsWrapper,
  UserLogin,
} from "./UserDetails.components";
import { ReactComponent as People } from "./icons/people.svg";

const UserDetails: FunctionComponent = () => {
  const { userLogin } = useParams<{ userLogin: string }>();
  const { data } = useUserDetails(userLogin);

  return (
    <UserDetailsWrapper>
      <ProfileImg src={data?.avatar_url} alt={`${userLogin}_avatar`} />
      <FullName>{data?.name}</FullName>
      <UserLogin>{data?.login}</UserLogin>
      <SocialInfoWrapper>
        <span>
          <People />
          {data?.followers} Followers
        </span>
        <span>{data?.following} Following</span>
      </SocialInfoWrapper>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
