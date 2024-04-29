import styled from 'styled-components';

interface HeroSectionProps {}

const HeroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://source.unsplash.com/1600x900/?nature,water');
  height: 300px;
  color: lightgray;
  drop-shadow: 0 0 10px rgba(1, 1, 1, 0.5);
  text-align: center;
`;

const StyledBackgroundImage = styled.div<{ isdarktheme: boolean }>`
  width: 100%;
  height: 30vh;
  background-image: url(${props =>
    props.isdarktheme
      ? 'https://source.unsplash.com/1600x900/?night'
      : 'https://source.unsplash.com/1600x900/?nature,water'});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`;

const HeroSection: React.FC<HeroSectionProps> = () => {
  const getThemeType = (): boolean => {
    const hour = new Date().getHours();
    return hour > 17 || hour < 8;
  };

  const isdarktheme = getThemeType();
  return (
    <StyledBackgroundImage isdarktheme={isdarktheme}>
      <HeroSectionContainer>
        <h1>Greetings, Pilgrim!</h1>
      </HeroSectionContainer>
    </StyledBackgroundImage>
  );
};

export default HeroSection;
