import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from '@mui/material';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import ProductList from '../../components/ProductList';
import BottomBar from '../../components/BottomBar';
import styles from './style.module.css';

import {
  productListFetchStart,
  productListFetchSuccessful,
  categoriesListFetchStart,
  categoriesListFetchSuccessful
} from '../../redux/actions';
import { ProductService, CategoriesService } from '../../service';

function DashboardComponent() {
  const { loading, productList } = useSelector((state) => state.product);
  const { loading: loadingCategories, categories } = useSelector((state) => state.category);

  const [searchParams, setSearchParams] = useSearchParams();

  const mobileView = useMediaQuery('(max-width:600px)');

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    dispatch(productListFetchStart());
    const data = await ProductService.getAllProducts();
    if (data) {
      dispatch(productListFetchSuccessful(data));
    }
  };

  const getAllProductsByCategory = async () => {
    dispatch(productListFetchStart());
    const data = await ProductService.getProductsByCategory(searchParams.get('category'));
    if (data) {
      dispatch(productListFetchSuccessful(data));
    }
  };

  const getAllCategories = async () => {
    dispatch(categoriesListFetchStart());
    const data = await CategoriesService.getAllCategories();
    if (data) {
      dispatch(categoriesListFetchSuccessful(data));
    }
  };

  const selectCategory = (newCategory) => {
    if (newCategory === 'All') {
      setSearchParams('');
      return;
    }
    setSearchParams({
      category: newCategory
    });
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (searchParams.get('category')) {
      getAllProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [searchParams.get('category')]);

  return (
    <div className={styles.container}>
      {!mobileView && <Header />}
      <NavBar
        categories={categories}
        selectCategory={selectCategory}
        selectedCategory={searchParams.get('category')}
        loading={loadingCategories}
      />
      <ProductList productList={productList} loading={loading} />
      {mobileView && <BottomBar />}
    </div>
  );
}

export default DashboardComponent;
