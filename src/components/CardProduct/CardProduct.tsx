import React from 'react';

import Button from '../Button/Button';
import testImage from '../../share/images/test-product.jpg';

import CardProductProps from './CardProductProps';
import styles from './CardProduct.module.scss';

const CardProduct = ({
  id,
  title,
  image = testImage,
  description,
  price,
  availability = 0,
  color,
  ...props
}: CardProductProps) => {
  const priceFormatter = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });

  return (
    <article className = { styles.CardProduct }>
      <div className = { styles.ImgWrapper }>
        <img
          className = { styles.Img }
          src = {image}
          alt = {title}
          title = {title}
        />
      </div>
      <div className = { styles.Body }>
        <div className = { styles.Badge + ((availability === 0) ? ' ' + styles.blue : '') }>
          { availability === 0 && 'Под заказ' }
          { availability === 1 && 'В наличии' }
        </div>
        <p className = { styles.Title }>{title}</p>
        <p className = { styles.Price }>{
          (typeof price === 'number') ? priceFormatter.format(price) : price
        }</p>

        <div className = { styles.Collapser }>
          {
            color && <p className = { styles.Color }>Цвет - {color}</p>
          }
          <p className = { styles.Description }>{description}</p>
          <div className = { styles.ButtonWrapper }>
            <Button text = 'В корзину'/>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardProduct;
