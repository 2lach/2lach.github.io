import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
// import styles from './style.css';

// https://benhowell.github.io/react-grid-gallery/


class Skillz extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {
                images: this.props.images
            };
    
        }
    
        render () {
            return (
                    <div style={{
                        display: "block",
                        minHeight: "1px",
                        width: "100%",
                        textAlign: "center",
                        overflow: "auto"}}
                        >
                        <h1>Skills</h1>
                    <Gallery
                      className="outline w-25 pa3 mr5"
                images={this.state.images}
              
                enableLightbox={false}
                enableImageSelection={false}/>
                    </div>
            );
        }
    }
    
    Skillz.propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
                srcset: PropTypes.array,
                caption: PropTypes.string,
                thumbnailWidth: PropTypes.number.isRequired,
                thumbnailHeight: PropTypes.number.isRequired
            })
        ).isRequired
    };
    
    Skillz.defaultProps = {
        images:[
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png",
                thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png",
                thumbnailWidth: 10+"rem",
                thumbnailHeight: 200,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png",
                thumbnail: "https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png",
                thumbnailWidth: 10+"rem",
                thumbnailHeight: 200,
                caption: "37H (gratispgraphy.com)"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                thumbnail: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                thumbnailWidth: 10+"rem",
                thumbnailHeight: 200,
                caption: "Orange Macro (Tom Eversley - isorepublic.com)",
                className: "WPPPPP"
            },
            {
                src: "https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.",
                thumbnail: "https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.",
                thumbnailWidth:  10+"rem",
                thumbnailHeight: 200,
                caption: "201H (gratisography.com)"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png",
                thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png",
                thumbnailWidth:  10+"rem",
                thumbnailHeight: 200,
                caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
            },
            {
                src: "https://www.codaxy.com/assets/app/img/home/dotnet.svg",
                thumbnail: "https://www.codaxy.com/assets/app/img/home/dotnet.svg",
                thumbnailWidth:  10+"rem",
                thumbnailHeight: 200,
                caption: "Man on BMX (Tom Eversley - isorepublic.com)"
            },
            {
                src: "https://nodejs.org/static/images/logo.svg",
                thumbnail: "https://nodejs.org/static/images/logo.svg",
                thumbnailWidth:  6+"rem",
                thumbnailHeight: 200,
                caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
            },
            {
                src: "https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png",
                thumbnail: "https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png",
                thumbnailWidth:  10+"rem",
                thumbnailHeight: 200,
                caption: "A photo by 贝莉儿 NG. (unsplash.com)"
            }
        ]};

export default Skillz;