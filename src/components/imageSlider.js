import React from 'react';
import './style.css';
// import images from './data/skillsdata';


const imgUrls = [
    'https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png',
    'https://nodejs.org/static/images/logo.svg',
    'https://www.codaxy.com/assets/app/img/home/dotnet.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png',
    'https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png',
]

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        // this.autoSlider = this.autoSlider.bind(this);
    }
     
    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
        
    }
    componentDidMount() {
        this.intervalId = setInterval(this.nextSlide.bind(this), 4000);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    autoSlider() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        this.setState({ currentImageIndex: index });
    }
    
    render() {
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        {glyph}
    </div>
);


const ImageSlide = ({ url }) => {
    const styles = {
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide tc" style={styles}>
            <img src={`${url}`} alt="" className="skillImage m2" />
        </div>
    );
}


export default Carousel;
