import React from 'react';
import './style.css';
// import images from './data/skillsdata';


const imgUrls = [
    'https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png',
    'https://www.oderland.se/app/uploads/2017/10/nodejs-new-pantone-black.png',
    'https://www.codaxy.com/assets/app/img/home/dotnet.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png',
    'https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.',
    'https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png',
    'https://www.javatpoint.com/images/javascript/javascript_logo.png',
    'https://raw.githubusercontent.com/gmetais/YellowLabTools/master/doc/img/npm-logo.png',
    'https://prepros.io/img/less-logo.png',
    'http://evolve-enterprise.com/wp-content/uploads/2017/01/bootstrap-logo.png',
    'https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1',
    'https://repairfactory.ca/wp-content/uploads/2017/04/Bash-logotype-new.sh_.png',
    'https://cdn.iconverticons.com/files/png/3c02af24436268c7_256x256.png',
    'https://www.holmsecurity.se/upl/images/563923.png',
    'https://cdn772.swedroid.se/wp-content/uploads/2016/05/google-firebase-logo-711x365.png',
    'https://cdn-images-1.medium.com/max/1600/1*QoR3rxWIbnf5wmF_IuAHqQ.png',
    'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
    'https://www.happiness.se/sites/default/files/files/wordpress-logo-notext-rgb.png'
]
class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };
        // const { toogle, onClick } = this.props

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        // this.playPause = this.playPause.bind(this);
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

        this.intervalId = setInterval(this.nextSlide.bind(this), 10000);

    }
    componentWillUnmount() {
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
            <h2 className="tc">Dev & Design Skills</h2>
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

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
