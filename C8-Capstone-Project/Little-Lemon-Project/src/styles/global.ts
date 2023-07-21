import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-size: ${({ theme }) => theme.font.size.small};
    outline: none;
  };

  h1, h2, .card-title {
    font-family: ${({ theme }) => theme.font.family.primary};
  };

  h1 {
    font-size: ${({ theme }) => theme.font.size.huge};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  };

  h2 {
    font-size: ${({ theme }) => theme.font.size.xlarge};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  };

  h3 {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    text-transform: uppercase;
  };

  h4 {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
  };

  h1 {
    font-size: ${({ theme }) => theme.font.size.huge};
  };

  .lead-txt {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  };

  .highlight {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  };

  .card-title {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };

  a {
    text-decoration: none;
    color: inherit;
  };

  button, a, input[type="submit"] {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover, input[type="submit"]:hover {
    filter: brightness(.9);
  };
`;