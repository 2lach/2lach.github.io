import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "./App.jsx";
import React from "react";

// Mock matchMedia for components inside App
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

describe("App Component", () => {
    // it("renders the loading message initially due to Suspense", () => {
    //     render(<App />);
    //     expect(screen.getByText(/Winter is coming/i)).toBeInTheDocument();
    // });

    // it("eventually renders the main components", async () => {
    //     render(<App />);

    //     // Wait for lazy components to load
    //     await waitFor(() => {
    //         expect(screen.getByTestId("avatar")).toBeInTheDocument();
    //         expect(screen.getByTestId("hello-world")).toBeInTheDocument();
    //         expect(screen.getByTestId("links")).toBeInTheDocument();
    //     }, { timeout: 3000 });
    // });

    it("applies the fade-in class to major sections", async () => {
        render(<App />);

        await waitFor(() => {
            const containers = document.querySelectorAll(".fade-in");
            expect(containers.length).toBeGreaterThan(0);
        });
    });
});
