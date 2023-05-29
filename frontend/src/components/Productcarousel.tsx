import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/Product_Nairobi1.png'
import image2 from '../images/Product_Tokyo1.png'
import image3 from '../images/Product_Manhattan1.png'
import image4 from '../images/Product_Rio1.png'
import image5 from '../images/Product_Berlin1.png'
import image6 from '../images/SS_Pink_1.png'
import '../styles/global.css';
import '../styles/Productcarousel.css'

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


  function getImagePath(image : string) {
    switch (image) {
      case 'Product_Nairobi1.png':
        return image1;
      case 'Product_Tokyo1.png':
        return image2;
      case 'Product_Manhattan1.png':
        return image3;
      case 'Product_Rio1.png':
        return image4;
      case 'Product_Berlin1.png':
        return image5;
      case 'SS_Pink_1.png':
        return image6;
      default:
        return '';
    }
  }

  return (
      <div className="carousel-2">
        <div className="the-rio-rush">SEE THE WORLD THROUGH OUR GLASSES</div>
          <Carousel
                  interval={null} // Ingen auto snurr
                  slide={true} // Visa flera samtidigt
                  indicators={false}
        >
          {products.map((product: Product,) => (
            <Carousel.Item key={product.id}>
              <div className='d-flex'>
              {Array.from(Array(4).keys()).map((index) => (
                  <div key={index} className="product-item">
              <img
                className="d-block w-100"
                src = {getImagePath(product.image)}
                alt={product.name}
              />
              <div className='product-info'>

                <h3>{product.name}</h3>
                <p>{product.color}</p>
                <p><strong>$</strong>{product.price}</p>
                </div>
                </div>
                ))}
                </div>
            </Carousel.Item>
            ))}
          </Carousel>
        <button className='find'>Find What you Love</button>
      </div>
  );
}

export default Productcarousel;
