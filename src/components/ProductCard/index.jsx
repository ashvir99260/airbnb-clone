import React from 'react';
import PropTypes from 'prop-types';

import { IconButton, Grid } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import styles from './style.module.css';

function ProductCardComponent({ id, title, price, image, category, rating }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={2} className={styles.container} key={id}>
      <div className={styles.imageContainer}>
        <img src={image} srcSet={image} alt={title} loading="lazy" className={styles.image} />
        <IconButton className={styles.topBar}>
          <FavoriteTwoToneIcon />
        </IconButton>
      </div>
      <span className={styles.productDetails}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{`$${price} total`}</span>
      </span>
      <span className={styles.productDetails}>
        <span className={styles.category}>{category}</span>
        <span className={styles.rating}>{`Rating: ${rating.rate}`}</span>
      </span>
    </Grid>
  );
}

ProductCardComponent.defaultProps = {
  id: '',
  title: 'Test Item',
  price: 100,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  category: 'Test Category',
  rating: {
    rate: 4.5,
    count: 300
  }
};

ProductCardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.objectOf({
    rate: PropTypes.number,
    count: PropTypes.number
  })
};

export default ProductCardComponent;
