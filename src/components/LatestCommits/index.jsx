import "./style.css";

import React, { Component } from "react";

export default class LatestCommits extends Component {
  constructor(props) {
    super(props);

    this.getCommit = this.getCommit.bind(this);

    this.state = {
      repoUrl: "",
      commitMessageLines: "",
      repoName: "",
      createdAt: "",
      isVisible: true, // Controls visibility if fetch fails
      hasError: false,
    };
  }
  componentDidMount() {
    this.getCommit();
  }

  async getCommit() {
    try {
      const username = "2lach";
      const email = "stefanlachmann@hotmail.com";

      const response = await fetch(
        `https://api.github.com/users/${username}/events/public`
      );

      // Handle non-OK responses
      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }

      const json = await response.json();

      // Validate response is an array
      if (!Array.isArray(json)) {
        throw new Error("Invalid GitHub API response format");
      }

      let latestCommit;
      const latestPushEvent = json.find((event) => {
        if (event.type !== "PushEvent") {
          return false;
        }

        // Guard against missing payload or commits array
        const commits = Array.isArray(event.payload && event.payload.commits)
          ? event.payload.commits
          : null;

        if (!commits) return false;

        // Use a copy when reversing to avoid mutating upstream data
        latestCommit = [...commits]
          .reverse()
          .find(
            (commit) => commit && commit.author && commit.author.email === email
          );

        return Boolean(latestCommit);
      });

      if (!latestCommit) {
        // No commits found with matching email - hide component
        this.setState({ isVisible: false });
        return;
      }

      const { repo, created_at: createdAt } = latestPushEvent;
      const repoUrl = `https://github.com/${repo.name}`;
      const userNameRegExp = new RegExp(`^${username}/`);
      const repoAndCommitUrl = `${repoUrl}/commit/${latestCommit.sha}`;
      let commitMessageLines = latestCommit.message.trim().split("\n");
      const lastCommitTime = createdAt
        .split("T")
        .join("\n @ ")
        .trim()
        .split("Z")
        .join("");
      repo.name = repo.name.replace(userNameRegExp, "");
      this.setState({
        repoAndCommitUrl,
        repoUrl,
        commitMessageLines,
        repoName: repo.name,
        createdAt: lastCommitTime,
        isVisible: true,
      });
    } catch (error) {
      // Log error for debugging but hide component
      console.error("Failed to fetch latest commits:", error);
      this.setState({ isVisible: false, hasError: true });
    }
  }

  render() {
    const {
      // repoUrl,
      commitMessageLines,
      repoName,
      repoAndCommitUrl,
      createdAt,
      isVisible,
    } = this.state;

    // Hide component entirely if fetch failed or no commits found
    if (!isVisible) {
      return null;
    }

    // Only render if we have commit data
    if (!commitMessageLines) {
      return null;
    }

    return (
      <div className="footer">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <div className="commitContainer">
          <h3>Most recent commit</h3>
          <div className="commitContent">
            <img
              title="2lach"
              alt="github avatar"
              src="https://avatars1.githubusercontent.com/u/11457600?s=40&v=4"
              className="commitImage"
            />
            <div className="commitText">
              <p className="commitMessage">{commitMessageLines}</p>
              <p className="commitRepo">
                In repo:{" "}
                <a
                  href={repoAndCommitUrl}
                  rel="noopener noreferrer"
                  className="commitLink"
                >
                  {repoName}
                </a>
              </p>
              <p className="commitTime">{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
