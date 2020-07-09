import styled, { css } from "styled-components";

export const SearchMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  ${(props) =>
    props.theme &&
    css`
      && * {
        color: ${props.theme.primaryText};
      }
    `}
`;

export const SearchResultsFrame = styled.div`
  width: 50%;
`;
