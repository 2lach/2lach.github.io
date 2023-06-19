import { fireEvent, render, screen } from "@testing-library/react";

import Email from "./index.js";
import React from "react";

describe("Email component", () => {
  test("Check if the email opens correctly when the wrapper is clicked.", () => {
    // Mock the necessary global objects and methods
    delete window.location;
    window.location = { assign: jest.fn() };
   const assignMock = jest.spyOn(window.location, 'assign');
    render(<Email />);

    const wrapper = screen.getByTestId("email-wrapper");
    fireEvent.click(wrapper);

    expect(window.location.assign).toHaveBeenCalledTimes(1);
    expect(window.location.assign).toHaveBeenCalledWith(
      "mailto:stefanlachmann@hotmail.com?subject=Hey Stefan, My name is: "
    );

      assignMock.mockRestore();
  });

  test("Verify that the email opens correctly when the letter is clicked", () => {
    // Mock the necessary global objects and methods
    delete window.location;
    window.location = { assign: jest.fn() };

    render(<Email />);

    const letter = screen.getByTestId("email-letter");
    fireEvent.click(letter);

    expect(window.location.assign).toHaveBeenCalledTimes(2);
    expect(window.location.assign).toHaveBeenCalledWith(
      "mailto:stefanlachmann@hotmail.com?subject=Hey Stefan, My name is: "
    );
  });
});
