import css from 'next/css';

const buttonStyles = {
  height: 35,
  width: 'auto',
  padding: '0 20px',
  border: 0,
  borderRadius: 2,
  backgroundColor: 'rgba(0,0,0,0.09)',
  color: 'rgba(0,0,0,0.95)',
  fontSize: 15,
  boxSizing: 'border-box',
  transition: 'background-color 0.2s',
  position: 'relative',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 1px rgba(0,0,0,0.4)',
  },
  '[disabled]': {
    backgroundColor: 'rgba(0,0,0,0.02)',
    color: 'rgba(0,0,0,0.3)',
  },
};

export default css(buttonStyles);
