// SocialLinks.jsx
import styled from 'styled-components';

const Link = styled.a`
  margin: 0 10px;
  color: #708190;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: #5e81ac;
  }
`;

export const SocialLinks = () => (
  <div>
    <Link
      href='https://github.com/2lach'
      target='_blank'
      rel='noopener noreferrer'
    >
      Github
    </Link>
    <Link
      href='https://linkedin.com/in/slachmann'
      target='_blank'
      rel='noopener noreferrer'
    >
      LinkedIn
    </Link>
    <Link
      href='https://codepen.io/2lach'
      target='_blank'
      rel='noopener noreferrer'
    >
      Codepen
    </Link>
    <Link
      href='https://books.2lach.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      Books I've Read
    </Link>
    <Link
      href='https://medium.com/@2lach'
      target='_blank'
      rel='noopener noreferrer'
    >
      Articles I've Written
    </Link>
  </div>
);
