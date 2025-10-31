import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 4.99 : 0;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-6'>Your Cart</h2>

      {cart.length === 0 ? (
        <div className='bg-white p-8 rounded-lg shadow text-center'>
          <p className='text-lg'>Your cart is empty 🛍️</p>
          <Link
            to='/'
            className='mt-4 inline-block text-sky-600 hover:underline'
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-4'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-24 h-24 object-cover rounded-md'
                />

                <div className='flex-1'>
                  <h3 className='font-semibold text-lg text-slate-800 line-clamp-2'>
                    {item.name}
                  </h3>
                  <p className='text-sm text-slate-500 mt-1'>
                    {item.description || ''}
                  </p>
                  <div className='mt-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className='w-8 h-8 flex items-center justify-center bg-slate-100 rounded-md hover:bg-slate-200 cursor-pointer'
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        −
                      </button>
                      <div className='px-3'>{item.qty}</div>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className='w-8 h-8 flex items-center justify-center bg-slate-100 rounded-md hover:bg-slate-200 cursor-pointer'
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <div className='text-right'>
                      <div className='font-semibold text-slate-800'>
                        ${(item.price * item.qty).toFixed(2)}
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className='text-sm text-red-600 mt-1 hover:underline cursor-pointer'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className='bg-white p-6 rounded-lg shadow-md'>
            <h4 className='text-lg font-semibold mb-4'>Order summary</h4>
            <div className='flex justify-between text-slate-600 mb-2'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-slate-600 mb-2'>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-slate-600 mb-4'>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className='border-t pt-4'>
              <div className='flex justify-between items-center mb-4'>
                <span className='font-bold'>Total</span>
                <span className='text-2xl font-extrabold'>
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className='w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 mb-3 cursor-pointer'>
                Proceed to checkout
              </button>
              <button
                onClick={() => dispatch(clearCart())}
                className='w-full border border-slate-200 py-2 rounded-md hover:bg-slate-50 cursor-pointer'
              >
                Clear cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
