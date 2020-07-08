import styled from "styled-components";
import { device } from "../responsive";

export const SearchFrame = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 4rem 0;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: baseline;

  div {
    width: 20rem;

    margin-right: 10px;

    @media ${device.mobileL} {
      width: 16rem;
    }
  }
`;
