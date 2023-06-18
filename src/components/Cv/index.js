import './style.css';

import React from 'react';

const baseUrl = 'https://github.com/2lach/2lach.github.io/raw/backup/src/docs/';
const cvEn = 'CV-en-2023_Stefan-Lachmann.pdf';
const cvSwe = 'CV-se-2023_Stefan-Lachmann.pdf';

class Cv extends React.Component {
  render() {
    return (
      <div
        className='wrapper'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <a
          className='face-button'
          style={{ margin: '10px' }}
          href={baseUrl + cvEn}
        >
          <div className='face-primary'>
            <span className='icon fa fa-download'></span>
            Get a copy
          </div>
          <div className='face-secondary'>
            <span className='icon fa fa-hdd-o'></span>
            Download PDF
          </div>
        </a>

        <a
          className='face-button'
          href={baseUrl + cvSwe}
          style={{ margin: '10px' }}
        >
          <div className='face-primary'>
            <span className='icon fa fa-download'></span>
            Ladda ner
          </div>
          <div className='face-secondary'>
            <span className='icon fa fa-hdd-o'></span>
            Ladda ner PDF
          </div>
        </a>
      </div>
    );
  }
}

export default Cv;
