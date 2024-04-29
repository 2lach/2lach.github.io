import './index.css';

import { useEffect, useState } from 'react';

interface GitHubPushEvent {
  repo: {
    name: string;
  };
  created_at: string;
  type: string;
  payload: {
    commits: Array<{
      sha: string;
      message: string;
      author: {
        email: string;
      };
    }>;
  };
}

interface CommitInfo {
  repoAndCommitUrl: string;
  commitMessageLines: string;
  repoName: string;
  createdAt: string;
}

const LatestCommits = () => {
  const [commitInfo, setCommitInfo] = useState<CommitInfo | undefined>();

  useEffect(() => {
    const getCommit = async () => {
      const username = '2lach';
      const email = 'stefanlachmann@hotmail.com';
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/events/public`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data from GitHub');
        }
        const events: GitHubPushEvent[] = await response.json();

        const pushEvent = events.find(event => event.type === 'PushEvent');
        const commit = pushEvent?.payload.commits.find(
          c => c.author.email === email
        );

        if (!pushEvent || !commit) {
          console.log('No relevant commits found.');
          return;
        }

        const repoUrl = `https://github.com/${pushEvent.repo.name}`;
        const repoAndCommitUrl = `${repoUrl}/commit/${commit.sha}`;
        const commitMessageLines = commit.message.trim().split('\n').join(', ');
        const createdAt = pushEvent.created_at.replace('T', ' @ ').slice(0, -1); // Adjust time format directly

        setCommitInfo({
          repoAndCommitUrl,
          commitMessageLines,
          repoName: pushEvent.repo.name,
          createdAt
        });
      } catch (error) {
        console.error('Error fetching latest commits:', error);
      }
    };

    getCommit();
  }, []);

  if (!commitInfo) {
    return <div>Loading latest commit data...</div>;
  }

  return (
    <div
      className='commitContainer'
      style={{ margin: '6px', textAlign: 'center' }}
    >
      <h3 style={{ padding: '1em 0 0 0' }}>
        Most recent commit by{' '}
        <img
          title='2lach'
          alt='github avatar'
          src='https://avatars1.githubusercontent.com/u/11457600?s=40&v=4'
          className='commitImage'
        />{' '}
        was:
      </h3>
      <div>
        <span
          className='quoteSpan'
          style={{ color: '#004d80', lineHeight: 'auto' }}
        >
          {commitInfo.commitMessageLines} In repo:{' '}
          <a
            href={commitInfo.repoAndCommitUrl}
            rel='noopener noreferrer'
            className='link quoteSpan'
          >
            {commitInfo.repoName}
          </a>
          <br />
          <span style={{ color: '#000000' }}>{commitInfo.createdAt}</span>
        </span>
      </div>
    </div>
  );
};

export default LatestCommits;
