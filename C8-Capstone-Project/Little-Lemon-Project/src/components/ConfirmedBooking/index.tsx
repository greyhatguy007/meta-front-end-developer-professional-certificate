import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Container, Top, Confirmation } from "./styles";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "../Button";

const ConfirmedBooking: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [booking, setBooking] = useState<{ date: string, time: string, guests: string, occasion: string }>();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    };
  }, []);

  return (
    <Container {...props}>
      <Top>
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
      </Top>
      {
        booking &&
        <Confirmation>
          <h2>Confirmation details</h2>
          <span><strong>Occasion:</strong> {booking.occasion}</span>
          <span><strong>Guests:</strong> {booking.guests}</span>
          <span><strong>Date:</strong> {booking.date}</span>
          <span><strong>Time:</strong> {booking.time}</span>
        </Confirmation>
      }

      <Button aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</Button>
    </Container>
  );
};

export default ConfirmedBooking;