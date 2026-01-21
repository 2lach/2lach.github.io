import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Avatar from "./Avatar.jsx";
import React from "react";

describe("Avatar Component", () => {
    it("renders the avatar image", () => {
        render(<Avatar />);
        const img = screen.getByAltText("2lach avatar");
        expect(img).toBeInTheDocument();
    });

    it("has the correct dimensions", () => {
        render(<Avatar />);
        const img = screen.getByAltText("2lach avatar");
        expect(img).toHaveAttribute("height", "250");
        expect(img).toHaveAttribute("width", "248");
    });

    it("renders within the container", () => {
        const { container } = render(<Avatar />);
        // AvatarContainer is a styled div
        expect(container.firstChild).toBeInTheDocument();
    });
});
