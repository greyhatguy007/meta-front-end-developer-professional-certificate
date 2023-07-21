import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 26rem;
  height: 43.9rem;
  display: grid;
  grid-template-rows: 19.1rem repeat(3, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "header"
    "body"
    "callToAction";
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.highlight_light};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius} ${({ theme }) => theme.border.radius} 0 0;
  gap: 1.6rem;
`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.border.radius} ${({ theme }) => theme.border.radius} 0 0;
`;

export const Header = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem 0 1.6rem;

  .highlight {
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };
`;

export const Body = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  grid-area: body;
  height: 12rem;
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  text-overflow: ellipsis;
`;

export const CallToAction = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: callToAction;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.8rem;
  padding: 0 1.6rem 2rem 1.6rem;

  .highlight {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    border: none;
  };
`;