import React from 'react';
import '../styles/Phone.css';
import Image1 from '../images/Product_Manhattan1.png';
import Image2 from '../images/Product_Berlin1.png';
import Image3 from '../images/Product_Rio1.png';
import Image5 from '../images/Product_Nairobi1.png';
import Image4 from '../images/SS_Pink_2.png';
import Image6 from '../images/Product_Tokyo1.png';

const PhoneImages = () => {
  return (
    <div>
      <h2 id="my-custom-heading">Find your perfect shades</h2>

      <div className="phone-images-container">
        <div className="phone-image">
          <img src={Image1} alt="Image 1" />
        </div>
        <div className="phone-image">
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="phone-image">
          <img src={Image3} alt="Image 3" />
        </div>
        <div className="phone-image">
          <img src={Image4} alt="Image 4" />
        </div>
        <div className="phone-image">
          <img src={Image5} alt="Image 5" />
        </div>
        <div className="phone-image">
          <img src={Image6} alt="Image 6" />
        </div>
      </div>

      {/* Lägg till margin-bottom för att skapa avstånd till nästa komponent */}
      <div style={{ marginBottom: '150px' }}>{/* Nästa komponent */}</div>
    </div>
  );
};

export default PhoneImages;
