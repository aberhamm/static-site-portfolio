import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import { Button as ButtonStyle } from '../styles/Button';

import CameraImage from '../images/pp_camera.jpg';
import FlowersImage from '../images/pp_flowers.jpg';
import GamingImage from '../images/pp_gaming.jpg';
import RangeImage from '../images/pp_range.jpg';
import SkylineImage from '../images/pp_skyline.jpg';
import WritingImage from '../images/pp_writing.jpg';

const PORTFOLIO = [
  { image_url: CameraImage, description: 'Taking pictures' },
  { image_url: FlowersImage, description: 'Nice flowers' },
  { image_url: GamingImage, description: 'Playstation controller' },
  { image_url: RangeImage, description: 'Beautiful mountain range' },
  { image_url: SkylineImage, description: 'Manhattan skyline' },
  { image_url: WritingImage, description: 'Penning a letter' },

];

const styles = {
  Root: {
    backgroundColor: '#eee',
    padding: '0 10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Header: {
    padding: '1em 0em',
    color: '#4e525d'
  },
  ImageGallery: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& img': {
      width: '32%',
      paddingBottom: '20px',
      flex: '0 0 auto',
      alignSelf: 'center',
    }
  },
  Button: {
    ...ButtonStyle,
    marginBottom: '5em'
  }
};

class Portfolio extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <h1 className={classes.Header}>Portfolio</h1>
        <div className={classes.ImageGallery}>
          {PORTFOLIO.map((p, i) => (
            <img key={i} src={p.image_url} alt={p.description}/>
          ))}
        </div>
        <a className={classes.Button}>See all works</a>
      </div>
    );
  }
}

export default injectSheet(styles)(Portfolio);
