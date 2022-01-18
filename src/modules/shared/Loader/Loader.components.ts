import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 72px - 60px);

  svg {
    width: 25%;
    height: 25%;
  }
`;
