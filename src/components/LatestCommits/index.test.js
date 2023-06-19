import { render, screen, waitFor } from "@testing-library/react";

import LatestCommits from "./LatestCommits";
import React from "react";

// Mock the fetch function and its response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          type: "PushEvent",
          payload: {
            commits: [
              {
                author: {
                  email: "stefanlachmann@hotmail.com",
                },
                sha: "abc123",
                message: "Test commit",
              },
            ],
          },
          repo: {
            name: "2lach/test-repo",
          },
          created_at: "2022-06-01T10:00:00Z",
        },
      ]),
  })
);

describe("render LatestCommits and verify we get expected responses", () => {
  it("displays the most recent commit information", async () => {
    render(<LatestCommits />);

    await waitFor(() => {
      const commitMessageElement = screen.getByText("Test commit");

      expect(commitMessageElement).toBeInTheDocument();
    });
    await waitFor(() => {
      const repoNameElement = screen.getByText("test-repo");
      expect(repoNameElement).toBeInTheDocument();
    });
    await waitFor(() => {
      const createdAtElement = screen.getByText("2022-06-01\n @ 10:00:00");
      expect(createdAtElement).toBeInTheDocument();
    });
  });

  it("logs 'no commits' if there are no commits for the user", async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    });
    global.console.log = jest.fn();

    render(<LatestCommits />);

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith("no commits");
    });

    global.console.log.mockRestore();
  });
});
