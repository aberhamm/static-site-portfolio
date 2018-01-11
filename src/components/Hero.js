import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Carousel } from 'react-bootstrap';
import { ButtonTransparent } from '../styles/Button';
import HeroImage from '../images/hero.png';
import LeftArrow from '../images/arrow_blue_left.png';
import RightArrow from '../images/arrow_blue_right.png';
const styles = {
  Root: {
    color: '#fff',
    background: `#49cbcd url(${HeroImage}) no-repeat`,
    backgroundSize: 'cover',
    width: '100%',
    height: 575,
    backgroundPosition: 'center top -100px',
    textAlign: 'center'
  },
  Carousel: {
    '& .carousel-control': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent'
    }
  },
  Carousel__item: {
    height: 575
  },
  Carousel__caption: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  Caption__title: {
    fontSize: '3.5em',
    marginBottom: '.5em'
  },
  Caption__content: {
    fontSize: '1em',
    marginBottom: '2em'
  },
  Caption__button: {
    ...ButtonTransparent,
    alignSelf: 'center',
  }
}

class Hero extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <Carousel
          className={classes.Carousel}
          indicators={false}
          prevIcon={<img src={LeftArrow} alt="Previous slide" />}
          nextIcon={<img src={RightArrow} alt="Next slide" />}
          >
      		<Carousel.Item className={classes.Carousel__item}>
      			<Carousel.Caption className={classes.Carousel__caption}>
      				<h1 className={classes.Caption__title}>This is a main heading</h1>
      				<p className={classes.Caption__content}>Lorem ipsum is simply dummy text<br />of the printing</p>
              <a className={classes.Caption__button}>Learn More</a>
      			</Carousel.Caption>
      		</Carousel.Item>
          <Carousel.Item className={classes.Carousel__item}>
      			<Carousel.Caption className={classes.Carousel__caption}>
      				<h1 className={classes.Caption__title}>This is some secondary content</h1>
      				<p className={classes.Caption__content}>Lorem ipsum is simply dummy text of the printing</p>
              <a className={classes.Caption__button}>Learn More</a>
      			</Carousel.Caption>
      		</Carousel.Item>
      	</Carousel>
      </div>
    );
  }
}

export default injectSheet(styles)(Hero);
