import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.button<HTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 5rem;
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 0 1.3rem;

  :active {
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.25);
  };
`;