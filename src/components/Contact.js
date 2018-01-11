import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import ContactForm from './ContactForm';
import { Button as ButtonStyle } from '../styles/Button';
import GuitarImage from '../images/guitar.png';
import FacebookIcon from '../images/icon_fb.png';
import GoogleIcon from '../images/icon_gp.png';
import TwitterIcon from '../images/icon_tw.png';

const styles = {
  Root: {
    color: '#fff',
    background: `#181818 url(${GuitarImage}) no-repeat`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    padding: '0 10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    marginBottom: '2.5em'
  },
  Content__container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  Content__connect: {
    width: '45%',
  },
  Connect__subtext: {
    color: '#6f6f6f',
    paddingBottom: '1em'
  },
  Connect__social: {
    paddingBottom: '.8em',
    '& a': {
      paddingRight: 10
    }
  },
  Connect__direct: {
    lineHeight: '1.5em',
    color: '#bface2',
  },
  Content__formContainer: {
    width: '45%'
  },
  Content__form: {
    color: '#000',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  Form__input: {
    padding: 12,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flexGrow: 1,
    margin: 10
  },
  Form__input__textarea: {
    width: '100%'
  },
  Form__input__button: {
    ...ButtonStyle,
    margin: 10
  }
}

class Contact extends PureComponent {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <h1 className={classes.Header}>Contact Us</h1>
        <div className={classes.Content__container}>
          <div className={classes.Content__connect}>
            <h3>Get in touch with us</h3>
            <p className={classes.Connect__subtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry... </p>
            <div className={classes.Connect__social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" /></a>
              <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><img src={GoogleIcon} alt="Google Plus" /></a>
              <a href="https://twitter" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter" /></a>
            </div>
            <div className={classes.Connect__direct}>
              Cssaauthor.com <br />
              +XX-XXXX - XXXX - XX <br />
              info@cssauthor.com <br />
            </div>
          </div>
          <div className={classes.Content__formContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Contact);
