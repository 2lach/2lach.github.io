import React from "react";
import "./Writings.css";
import LatestCommits from "../LatestCommits/LatestCommits";

const articles = [
  {
    header: "How to parse something or other",
    date: "yyyy-mm-dd",
    description: "description",
    topic: "Javascript",
    id: "1"
  },
  {
    header: "Re-render ssr",
    date: "yyyy-mm-dd",
    description: "description",
    topic: "React",
    id: "12"
  },
  {
    header: "Make stuff go kabloom",
    date: "yyyy-mm-dd",
    description: "description",
    topic: "Unix",
    id: "123"
  },
  {
    header: "Dockerize your backpack",
    date: "yyyy-mm-dd",
    description: "description",
    topic: "Docker",
    id: "1234"
  }
];

const Writings = () => {
  return (
    <div className="container">
      <h2 className="writingsHeader">Writings:</h2>
      {articles.map(item => {
        <div key={item.id}>
          <div>
            <h3>{item.header}</h3>
            <span>{item.date}</span>
            <p>{item.description}</p>
            <p>{item.topic}</p>
          </div>

          <div id="latest-commit">
            <div class="commit-title"></div>
            <div class="commit-date"></div>
            <div class="crepo-title"></div>
          </div>
        </div>;
      })}
    </div>
  );
};
export default Writings;
