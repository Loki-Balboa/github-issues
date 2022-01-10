import styled from "styled-components";

export const RowWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 28px;
  margin-bottom: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;
