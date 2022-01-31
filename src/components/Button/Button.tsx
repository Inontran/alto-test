import React from 'react';

import cartIcon from '../../share/images/icons/cart.svg';

import ButtonProps from './ButtonProps';
import styles from './Button.module.scss';

const Button = ({
  href,
  type = 'button',
  text = 'Click me',
  ...props
}: ButtonProps) => {
  if (href) {
    return <a
      className = { styles.Button }
      href = { href }
    >
      <img 
        className = { styles.Icon }
        src = {cartIcon}
      />
      {
        text && <span className = { styles.Text }>{text}</span>
      }
    </a>
  } else {
    return <button
      className = { styles.Button }
      type = { type }
    >
      <img 
        className = { styles.Icon }
        src = {cartIcon}
      />
      {
        text && <span className = { styles.Text }>{text}</span>
      }
    </button>
  }

}

export default Button;
