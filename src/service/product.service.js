import { getData } from '../utils/axios/apiCalls';
import { allProducts, productsByCategory } from '../utils/url';

const getAllProducts = async () => {
  try {
    const result = await getData({
      url: allProducts()
    });
    if (result) {
      const { data, status } = result;
      if (data && status === 200) {
        return data;
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return null;
};

const getProductsByCategory = async (category) => {
  try {
    const result = await getData({
      url: productsByCategory(category)
    });
    if (result) {
      const { data, status } = result;
      if (data && status === 200) {
        return data;
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return null;
};

export { getProductsByCategory, getAllProducts };
