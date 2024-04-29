import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 102%;
  padding: 1rem 2rem;
  background-color: #343a40;
  color: #f8f9fa; // Ljus text för läsbarhet
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  // display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  > div {
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const Links = styled.div`
//   a {
//     color: #f8f9fa;
//     text-decoration: none;
//     margin: 0 10px;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        © {new Date().getFullYear()} Stefan Lachmann - All rights reserved.
        {/* <Links>
          <a href='#about'>About</a>
          <a href='#privacy'>Privacy Policy</a>
          <a href='mailto:stefanlachmann@hotmail.com'>Contact</a>
        </Links> */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
