import React, { Component } from "react";
import "./style.css";

export default class LatestCommits extends Component {
  constructor(props) {
    super(props);

    this.getCommit = this.getCommit.bind(this);

    this.state = {
      repoUrl: "",
      commitMessageLines: "",
      repoName: "",
      createdAt: "",
    };
  }
  componentDidMount() {
    this.getCommit();
  }

  async getCommit() {
    const username = "2lach";
    const email = "stefanlachmann@hotmail.com";

    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`,
    );
    const json = await response.json();

    let latestCommit;
    const latestPushEvent = json.find(event => {
      if (event.type !== "PushEvent") {
        return false;
      }
      latestCommit = event.payload.commits
        .reverse()
        .find(commit => commit.author.email === email);
      return Boolean(latestCommit);
    });

    if (!latestCommit) {
      // eslint-disable-next-line no-console
      console.log("no commits");
      return;
    }

    const { repo, created_at: createdAt } = latestPushEvent;
    const repoUrl = `https://github.com/${repo.name}`;

    const repoAndCommitUrl = `${repoUrl}/commit/${latestCommit.sha}`;
    let commitMessageLines = latestCommit.message.trim().split("\n");
    const lastCommitTime = createdAt
      .split("T")
      .join("\n @ ")
      .trim()
      .split("Z")
      .join("");
    repo.name = repo.name.replace(new RegExp(`^${username}/`), "");
    this.setState({
      repoAndCommitUrl,
      repoUrl,
      commitMessageLines: commitMessageLines,
      repoName: repo.name,
      createdAt: lastCommitTime,
    });
  }
  render() {
    const {
      repoUrl,
      commitMessageLines,
      repoName,
      repoAndCommitUrl,
      createdAt,
    } = this.state;
    return (
      <div className="footer">
        <div
          clas="commitContainer"
          style={{ margin: "6px", textAlign: "center" }}
        >
          <h3 style={{ padding: "1em 0 0 0" }}>
            Most recent{" "}
            <a
              href={repoUrl}
              rel="noopeener"
              className="link"
              style={{ fontSize: "inherit" }}
            >
              {" "}
              commit{" "}
            </a>{" "}
            by{" "}
            <img
              title="2lach"
              alt="github avatar"
              src="https://avatars1.githubusercontent.com/u/11457600?s=40&v=4"
              className="commitImage"
            />{" "}
            was:{" "}
          </h3>
          <div>
            <span style={{ color: "#7f2a6c", lineHeight: "24px" }}>
              {commitMessageLines} In repo:{" "}
              <a href={repoAndCommitUrl} rel="noopeener" className="link">
                {repoName}
              </a>{" "}
              <br />
              <span style={{ color: "#000000" }}>{createdAt}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
