import React from 'react';
import PropTypes from 'prop-types';

import { Grid, CircularProgress } from '@mui/material';

import ProductCard from '../ProductCard';
import styles from './style.module.css';

function ProductListComponent({ productList, loading }) {
  return (
    <Grid
      container
      className={styles.container}
      justifyContent={loading ? 'center' : 'flex-start'}
      alignItems="center"
      spacing={{ xs: 3, md: 4 }}>
      {loading ? (
        <div className={styles.loaderDiv}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        productList.map((item) => <ProductCard {...item} />)
      )}
    </Grid>
  );
}

ProductListComponent.defaultProps = {
  loading: true
};

ProductListComponent.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      category: PropTypes.string,
      rating: PropTypes.objectOf({
        rate: PropTypes.number,
        count: PropTypes.number
      })
    })
  ).isRequired,
  loading: PropTypes.bool
};

export default ProductListComponent;
