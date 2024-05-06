import HeroSection from '../HeaderImage';
import React from 'react';
import styled from 'styled-components';

interface Services {
  children?: React.ReactNode;
  theme?: string;
}

const ServicesContainer = styled.div`
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

const ServicesParagraph = styled.p`
  padding: 0 20%;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer id='#Services' className='muted-gray'>
      <HeroSection></HeroSection>
      <Section>
        <h2>Services</h2>
        <ServicesParagraph>Stuff for sale</ServicesParagraph>
      </Section>
    </ServicesContainer>
  );
};

export default Services;
