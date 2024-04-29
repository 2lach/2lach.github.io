import HeroSection from '../HeaderImage';
import LatestCommits from '../LatestCommits';
import RandomJoke from '../RandomJoke';
import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin: 50px 10px;
  text-align: center;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RandomJokeContainer = styled.div`
  margin-top: 50px;
  font-style: italic;
  color: #555;
`;

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <HeroSection theme='dark' />
      <Section>
        <h2>Welcome to my little corner of the internet</h2>
        <p>
          I'm Stefan, and I enjoy building things! Besides that, I'm also a
          father and a maker of various things.
        </p>
        <p>
          <SocialLink
            href='https://github.com/2lach'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </SocialLink>
          <SocialLink
            href='https://linkedin.com/in/slachmann'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </SocialLink>
          <SocialLink
            href='https://codepen.io/2lach'
            target='_blank'
            rel='noopener noreferrer'
          >
            Codepen
          </SocialLink>
          <SocialLink
            href='https://books.2lach.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Books I've read
          </SocialLink>
          <SocialLink
            href='https://medium.com/@2lach'
            target='_blank'
            rel='noopener noreferrer'
          >
            Articles I've written
          </SocialLink>
        </p>
      </Section>
      <RandomJokeContainer>
        <RandomJoke />
      </RandomJokeContainer>
      <Section>
        <LatestCommits />
      </Section>
    </BodyContainer>
  );
};

export default Body;
