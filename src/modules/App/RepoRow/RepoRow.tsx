import React, { FunctionComponent } from "react";

import { RepositoryData } from "../hooks/useRepositories";
import { RowWrapper } from "../shared/components";
import {
  LanguageDot,
  RepoDescription,
  RepoDetails,
  RepoIcon,
  RepoName,
} from "./RepoRow.components";
import { ReactComponent as Star } from "../shared/icons/star.svg";
import { getDaysFromNow } from "../../../helpers/date";
import { languageColors } from "../../../helpers/languageColors";

interface Props {
  repoData: RepositoryData;
}

const RepoRow: FunctionComponent<Props> = ({ repoData }) => {
  const updateDate = new Date(repoData.updated_at);
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
      <RepoName>{repoData.full_name}</RepoName>
      <RepoDescription>{repoData.description}</RepoDescription>
      <RepoDetails>
        {!!repoData.stargazers_count && (
          <>
            <Star />
            <span>{repoData.stargazers_count}</span>
          </>
        )}
        {repoData.language && (
          <>
            <LanguageDot
              color={
                languageColors[repoData.language as keyof typeof languageColors]
              }
            />
            <span>{repoData.language}</span>
          </>
        )}
        {repoData.license?.name && <span>{repoData.license.name}</span>}
        {repoData.updated_at && <span>{dateDescription}</span>}
        {!!repoData.open_issues_count && (
          <span>
            {repoData.open_issues_count}{" "}
            {repoData.open_issues_count === 1 ? "issue" : "issues"} need help
          </span>
        )}
      </RepoDetails>
    </RowWrapper>
  );
};

export default RepoRow;
