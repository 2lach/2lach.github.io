import './style.css';

import React from 'react';
import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://github.com/2lach/2lach.github.io/raw/backup/src/docs/';
const cvEn = 'CV-en-2023_Stefan-Lachmann.pdf';
const cvSwe = 'CV-se-2023_Stefan-Lachmann.pdf';

class Cv extends React.Component {
  state = {
    isLoadingEn: true,
    isLoadingSwe: true,
    fileSizeEn: '',
    fileSizeSwe: ''
  };

  async componentDidMount() {
    this.getFileSize(cvEn, 'en');
    this.getFileSize(cvSwe, 'swe');
  }

  async getFileSize(fileUrl, language) {
    try {
      const response = await axios.get(corsProxy + baseUrl + fileUrl);
      const { headers } = response;

      const fileSize = Math.ceil(headers['content-length'] / 1024);

      if (language === 'swe') {
        this.setState({ fileSizeSwe: fileSize, isLoadingSwe: false });
      } else {
        this.setState({ fileSizeEn: fileSize, isLoadingEn: false });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { isLoadingEn, isLoadingSwe, fileSizeEn, fileSizeSwe } = this.state;

    return (
      <div className='wrapper'>
        <a className='face-button' href={baseUrl + cvEn}>
          <div className='face-primary'>
            <span className='icon fa fa-download'></span>
            Get a copy
          </div>
          <div className='face-secondary'>
            <span className='icon fa fa-hdd-o'></span>
            Download PDF ({isLoadingEn ? 'Loading...' : fileSizeEn} KB)
          </div>
        </a>

        <a className='face-button' href={baseUrl + cvSwe}>
          <div className='face-primary'>
            <span className='icon fa fa-download'></span>
            Ladda ner
          </div>
          <div className='face-secondary'>
            <span className='icon fa fa-hdd-o'></span>
            Ladda ner PDF ({isLoadingSwe ? 'Laddar...' : fileSizeSwe} KB)
          </div>
        </a>
      </div>
    );
  }
}

export default Cv;
