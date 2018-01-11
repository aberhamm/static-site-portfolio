import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-scroll';
import LogoImage from '../images/logo.png';

const DEFAULT_NAV_SCROLL_PROPS = {
  activeClass: 'active',
  spy: true,
  smooth: true,
  duration: 500,
  offset: -100
};

const styles = {
  Root: {
    height: 100
  },
  Nav__fixed: {
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10%',
    width: '100%',
    position: 'fixed',
    zIndex: 2,
    height: 100
  },
  Nav__logo: {
    display: 'flex',
    alignItems: 'center'
  },
  Nav__list: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    height: '100%',
    '& a': {
      fontSize: '1.15em',
      color: 'inherit',
      padding: '40px 20px',
      height: '100%',
      display: 'block',
      '&.active': {
        borderBottom: '2px solid #49cbcd',
        color: '#49cbcd',
        background: '#f8f9fb',
      }
    }
  },
}

class NavigationBar extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <div className={classes.Nav__fixed}>
          <div className={classes.Nav__logo}><img src={LogoImage} alt="Author" /></div>
          <nav>
          	<ul className={classes.Nav__list}>
    					<li><Link to="home" { ...DEFAULT_NAV_SCROLL_PROPS }>Home</Link></li>
    					<li><Link to="services" { ...DEFAULT_NAV_SCROLL_PROPS }>Services</Link></li>
    					<li><Link to="portfolio" { ...DEFAULT_NAV_SCROLL_PROPS }>Portfolio</Link></li>
    					<li><Link to="testimonial" { ...DEFAULT_NAV_SCROLL_PROPS }>Testimonial</Link></li>
    					<li><Link to="contact" { ...DEFAULT_NAV_SCROLL_PROPS }>Contact</Link></li>
    				</ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(NavigationBar);
