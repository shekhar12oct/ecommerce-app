import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

dotenv.config();

const products = [
  {
    name: "Dell XPS 13 Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "Ultra-thin design with Intel i7 processor, 16GB RAM, and 512GB SSD for high performance.",
    brand: "Dell",
    category: "Laptops",
    price: 1399.99,
    countInStock: 6,
    rating: 4.7,
    numReviews: 54,
  },
  {
    name: "MacBook Air M3",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "Powered by Apple Silicon for blazing-fast performance and all-day battery life.",
    brand: "Apple",
    category: "Laptops",
    price: 1249.99,
    countInStock: 9,
    rating: 4.8,
    numReviews: 72,
  },
  {
    name: "Fitbit Charge 6",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    description:
      "Smart fitness tracker with heart rate, sleep, and workout tracking for all-day health insights.",
    brand: "Fitbit",
    category: "Wearables",
    price: 179.99,
    countInStock: 20,
    rating: 4.4,
    numReviews: 47,
  },
  {
    name: "GoPro Hero 12 Black",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    description:
      "Capture stunning 5.3K video and epic adventures with stabilization and waterproof design.",
    brand: "GoPro",
    category: "Cameras",
    price: 499.99,
    countInStock: 18,
    rating: 4.5,
    numReviews: 78,
  },
  {
    name: "Logitech MX Master 3S Mouse",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description:
      "Ergonomic wireless mouse with customizable buttons and ultra-fast scrolling.",
    brand: "Logitech",
    category: "Accessories",
    price: 99.99,
    countInStock: 25,
    rating: 4.8,
    numReviews: 122,
  },
  {
    name: "Razer BlackWidow V4 Keyboard",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
    description:
      "Mechanical gaming keyboard with RGB lighting and ultra-responsive switches.",
    brand: "Razer",
    category: "Accessories",
    price: 169.99,
    countInStock: 16,
    rating: 4.7,
    numReviews: 89,
  },
  {
    name: "Bose SoundLink Flex",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    description:
      "Portable Bluetooth speaker with deep bass and waterproof design.",
    brand: "Bose",
    category: "Audio",
    price: 149.99,
    countInStock: 22,
    rating: 4.7,
    numReviews: 75,
  },
  {
    name: "Sony PlayStation 5",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description:
      "Next-gen gaming console with lightning-fast load times and stunning visuals.",
    brand: "Sony",
    category: "Gaming",
    price: 499.99,
    countInStock: 11,
    rating: 4.9,
    numReviews: 312,
  },
  {
    name: "Xbox Series X",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description:
      "Powerful gaming console delivering 4K gaming and ultra-smooth frame rates.",
    brand: "Microsoft",
    category: "Gaming",
    price: 499.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 198,
  },
  {
    name: "Apple iPad Pro 12.9-inch",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "The most powerful iPad ever with M2 chip and Liquid Retina XDR display.",
    brand: "Apple",
    category: "Tablets",
    price: 1099.99,
    countInStock: 7,
    rating: 4.9,
    numReviews: 84,
  },
  {
    name: "Apple Magic Keyboard",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "Wireless, rechargeable keyboard with sleek aluminum design and smooth typing experience.",
    brand: "Apple",
    category: "Accessories",
    price: 129.99,
    countInStock: 17,
    rating: 4.7,
    numReviews: 55,
  },
  {
    name: "Anker PowerCore 20000mAh Power Bank",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
    description:
      "High-capacity power bank with fast charging for phones, tablets, and more.",
    brand: "Anker",
    category: "Accessories",
    price: 49.99,
    countInStock: 35,
    rating: 4.8,
    numReviews: 93,
  },
  {
    name: "Beats Studio Pro Headphones",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0",
    description:
      "Premium wireless headphones with spatial audio and noise cancellation.",
    brand: "Beats",
    category: "Audio",
    price: 349.99,
    countInStock: 9,
    rating: 4.6,
    numReviews: 71,
  },
  {
    name: "Asus ROG Zephyrus G14",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description:
      "Powerful gaming laptop with Ryzen 9, RTX 4070 GPU, and stunning display.",
    brand: "Asus",
    category: "Laptops",
    price: 1899.99,
    countInStock: 8,
    rating: 4.8,
    numReviews: 52,
  },
];

export default products;


const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // clear previous data
    await Product.insertMany(products);
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

importData();
