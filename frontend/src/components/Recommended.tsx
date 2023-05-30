import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../images/Product_Nairobi1.png';
import image2 from '../images/Product_Tokyo1.png';
import image3 from '../images/Product_Manhattan1.png';
import image4 from '../images/Product_Rio1.png';
import image5 from '../images/Product_Berlin1.png';
import image6 from '../images/SS_Pink_1.png';
// import '../styles/global.css';
import '../styles/Productcarousel.css';

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

interface ProductCarouselProps {
  onProductClick: (product: Product) => void;
}

function Productcarousel2({ onProductClick }: ProductCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  // const [productImages, setProductImages] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number[]>([]);

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

  function getImagePath(image: string) {
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

  // Shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getFourRandomProducts = () => {
    const shuffledProducts = shuffleArray(products);
    return shuffledProducts.slice(0, 4);
  };

  return (
    <div className="carousel-2">
      <div className="the-rio-rush">RECOMMENDED FOR YOU</div>
      <Carousel
        interval={null} // Ingen auto snurr
        slide={true} // Visa flera samtidigt
        indicators={false}
      >
        {Array.from({ length: Math.ceil(products.length / 4) }).map(
          (_, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex w-100">
                {getFourRandomProducts().map((product: Product) => (
                  <div
                    key={product.id}
                    className="product-item"
                    onClick={() => onProductClick(product)}
                  >
                    <img
                      className="d-block hover-effect"
                      src={getImagePath(product.image)}
                      alt={product.name}
                    />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-text">{product.color}</p>
                      <p className="product-text">
                        <strong>$</strong>
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          )
        )}
      </Carousel>
      <Link to="/All-sunglasses">
        <button className="find">Find what you love</button>
      </Link>
    </div>
  );
}

export default Productcarousel2;
