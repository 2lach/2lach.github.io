import JokesAndQuotes, { pickQuote } from './JokesAndQuotes';

import React from 'react';
import { render } from '@testing-library/react';

// Mock the Math.random function
const mockMathRandom = value => {
  const mockRandom = jest.spyOn(global.Math, 'random').mockReturnValue(value);
  return () => mockRandom.mockRestore();
};

describe('JokesAndQuotes', () => {
  it('renders a random quote', () => {
    const randomQuote = 'Test quote';
    const mockMathRandomRestore = mockMathRandom(0.5); // Mock Math.random to always return 0.5
    const pickQuoteSpy = jest
      .spyOn(global, 'pickQuote')
      .mockReturnValue(randomQuote);

    const { getByText } = render(<JokesAndQuotes />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const quoteElement = getByText(randomQuote);

    expect(quoteElement).toBeInTheDocument();

    pickQuoteSpy.mockRestore();
    mockMathRandomRestore();
  });
});

describe('pickQuote', () => {
  it('returns a random quote', () => {
    const quote = pickQuote();
    expect(quote).toBeDefined();
    expect(typeof quote).toBe('string');
  });
});
