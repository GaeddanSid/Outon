import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import About from '../components/About';
import BackToTop from '../components/BackToTop';
import Productcarousel from '../components/Productcarousel';
import ProductDetails from '../components/ProductDetails';
import SmallFeatures from '../components/SmallFeatures';

import '../styles/ProductView.css';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  size: string;
  color: string;
  description: string;
  details: string;
  image: string;
  image2: string;
  image3: string;
}

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  console.log(id);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8080/products/${id}`);
      const jsonData: Product = await response.json();
      console.log('Fetched product: ', jsonData);
      setProduct(jsonData);
    } catch (error) {
      console.error('Error fetching product from database', error);
    }
  };

  const defaultProduct: Product = {
    id: 6,
    name: 'Berlin Beat',
    type: '',
    price: 170,
    size: 'S/M',
    color: 'Shell/Tan smoke',
    description:
      'A frame with a classic character that suits your everyday style. Made with 100% Portuguese acetate. Available in x different colors and two different sizes.',
    details: '',
    image: 'Product_Berlin1.png',
    image2: 'Product_Berlin2.png',
    image3: 'Product_Berlin3.png',
  };

  const [selectedProduct, setSelectedProduct] =
    useState<Product>(defaultProduct);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="">
      <ProductDetails product={product || selectedProduct} />
      <Productcarousel onProductClick={handleProductClick} />
      <SmallFeatures />
      <About />
      <BackToTop />
    </div>
  );
}

export default ProductDetailPage;
