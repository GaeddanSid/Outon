import BackToTop from '../components/BackToTop';
import React, { useState } from 'react';
import PhoneHeader from '../components/PhoneHeader';
import PolaroidGallery from '../components/PolaroidGallery';
import PhoneImages from '../components/PhoneImages';
import SmFeatures from '../components/SmFeatures2';
import Productcarousel from '../components/Productcarousel';

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

const TryOnView = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<Product>(defaultProduct);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <PhoneHeader />
      <PhoneImages />
      <PolaroidGallery />
      <SmFeatures />
      <Productcarousel onProductClick={handleProductClick} />
      <BackToTop />
    </div>
  );
};

export default TryOnView;
