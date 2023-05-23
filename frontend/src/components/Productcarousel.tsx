import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/global.css';
import '../styles/DetailDesktop.css';

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

function Productcarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  // const [productImages, setProductImages] = useState<string[]>([]);

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

  const getImageSrc = (image: string) => {
    try {
      const imagePath = require(`../images/${image}`).default;
      return imagePath;
    } catch (error) {
      console.error('Dynamisk import, fail', error);
      console.log('bla bla:' + image);
    }
  };

  return (
    <div className="detaildesktop">
      <div className="carousel-2">
        <div className="the-rio-rush">RECOMMENDED FOR YOU</div>
        <Carousel>
          {products.map((product: Product) => (
            <Carousel.Item key={product.id}>
              <img
                className=""
                src={getImageSrc(product.image)}
                alt={product.name}
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.color}</p>
                <p>{product.price}</p>
                <p>Something...</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Productcarousel;
