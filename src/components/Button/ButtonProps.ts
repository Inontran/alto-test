interface ButtonProps {
  /**
   * Ссылка кнопки. Если есть эта опция, то тег будет "а", иначе "button".
   */
  href?: string,

  /**
   * Тип кнопки. По умолчанию "button".
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset',

  /**
   * Текст кнопки.
   * @default 'Click me'
   */
  text?: string,
}

export default ButtonProps;
