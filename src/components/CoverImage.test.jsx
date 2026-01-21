import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CoverImage from "./CoverImage.jsx";
import React from "react";

describe("CoverImage Component", () => {
    beforeEach(() => {
        // Mock window.matchMedia
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: vi.fn().mockImplementation((query) => ({
                matches: query.includes("768px") || query.includes("1000px") ? true : false,
                media: query,
                onchange: null,
                addListener: vi.fn(), // Deprecated
                removeListener: vi.fn(), // Deprecated
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });

    it("renders the cover image container", () => {
        render(<CoverImage />);
        const container = screen.getByTestId("cover-image");
        expect(container).toBeInTheDocument();
    });

    it("renders landscape image when screen is wide", () => {
        // Mock matchMedia to return true for wide screen
        window.matchMedia = vi.fn().mockImplementation((query) => ({
            matches: true,
            addEventListener: vi.fn(),
        }));

        render(<CoverImage />);
        const img = screen.getByAltText("the main splash");
        expect(img).toBeInTheDocument();
        // Initially matches placeholder (landscapeX60) till onload
        expect(img.src).toContain("landscapeX60");
    });

    it("renders portrait image when screen is narrow", () => {
        // Mock matchMedia to return false for wide screen
        window.matchMedia = vi.fn().mockImplementation((query) => ({
            matches: false,
            addEventListener: vi.fn(),
        }));

        render(<CoverImage />);
        const img = screen.getByAltText("the small splash");
        expect(img).toBeInTheDocument();
        expect(img.src).toContain("portraitX60");
    });

    it("switches to high-res image after loading", () => {
        render(<CoverImage />);
        const img = screen.getByAltText("the main splash");

        // Simulate image load
        fireEvent.load(img);

        expect(img.src).toContain("landscape.jpg");
        // Should not contain X60 placeholder anymore
        expect(img.src).not.toContain("landscapeX60");
    });
});
