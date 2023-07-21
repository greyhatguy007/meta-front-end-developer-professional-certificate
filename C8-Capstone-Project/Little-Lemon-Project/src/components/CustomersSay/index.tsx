import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Leo"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Gabi"
          testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Bruno"
          testimonial="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Anna"
          testimonial="The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;