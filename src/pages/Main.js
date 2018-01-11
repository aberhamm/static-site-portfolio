import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

const styles = {
  Root: {
    fontSize: '1em',
    fontFamily: '"Open Sans", sans-serif',
    color: '#4E525D',
    background: '#fff'
  }
}

class Main extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <header>
          <NavigationBar />
        </header>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default injectSheet(styles)(Main);
