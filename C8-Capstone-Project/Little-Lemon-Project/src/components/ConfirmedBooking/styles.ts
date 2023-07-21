import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: auto;
  min-height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  margin-top: 12.8rem;

  > button {
    max-width: 400px;
  };

  @media (max-width: 1120px) {
    width: 90%;
  };

  @media (max-width: 768px) {
    margin-top: 9rem;
  };
`;

export const Top = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-direction: column;

    h1 {
      text-align: center;
    };
  };
`;

export const Confirmation = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: grid;
  width: 100%;
  max-width: 400px;
  gap: 20px;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.border.radius};

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
  };

  span {
    text-transform: capitalize;
  };
`;