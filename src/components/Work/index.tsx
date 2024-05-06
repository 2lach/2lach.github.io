import HeroSection from '../HeaderImage';
import React from 'react';
import styled from 'styled-components';

interface Work {
  children?: React.ReactNode;
  theme?: string;
}

const WorkContainer = styled.div`
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

const WorkParagraph = styled.p`
  padding: 0 20%;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #708190;
  text-decoration: none;
  position: relative;
  display: inline-block;

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

// const HeroSectionContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 300px;
//   color: #708090;
//   text-shadow: 0 0 10px rgba(1, 1, 1, 0.5);
//   text-align: center;
//   padding: 40px; // Too much padding for mobile, adjust this
//   background-size: cover;
//   @media (max-width: 768px) {
//     display: none; // Hide Greeting hero section on mobile
//   }
// `;

const Work: React.FC = () => {
  return (
    <WorkContainer id='#Work' className='muted-gray'>
      <HeroSection></HeroSection>
      <Section>
        <h2>Work</h2>
        <WorkParagraph>All these things that i have done</WorkParagraph>
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
    </WorkContainer>
  );
};

export default Work;
