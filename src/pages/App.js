/* eslint-disable */
import React from 'react';
import Envelope from 'react-icons/lib/fa/envelope-square';
import GitHub from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import CoverImage from '../components/CoverImage';
import Body from '../components/Body';
import Avatar from '../components/Avatar';
import Center from '../components/Center';
import A from '../components/A';
import IconWrapper from '../components/IconWrapper';
import PostContainer from '../components/PostContainer';
import Projects from '../components/Projects';
import Carousel from '../components/imageSlider';

const App = () => (
  <div>
    <CoverImage />
    <Body>
      <A
        href="https://github.com/2lach"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Avatar />
      </A>

      <Center>
        <h1>
          <A href="/" className="f2 avenir">
            Stefan Lachmann
          </A>
        </h1>
        <h3 className="f3 avenir">
          <b>Front-End Developer</b>
        </h3>
      </Center>
      <p className="f4 avenir">
        Stefan is a highly-focused frontend developer with several years of
        experience in a variety of development and engineering positions. He’s
        organized, methodical and has a keen eye for detail results in solid
        coding and trustworthy software programs. Understanding client
        requirements and communicating the progress of projects are core values
        in achieving long lasting business relationships.
      </p>
      <p className="f4 avenir">
        Stefan’s broad development knowledge includes HTML, CSS, JavaScript and
        several JS libraries. To be industry aware and technically up to speed
        with current software development tools is important for him, and his
        strong analytical skills makes him a level-headed problem solver. He’s
        got strong design and UX experience within web development, and masters
        Windows as well as Mac environments.
      </p>
      {/* <PostContainer />  <Skillz /> */}
      <Carousel />
      <IconWrapper />
    </Body>
  </div>
);

export default App;
