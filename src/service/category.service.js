import { getData } from '../utils/axios/apiCalls';
import { allCategories } from '../utils/url';

const getAllCategories = async () => {
  try {
    const result = await getData({
      url: allCategories()
    });
    if (result) {
      const { data, status } = result;
      if (data && status === 200) {
        return [...data];
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return null;
};

export { getAllCategories };
