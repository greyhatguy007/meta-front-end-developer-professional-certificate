// import { screen } from "@testing-library/react";
import { render, screen } from "../../utils/tests-ts";
import BookingForm from ".";
// import userEvent from "@testing-library/user-event";
import { submitAPI, fetchAPI, initializeTimes, updateTimes  } from "../../utils/temp";

describe("BookingForm", () => {
  test("Renders labels and fields", () => {
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );
    // Date label and field
    const choseDateLabel = screen.getByText("Choose date");
    expect(choseDateLabel).toBeInTheDocument();
    const choseDateField = screen.getByTestId("res-date");
    expect(choseDateField).toBeInTheDocument();

    const choseTimeLabel = screen.getByText("Choose time");
    expect(choseTimeLabel).toBeInTheDocument();
    const choseTimeField = screen.getByTestId("res-time");
    expect(choseTimeField).toBeInTheDocument();

    const numberGuestLabel = screen.getByText("Number of guests");
    expect(numberGuestLabel).toBeInTheDocument();
    const numberGuestField = screen.getByTestId("guests");
    expect(numberGuestField).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
    const occasionField = screen.getByTestId("occasion");
    expect(occasionField).toBeInTheDocument();

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
  });

  // test("Validation fields", async () => {
  //   render(
  //     <BookingForm
  //       availableTimes={{
  //         times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  //       }}
  //       dispatch={jest.fn((action) => action)}
  //     />
  //   );
  //   const user = userEvent.setup()
  //   const numberGuestField = screen.getByTestId("guests");
  //   const submitButton = screen.getByDisplayValue("Make Your reservation");

  //   await user.type(numberGuestField, "0");

  //   await user.click(submitButton);
  //   const numberGuestFieldError = screen.getByTestId("guests-error");

  //   expect(numberGuestFieldError).toHaveTextContent("Must be at least 1");
  // });

  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test("updateTimes returns the same state", () => {
    const state = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  test("submitAPI returns true", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });

});