import { FunctionComponent } from "react";

import { RowHeader, RowWrapper } from "../../shared/components";
import {
  LanguageDot,
  RepoDescription,
  RepoDetails,
  RepoIcon,
} from "./RepoRow.components";
import { getDaysFromNow } from "../../../helpers/date";
import { ReactComponent as Star } from "../../shared/icons/star.svg";
import { RepoData } from "../types";

interface Props {
  repoData: RepoData;
}

const RepoRow: FunctionComponent<Props> = ({ repoData }) => {
  const updateDate = new Date(repoData.updatedAt);
  const daysFromNow = getDaysFromNow(updateDate);

  const dateDescription =
    daysFromNow > 31
      ? `Updated on ${Intl.DateTimeFormat("en-UK", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(updateDate)}`
      : daysFromNow === 0
      ? "Updated today"
      : daysFromNow === 1
      ? `Updated ${daysFromNow} day ago`
      : `Updated ${daysFromNow} days ago`;

  return (
    <RowWrapper>
      <RepoIcon />
      <RowHeader>{repoData.name}</RowHeader>
      <RepoDescription>{repoData.description}</RepoDescription>
      <RepoDetails>
        {!!repoData.stargazerCount && (
          <>
            <Star />
            <span>{repoData.stargazerCount}</span>
          </>
        )}
        {repoData.primaryLanguage?.name && (
          <>
            <LanguageDot color={repoData.primaryLanguage?.color ?? "#000000"} />
            <span>{repoData.primaryLanguage?.name}</span>
          </>
        )}
        {repoData.licenseInfo?.name && (
          <span>{repoData.licenseInfo?.name}</span>
        )}
        {repoData.updatedAt && <span>{dateDescription}</span>}
        {!!repoData.issues?.totalCount && (
          <span>
            {repoData.issues?.totalCount}{" "}
            {repoData.issues?.totalCount === 1 ? "issue" : "issues"} need help
          </span>
        )}
      </RepoDetails>
    </RowWrapper>
  );
};

export default RepoRow;
