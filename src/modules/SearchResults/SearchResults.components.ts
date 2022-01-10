import styled from "styled-components";

import { media } from "../../helpers/media";

export const ResultsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px 125px;

  @media (${media.phone}) {
    padding: 34px 16px;
  }
`;

export const ResultsCount = styled.h1`
  font-size: 21px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.black};
`;
