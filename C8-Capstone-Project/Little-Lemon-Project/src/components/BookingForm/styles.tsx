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
  margin-top: 12.8rem;

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

export const Form = styled.form<HTMLAttributes<HTMLFormElement>>`
  display: grid;
  width: 100%;
  max-width: 500px;
  gap: 20px;
  font-size: ${({ theme }) => theme.font.size.large};

  > input, select {
    font-size: ${({ theme }) => theme.font.size.medium};
    width: 100%;
    height: 8rem;
    border-radius: .5rem;
    outline: none;
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    background-color: #EDEFEE;
    border: none;
  };

  > input[type="submit"] {
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
  };

  > select option {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    background-color: #EDEFEE;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};

    :checked, :hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary} !important;
    };
  };
`;

export const FormMessageError = styled.span<HTMLAttributes<HTMLSpanElement>>`
  color: red;
  margin-top: -2rem;
`;