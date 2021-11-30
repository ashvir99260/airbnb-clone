import config from '../config';

const allProducts = () => `${config.BASE_URL}/products`;

const allCategories = () => `${config.BASE_URL}/products/categories`;

const productsByCategory = (category) => `${config.BASE_URL}/products/category/${category}`;

export { allProducts, allCategories, productsByCategory };
