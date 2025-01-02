import JokesAndQuotes, { pickQuote } from "./index.js";
import { render, screen } from "@testing-library/react";

import React from "react";

// Mock the Math.random function
const mockMathRandom = (value) => {
  const mockRandom = jest.spyOn(global.Math, "random").mockReturnValue(value);
  return () => mockRandom.mockRestore();
};

describe("JokesAndQuotes", () => {
  it("renders a random quote", () => {
    const randomQuote = "Test quote";
    const mockMathRandomRestore = mockMathRandom(0.5); // Mock Math.random to always return 0.5
    jest.spyOn(global, "pickQuote").mockReturnValue(randomQuote); // Mock the pickQuote function

    const { getByText } = render(<JokesAndQuotes />);
    const quoteElement = screen.getByText(randomQuote);

    expect(quoteElement).toBeInTheDocument();

    jest.restoreAllMocks(); // Restore all mocked functions
    mockMathRandomRestore();
  });
});

describe("pickQuote", () => {
  it("returns a random quote", () => {
    const quote = pickQuote();
    expect(quote).toBeDefined();
    expect(typeof quote).toBe("string");
  });
});
