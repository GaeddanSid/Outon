import React, { useState, useEffect } from 'react';
import '../styles/Phone.css';
import Image1 from '../images/Product_Manhattan1.png';
import Image2 from '../images/Product_Berlin1.png';
import Image3 from '../images/Product_Rio1.png';
import Image5 from '../images/Product_Nairobi1.png';
import Image4 from '../images/SS_Pink_2.png';
import Image6 from '../images/Product_Tokyo1.png';

interface Product {
  name: string;
  price: number;
}

const PhoneImages = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/products');
      const jsonData: Product[] = await response.json();
      console.log('Fetched: ', jsonData);
      setProducts(jsonData);
    } catch (error) {
      console.error('No response from database', error);
    }
  };

  return (
    <div>
      <h2 id="my-custom-heading">Find your perfect shades</h2>

      <div className="phone-images-container">
        {products.map((product, index) => (
          <div className="phone-image" key={index}>
            {getImageByIndex(index) && (
              <img src={getImageByIndex(index)} alt={`Image ${index + 1}`} />
            )}
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {/* Lägg till margin-bottom för att skapa avstånd till nästa komponent */}
      <div style={{ marginBottom: '150px' }}>{/* Nästa komponent */}</div>
    </div>
  );
};

const getImageByIndex = (index: number): string | undefined => {
  switch (index) {
    case 0:
      return Image1;
    case 1:
      return Image2;
    case 2:
      return Image3;
    case 3:
      return Image4;
    case 4:
      return Image5;
    case 5:
      return Image6;
    default:
      return undefined;
  }
};

export default PhoneImages;
