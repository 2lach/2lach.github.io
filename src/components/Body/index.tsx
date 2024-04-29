import HeroSection from '../HeaderImage';
import LatestCommits from '../LatestCommits';
import RandomJoke from '../RandomJoke';
import React from 'react';
import styled from 'styled-components';

interface Body {
  children?: React.ReactNode;
  theme?: string;
}

const BodyContainer = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
  margin: 200px 10px;
  @media (max-width: 768px) {
    background-color: #f0f4f88f;
  }
`;

const Section = styled.section`
  text-align: center;
`;

const About = styled.p`
  padding: 0 20%;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #708190;
  text-decoration: none;
  position: relative;
  display: inline-block; // Ensures the pseudo-element aligns correctly

  &::before {
    content: '';
    position: absolute;
    bottom: -2px; // Positioning the underline slightly below the text
    left: 50%; // Start from the middle
    width: 0; // Start width as zero
    height: 2px; // Thickness of the underline
    background-color: #708190; // Same color as the text
    transition: all 0.3s ease-in-out; // Smooth transition for all changes
    transform: translateX(-50%); // Center the pseudo-element
  }

  &:hover::before {
    width: 100%; // Full width on hover
    left: 0; // Reset to start from the left edge
    transform: translateX(0%); // Reset transform to none
  }
`;

const RandomJokeContainer = styled.div`
  margin-top: 50px;
  font-style: italic;
  color: #708090;
`;
const HeroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #708090;
  text-shadow: 0 0 10px rgba(1, 1, 1, 0.5);
  text-align: center;
  padding: 40px; // Too much padding for mobile, adjust this
  background-size: cover;
  @media (max-width: 768px) {
    display: none; // Hide Greeting hero section on mobile
  }
`;

const Body: React.FC = () => {
  return (
    <BodyContainer className='muted-gray'>
      <HeroSection>
        <HeroSectionContainer>
          <h1>Greetings, Pilgrim!</h1>
        </HeroSectionContainer>
      </HeroSection>
      <Section>
        <h2>Welcome to my little corner of the internet</h2>
        <About>
          I'm Stefan, a devoted developer and leader with a passion for
          technology and project management. Besides building innovative
          solutions, I am also a proud father and craftsman. I highly value
          personal development and believe in creating positive and meaningful
          collaborations.
        </About>
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
      <hr />
      <RandomJokeContainer>
        <RandomJoke />
      </RandomJokeContainer>
      <hr />
      <Section>
        <LatestCommits />
      </Section>
    </BodyContainer>
  );
};

export default Body;
