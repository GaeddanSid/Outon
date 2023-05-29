import { useEffect, useState } from "react";

import rio2 from '../images/Product_Rio2.png';
import rio1 from '../images/Product_Rio1.png';
import rio3 from '../images/Product_Rio3.png';
import { Image } from "react-bootstrap";

import '../styles/ProductDetails.css'
import Productcarousel from "./Productcarousel";
import SmallFeatures from "./SmallFeatures";

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

function ProductDetails () {

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
    <div className="productdetail">
      <div className="productimage">
        <img
          className="skarmavbild-2023-05-09-kl-14"
          alt=""
          src={rio1}
        />
        <div className="skarmavbild-2023-05-09-kl-14-parent">
          <img
            className="skarmavbild-2023-05-09-kl-141"
            alt=""
            src={rio1}
          />
          <img
            className="skarmavbild-2023-05-09-kl-141"
            alt=""
            src={rio2}
          />
          <img
            className="skarmavbild-2023-05-09-kl-141"
            alt=""
            src={rio3}
          />
        </div>
        <div className="button">
          <div className="">Virtual try-on</div>
        </div>
      </div>
      <div className="cardprojectdetail">
        <div className="project-info">
          <div className="the-rio-rush-wrapper">
            <div className="the-rio-rush">Rio Rush</div>
          </div>
          <div className="outon-eyewear-wrapper">
            <div className="outon-eyewear">Outon Eyewear</div>
          </div>

          <div className="outon-eyewear-wrapper">
            <b className="outon-eyewear">€ 140</b>
          </div>

            <div className="table">
              <div className="sizeoptions">
                <label htmlFor="size">Size</label>
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
                    <div className="project-info">
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
                <div className="descriptonoption">
                  <div className="descriptionheader">
                    <div className="s">Description</div>
                  </div>
                  <div className="expand">
                    <img
                      className="radio-button-checked"
                      alt=""
                      src="/pluslg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

        </div>
          <button className="buttonadd-to-bag">Add to Bag</button>
        <div className="tinypromises">
          <div className="s-parent">
            <div className="icoutline-done-parent">
              <img
                className="icoutline-done-icon"
                alt=""
                src="/icoutlinedone.svg"
              />
              <div className="uvauvb-protection">100% UVA+UVB protection</div>
            </div>
            <div className="icoutline-done-parent">
              <img
                className="icoutline-done-icon"
                alt=""
                src="/icoutlinedone1.svg"
              />
              <div className="uvauvb-protection">Recycled materials</div>
            </div>
            <div className="icoutline-done-parent">
              <img
                className="icoutline-done-icon"
                alt=""
                src="/icoutlinedone1.svg"
              />
              <div className="uvauvb-protection">100% scratchfree</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ProductDetails;
