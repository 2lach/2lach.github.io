import React, { Component } from "react";
import { FaLink } from "react-icons/fa";

export default class LatestCommits extends Component {
  constructor(props) {
    super(props);

    this.getCommit = this.getCommit.bind(this);

    this.state = {
      repoUrl: "",
      commitMessageLines: "",
      repoName: "",
      createdAt: ""
    };
  }
  componentDidMount() {
    this.getCommit();
  }

  async getCommit() {
    const username = "2lach";
    const email = "stefanlachmann@hotmail.com";

    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`
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
      console.log("no commits");
      return;
    }

    const { repo, created_at: createdAt } = latestPushEvent;
    let repoUrl = `https://github.com/${repo.name}`;


    repoUrl = `${repoUrl}/commit/${latestCommit.sha}`;
    let commitMessageLines = latestCommit.message.trim().split("\n");
	const lastCommitTime = createdAt.split('T').join('\n @ ').trim().split('Z').join('');
	repo.name = repo.name.replace(new RegExp(`^${username}/`), "");
	// TODO calc difference between last commit and now
    /*
	const present_date = new Date(); 
	const Result = Math.round(createdAt - present_date) / (1000 * 60 * 60 * 24); 
	const Final_Result = Result.toFixed(0); 
	*/
    this.setState({
      repoUrl: repoUrl,
      commitMessageLines: commitMessageLines,
      repoName: repo.name,
      createdAt: lastCommitTime
    });
  }
  render() {
    const { repoUrl, commitMessageLines, repoName, createdAt } = this.state;
    return (
      <div style={{margin:'6px'}}>
        <div style={{textAlign:'center'}}>
			<div><img src='https://avatars1.githubusercontent.com/u/11457600?s=40&v=4' height="30" width="30" style={{borderRadius:'5px'}} /> </div>
		<h3>most recent commit was:</h3>
		  <span>{commitMessageLines}</span><br/>
		  <span>
            In: {repoName} <br/> {createdAt} <a href={repoUrl} rel="noopeener">
            <FaLink style={{width: '5vh', height: '4vh'}} />
          </a>
          </span><br/>

        </div>
      </div>
    );
  }
}
/*
Latest GitHub repos
(async () => {
	const textColorFromBackgroundColor = color => {
		if (color.length < 5) {
			color += color.slice(1);
		}

		return parseInt(color.replace('#', '0x'), 16) > (0xFFFFFF / 2) ? '#333' : '#fff';
	};

	const url = isDev ? 'http://localhost:3000' : 'https://gh-latest-repos.now.sh';

	const json = await (await fetch(url)).json();

	const template = ReactDOM.select('#latest-repos-template');
	const container = ReactDOM.select('#latest-repos');

	for (const repo of json.reverse()) {
		if (!repo.description) {
			continue;
		}

		const content = template.cloneNode(true).content;

		const a = content.querySelector('.latest-repos-title');
		a.href = repo.url;
		a.textContent = insertHypenationHintsForCamelCase(repo.name);

		if (repo.primaryLanguage) {
			const lang = content.querySelector('.latest-repos-language');
			lang.textContent = repo.primaryLanguage.name;
			lang.style.color = textColorFromBackgroundColor(repo.primaryLanguage.color);
			lang.style.backgroundColor = repo.primaryLanguage.color;
		}

		content.querySelector('.latest-repos-description').textContent = repo.description;

		container.appendChild(document.importNode(content, true));
	}
})(); 

}
*/
