import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CookieConsent } from "./CookieConsent.jsx";
import React from "react";

describe("CookieConsent Component", () => {
    beforeEach(() => {
        // Clear cookies before each test
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        vi.spyOn(console, "info").mockImplementation(() => { });
    });

    it("renders the consent message", () => {
        render(<CookieConsent />);
        expect(screen.getByText(/this site uses/i)).toBeInTheDocument();
        // expect(screen.getByText(/cookies/i)).toBeInTheDocument();
    });

    it("shows buttons for Accept and Reject", () => {
        render(<CookieConsent />);
        expect(screen.getByTitle("Accept")).toBeInTheDocument();
        expect(screen.getByTitle("Reject")).toBeInTheDocument();
    });

    it("hides the banner when Accept is clicked", () => {
        const { container } = render(<CookieConsent />);
        const acceptBtn = screen.getByTitle("Accept");

        fireEvent.click(acceptBtn);

        const footer = container.querySelector("footer");
        expect(footer).toHaveClass("hideConsent");
    });

    it("sets a cookie when Accept is clicked", () => {
        render(<CookieConsent />);
        const acceptBtn = screen.getByTitle("Accept");

        fireEvent.click(acceptBtn);

        expect(document.cookie).toContain("cookieConsentClicked=1");
    });

    it("hides the banner when Reject is clicked", () => {
        const { container } = render(<CookieConsent />);
        const rejectBtn = screen.getByTitle("Reject");

        fireEvent.click(rejectBtn);

        const footer = container.querySelector("footer");
        expect(footer).toHaveClass("hideConsent");
    });

    it("clears cookies when Reject is clicked", () => {
        document.cookie = "testCookie=value";
        render(<CookieConsent />);
        const rejectBtn = screen.getByTitle("Reject");

        fireEvent.click(rejectBtn);

        expect(document.cookie).not.toContain("testCookie=value");
        expect(console.info).toHaveBeenCalledWith("now all cookies should be gone");
    });
});
