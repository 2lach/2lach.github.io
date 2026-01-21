import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HelloWorld from "./index.jsx";
import React from "react";

describe("HelloWorld Component", () => {
    it("renders greetings text", () => {
        render(HelloWorld); // HelloWorld is a React element, not a component function
        expect(screen.getByText(/greetings pilgrim/i)).toBeInTheDocument();
    });

    it("renders welcome text", () => {
        render(HelloWorld);
        expect(screen.getByText(/welcome to my little corner/i)).toBeInTheDocument();
    });

    it("contains the correct heading hierarchy", () => {
        render(HelloWorld);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Greetings pilgrim");
        expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(2);
        expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    });
});
