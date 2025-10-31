import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://ecommerce-app-w2ql.onrender.com/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-extrabold text-slate-800'>Latest Products</h1>
          <p className='text-sm text-slate-500'>Showing {products.length} items</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div
              key={product._id}
              className='group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative'
            >
              <div className='relative'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-56 object-cover group-hover:scale-105 transform transition'
                />
                <div className='absolute top-3 left-3 bg-white/80 text-slate-800 px-3 py-1 rounded-full text-sm font-medium'>
                  ${product.price}
                </div>
              </div>

              <div className='p-4'>
                <h2 className='font-semibold text-lg text-slate-800 line-clamp-2'>{product.name}</h2>
                <p className='text-sm text-slate-500 mt-2 mb-4 h-14 overflow-hidden'>{product.description || ''}</p>

                <div className='flex items-center gap-2'>
                  <Link
                    to={`/product/${product._id}`}
                    className='flex-1 text-center border border-slate-200 text-slate-700 py-2 rounded-md hover:bg-slate-50'
                  >
                    View
                  </Link>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product._id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })
                      )
                    }
                    className='bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 cursor-pointer'
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
