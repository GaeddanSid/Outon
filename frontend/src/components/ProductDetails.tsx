import { useEffect, useState } from "react";
import { BsPlus, BsX, BsCheck2 } from 'react-icons/bs';

import rio1 from '../images/Product_Rio1.png';
import rio2 from '../images/Product_Rio2.png';
import rio3 from '../images/Product_Rio3.png';

import nairobii1 from '../images/Product_Nairobi1.png'
import nairobii2 from '../images/Product_Nairobi2.png'
import nairobii3 from '../images/Product_Nairobi3.png'

import tokyo1 from '../images/Product_Tokyo1.png'
import tokyo2 from '../images/Product_Tokyo2.png'
import tokyo3 from '../images/Product_Tokyo3.png'

import manhattan1 from '../images/Product_Manhattan1.png'
import manhattan2 from '../images/Product_Manhattan2.png'
import manhattan3 from '../images/Product_Manhattan3.png'


import berlin1 from '../images/Product_Berlin1.png'
import berlin2 from '../images/Product_Berlin2.png'
import berlin3 from '../images/Product_Berlin3.png'

import pink1 from '../images/SS_Pink_1.png'
import pink2 from '../images/SS_Pink_2.png'
import pink3 from '../images/SS_Pink_3.png'

import '../styles/ProductDetails.css'

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
interface ProductDetailProps {
  product: Product;
}

function ProductDetails ({ product }: ProductDetailProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

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


  const getImagePath = (image: string) => {
    switch (product.name) {
      case 'Rio Rush':
        switch (image) {
          case 'image1':
            return rio1;
          case 'image2':
            return rio2;
          case 'image3':
            return rio3;
          default:
            return '';
        }
      case 'Nairobi Nights':
        switch (image) {
          case 'image1':
            return nairobii1;
          case 'image2':
            return nairobii2;
          case 'image3':
            return nairobii3;
          default:
            return '';
        }
      case 'Tokyo Twilight':
        switch (image) {
          case 'image1':
            return tokyo1;
          case 'image2':
            return tokyo2;
          case 'image3':
            return tokyo3;
          default:
            return '';
        }
      case 'Manhattan Moon':
        switch (image) {
          case 'image1':
            return manhattan1;
          case 'image2':
            return manhattan2;
          case 'image3':
            return manhattan3
            default:
              return '';
          }
        case 'Berlin Beat':
          switch (image) {
            case 'image1':
              return berlin1;
            case 'image2':
              return berlin2;
            case 'image3':
              return berlin3;
            default:
              return '';
          }
        case 'Sydney Splendid':
          switch (image) {
            case 'image1':
              return pink1;
            case 'image2':
              return pink2;
            case 'image3':
              return pink3;
            default:
              return '';
          }
        default:
          return '';
      }
    };

  return (
    <div className="productdetail">
      <div className="productimage">
        <img
          className="skarmavbild-2023-05-09-kl-14 hover-effect"
          alt={product.name}
          src={getImagePath('image1')}
        />
        <div className="skarmavbild-2023-05-09-kl-14-parent">
          <img
            className="skarmavbild-2023-05-09-kl-141 hover-effect"
            alt=""
            src={getImagePath('image1')}
          />
          <img
            className="skarmavbild-2023-05-09-kl-141 hover-effect"
            alt=""
            src={getImagePath('image2')}
          />
          <img
            className="skarmavbild-2023-05-09-kl-141 hover-effect"
            alt=""
            src={getImagePath('image3')}
          />
        </div>
        <div className="button">
          <div className="virtual-try-on">Virtual try-on</div>
        </div>
      </div>
      <div className="cardprojectdetail">
        <div className="project-info">
          <div className="the-rio-rush-wrapper">
            <div className="the-rio-rush2">{product.name}</div>
          </div>
          <div className="outon-eyewear-wrapper">
            <div className="outon-eyewear">Outon Eyewear</div>
          </div>

          <div className="outon-eyewear-wrapper">
            <b className="outon-eyewear">€ {product.price}</b>
          </div>

            <div className="table">
              <div className="sizeoptions">
                <div className="s">Size</div>
                <div className="options">
                  <label htmlFor="S/M">S/M</label>
                  <input type="checkbox" name="S/M" value="S/M" />
                  <label htmlFor="M/L">M/L</label>
                  <input type="checkbox" name="M/L" value="M/L" />
                </div>
              </div>

              <div className="coloroptions">
                <div className="color">
                  <div className="s">Color</div>
                </div>
                <div className="options">
                  <div className="optionscolors">
                    <div className="option2">
                      <div className="option1color1" />
                      <div className="option1color2" />
                    </div>
                    <div className="option2">
                      <div className="option2color1" />
                      <div className="option1color2" />
                    </div>
                    <div className="option2">
                      <div className="option3color1" />
                      <div className="option1color2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="description">
                <div className="descriptonoption" onClick={toggleDescription}>
                {isDescriptionVisible ? '' : ''}
                  <div className="descriptionheader">

                      {isDescriptionVisible ? (
                        <div>
                        <div className="s">Description</div>
                        <div className="product-description">{product.description}</div>
                        </div>


                      ) : (<div className="s">Description</div>
                      )}

                  </div>
                  <div className="expand">
                    {isDescriptionVisible ?  (
                      <BsX onClick={toggleDescription} />
                    ) : ( <BsPlus onClick={toggleDescription} />
                    )}

                  </div>
                </div>
              </div>
            </div>

        </div>
          <button className="buttonadd-to-bag">Add to Bag</button>
        <div className="tinypromises">
          <div className="s-parent">
            <div className="icoutline-done-parent">
            <BsCheck2 />
              <div className="uvauvb-protection">100% UVA+UVB protection</div>
            </div>
            <div className="icoutline-done-parent">
            <BsCheck2 />
              <div className="uvauvb-protection">Recycled materials</div>
            </div>
            <div className="icoutline-done-parent">
            <BsCheck2 />
              <div className="uvauvb-protection">100% scratchfree</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ProductDetails;
