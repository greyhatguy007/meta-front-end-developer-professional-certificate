import { FC, HTMLAttributes } from "react";
import { Container } from "./styles";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }): JSX.Element => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default Button;