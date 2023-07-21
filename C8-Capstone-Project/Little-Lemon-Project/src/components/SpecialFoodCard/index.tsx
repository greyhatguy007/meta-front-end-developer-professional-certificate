import { FC, HTMLAttributes } from "react";
import { Container, Image, Header, Body, CallToAction } from "./styles";
import deliveryIcon from "../../assets/deliveryIcon.svg";

interface SpecialFoodCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
};

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({ imageUrl, title, price, description, ...props }): JSX.Element => {

  return (
    <Container {...props}>
      <Image src={imageUrl}/>
      <Header>
        <span className="title card-title">{title}</span>
        <span className="price highlight">$ {price}</span>
      </Header>
      <Body>
        {description}
      </Body>
      <CallToAction>
        <button className="highlight">Order a delivery</button>
        <img src={deliveryIcon} alt="Delivery"/>
      </CallToAction>
    </Container>
  );
};

export default SpecialFoodCard;