import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Category = () => {
  const { state } = useLocation();
  const params = useParams();
  const [categoriesProducts, setCategoriesProducts] = useState([]);
  const { VITE_API_BASE_URL } = import.meta.env;
  console.log(VITE_API_BASE_URL);
  useEffect(() => {}, []);

  return (
    <div>
      Category
      {JSON.stringify(state)}
      {JSON.stringify(params)}
    </div>
  );
};

export default Category;
