import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { ButtonDense } from '../styles/Button';
import BulbIcon from '../images/icon_bulb.png';
import MonitorIcon from '../images/icon_monitor.png';
import RocketIcon from '../images/icon_rocket.png';
import TabletIcon from '../images/icon_tablet.png';

const SERVICES = [
  {
    icon: RocketIcon,
    title: 'Custom Designs',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been...',
    link: '#'
  }, {
    icon: MonitorIcon,
    title: 'Web Design',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been...',
    link: '#'
  }, {
    icon: BulbIcon,
    title: 'Blog pages',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been...',
    link: '#'
  }, {
    icon: TabletIcon,
    title: 'Mobile friendly',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been...',
    link: '#'
  }
];

const styles = {
  Root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '80px 10%'
  }
}

const itemStyles = {
  Root: {
    width: '23%',
    textAlign: 'center',
  },
  Icon: {
    marginBottom: '1.1em'
  },
  Title: {
    marginBottom: '1em'
  },
  Content: {
    lineHeight: '1.5em'
  },
  Button: {
    ...ButtonDense,
    display: 'inline-block'
  }
}

let ServiceItem = ({ classes, icon, title, content, link }) => (
  <div className={classes.Root}>
    <img src={icon} className={classes.Icon} alt="" />
    <h3 className={classes.Title}>{title}</h3>
    <p className={classes.Content}>{content}</p>
    <a className={classes.Button} href={link}>Read More</a>
  </div>
);

ServiceItem = injectSheet(itemStyles)(ServiceItem);

class Services extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        { SERVICES.map((s, i) => <ServiceItem key={i} {...s} />) }
      </div>
    );
  }
}

export default injectSheet(styles)(Services);
