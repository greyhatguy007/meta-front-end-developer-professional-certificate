import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: auto;
  min-height: 70.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;

  @media (max-width: 1120px) {
    width: 90%;
  };
`;

export const Top = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  > button {
    width: 20rem;
  };

  @media (max-width: 840px) {
    flex-direction: column;

    h1 {
      text-align: center;
    };
  };
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  };
`;