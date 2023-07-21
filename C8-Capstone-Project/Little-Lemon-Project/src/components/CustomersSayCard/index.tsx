import { FC, HTMLAttributes } from "react";
import { Container, Rating, Customer, Testimonial } from "./styles";

interface CustomersSayCardProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  customerImg: string;
  customerName: string;
  testimonial: string;
};

const CustomersSayCard: FC<CustomersSayCardProps> = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...props
}): JSX.Element => {
  const stars: { [key: number]: string } = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };

  return (
    <Container {...props}>
      <Rating>
        {stars[rating]}
      </Rating>
      <Customer>
        <img src={customerImg} alt={customerName} />
        <span className="highlight">{customerName}</span>
      </Customer>
      <Testimonial className="highlight">
        {testimonial}
      </Testimonial>
    </Container>
  );
};

export default CustomersSayCard;