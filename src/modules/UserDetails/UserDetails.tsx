import { FunctionComponent } from "react";
import { useParams } from "react-router";

import {
  FullName,
  ProfileImg,
  SocialInfoWrapper,
  UserDetailsWrapper,
  UserLogin,
} from "./UserDetails.components";
import { ReactComponent as People } from "./icons/people.svg";
import { useGetUserDetailsQuery } from "../../generated/graphql";
import { ReactComponent as Star } from "../shared/icons/star.svg";

const UserDetails: FunctionComponent = () => {
  const { userLogin } = useParams<{ userLogin: string }>();
  const { data } = useGetUserDetailsQuery({
    skip: !!userLogin && userLogin !== "",
    variables: { userLogin: userLogin! },
  });

  return (
    <UserDetailsWrapper>
      <ProfileImg src={data?.user?.avatarUrl} alt={`${userLogin}_avatar`} />
      <FullName>{data?.user?.name}</FullName>
      <UserLogin>{data?.user?.login}</UserLogin>
      <SocialInfoWrapper>
        <span>
          <People />
          {data?.user?.followers.totalCount} Followers
        </span>
        <span>{data?.user?.following.totalCount} Following</span>
        <span>
          <Star /> {data?.user?.starredRepositories.totalCount}
        </span>
      </SocialInfoWrapper>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
