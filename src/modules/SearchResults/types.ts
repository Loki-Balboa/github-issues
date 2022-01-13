export interface UserData {
  __typename: "User";
  databaseId?: number | null | undefined;
  login: string;
  name?: string | null | undefined;
  avatarUrl: any;
  bio?: string | null | undefined;
  location?: string | null | undefined;
}

export interface RepoData {
  __typename: "Repository";
  databaseId?: number | null | undefined;
  name: string;
  description?: string | null | undefined;
  stargazerCount: number;
  updatedAt: any;
  primaryLanguage?:
    | {
        __typename?: "Language";
        name: string;
        color?: string | null | undefined;
      }
    | null
    | undefined;
  issues: {
    __typename?: "IssueConnection";
    totalCount: number;
  };
  licenseInfo?:
    | {
        __typename?: "License";
        name: string;
      }
    | null
    | undefined;
}
