import styled, { css } from "styled-components";

export const FavoritesTitle = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  padding: 20px 0;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};

      span {
        color: ${props.theme.primary};
      }
    `}
`;

export const FavoritesMain = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const FavoriteFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
