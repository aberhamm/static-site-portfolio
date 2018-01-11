import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Button as ButtonStyle } from '../styles/Button';

const styles = {
  Root: {
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

class ContactForm extends PureComponent {
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
      <form className={classes.Root}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          className={classes.Form__input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          className={classes.Form__input}
        />
        <textarea rows="5" name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} className={`${classes.Form__input} ${classes.Form__input__textarea}`} />
        <div><input type="submit" value="Submit" className={classes.Form__input__button}/></div>
      </form>
    );
  }
}

export default injectSheet(styles)(ContactForm);
