import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Carousel } from 'react-bootstrap';
import LeftArrow from '../images/arrow_left.svg';
import RightArrow from '../images/arrow_right.svg';

const TESTIMONIALS = [
  {
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 500\'s, when an unknown printer took a galley of type.',
    attribution: 'John Dove'
  }, {
    quote: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 500\'s, when an unknown printer...',
    attribution: 'Gordon Freeman'
  }
];

const styles = {
  Root: {
    margin: '0 10%',
    height: 450,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Header: {
    marginBottom: '.8em',
    color: '#4e525d'
  },
  Carousel: {
    '& .carousel-control': {
      background: 'transparent'
    }
  },
  Carousel__caption: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textShadow: 'none',
    padding: '0 20%'
  },
  Testimonial__quote: {
    marginBottom: '2em',
    fontSize: '1.1em',
    lineHeight: '1.8em',
  },
  Testimonial__attribution: {
    fontSize: '1.4em',
    color: '#9a8faf'
  }
}

class Testimonial extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <h1 className={classes.Header}>What Clients Say</h1>
        <Carousel
          className={classes.Carousel}
          indicators={false}
          prevIcon={<img src={LeftArrow} alt="Previous testimonial" />}
          nextIcon={<img src={RightArrow} alt="Next testimonial" />}
          >
          { TESTIMONIALS.map((t, i) => (
        		<Carousel.Item key={i}>
        			<div className={classes.Carousel__caption}>
                <p className={classes.Testimonial__quote}>{t.quote}</p>
                <p className={classes.Testimonial__attribution}>{t.attribution}</p>
        			</div>
        		</Carousel.Item>
          )) }
      	</Carousel>
      </div>
    );
  }
}

export default injectSheet(styles)(Testimonial);
