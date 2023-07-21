import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import ConfirmedBooking from "../../components/ConfirmedBooking";
import Footer from "../../components/Footer";

const ConfirmationPage: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ConfirmedBooking  />
      <Footer />
    </Container>
  );
};

export default ConfirmationPage;