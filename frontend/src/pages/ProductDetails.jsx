import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <div className='text-center text-gray-500 mt-10'>Loading product...</div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-96 object-cover rounded-lg shadow'
        />
      </div>

      <div className='flex flex-col justify-center'>
        <h1 className='text-3xl font-semibold mb-3'>{product.name}</h1>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <p className='text-2xl font-bold mb-4'>${product.price}</p>
        <p className='text-gray-500 mb-6'>
          In Stock:{' '}
          {product.countInStock > 0 ? product.countInStock : 'Out of Stock'}
        </p>

        <button
          className={`px-6 py-3 rounded-lg text-white cursor-pointer ${
            product.countInStock > 0
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
