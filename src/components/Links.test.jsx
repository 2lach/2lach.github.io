import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Links from "./Links.jsx";
import React from "react";

describe("Links Component", () => {
    beforeEach(() => {
        // Mock window.location.assign for the mailto link
        vi.stubGlobal("location", { assign: vi.fn() });
        vi.spyOn(console, "error").mockImplementation(() => { });
    });

    it("renders social links", () => {
        render(<Links />);
        expect(screen.getByText("Github")).toBeInTheDocument();
        expect(screen.getByText("Linkedin")).toBeInTheDocument();
        expect(screen.getByText("Books")).toBeInTheDocument();
    });

    it("has correct href for social links", () => {
        render(<Links />);
        const githubLink = screen.getByText("Github").closest("a");
        expect(githubLink).toHaveAttribute("href", "https://github.com/2lach");

        const linkedinLink = screen.getByText("Linkedin").closest("a");
        expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/slachmann/");
    });

    it("opens mail client when Contact is clicked", () => {
        render(<Links />);
        const contactItem = screen.getByText("Contact").closest("li");

        fireEvent.click(contactItem);

        expect(window.location.assign).toHaveBeenCalledWith(
            expect.stringContaining("mailto:stefanlachmann@hotmail.com")
        );
    });
});
