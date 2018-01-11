const ButtonBase = {
  fontWeight: '600',
  fontSize: '1em',
  textAlign: 'center',
  borderRadius: '5px',
  padding: '1em 3em',
  color: '#fff',
  background: '#49cbcd',
  border: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: '#fff',
    cursor: 'pointer'
  }
}

export const Button = {
  ...ButtonBase,
}
export const ButtonDense = {
  ...ButtonBase,
  fontWeight: '400',
  fontSize: '0.9em',
  padding: '.5em 1em',
  borderRadius: '3px',
};

export const ButtonTransparent = {
  ...ButtonBase,
  border: '2px solid #fff',
  background: 'transparent',
}
