import React from 'react';
import '../styles/Phone.css';
import { Camera, Reply, Person, Trash } from 'react-bootstrap-icons';
import Main_VTO_TokyoTwilight from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import artisans from '../images/polaroid-riorush-brownsmoke-brown-front-bokeh.jpeg';
import Elle from '../images/polaroid-riorush-greysmoke-grey-above.jpeg';
import Image1 from '../images/Product_Manhattan1.png';
import Image2 from '../images/Product_Berlin1.png';
import Image3 from '../images/Product_Rio1.png';
import Image5 from '../images/Product_Nairobi1.png';
import Image4 from '../images/SS_Pink_2.png';
import Image6 from '../images/Product_Tokyo1.png';

const Phone = () => {
  return (
    <div>
      <div className="hidden-box">
        <div className="hidden-content">
          <h1 className="heading-text">Try it before you buy it!</h1>
          <div className="beauty-text">
            <p className="beauty-line">
              Beauty is in the eye of the beholder or as we like to say, OutOn
              the eyes of the beholder! Style yourself like the gorgeous
              sunshine cosmonaut that you are!
            </p>
          </div>

          <div className="circle-row">
            <div
              className="circle circle-selfie"
              style={{ backgroundColor: '#eee565' }}
            >
              Selfie time
            </div>
            <div
              className="circle circle-shades"
              style={{ backgroundColor: '#b68657' }}
            >
              Select shades
            </div>
          </div>
          <div className="circle-row">
            <div
              className="circle circle-shot"
              style={{ backgroundColor: '#9dacaa' }}
            >
              Snap a shot
            </div>
            <div
              className="circle circle-inbox"
              style={{ backgroundColor: '#9f8ea2' }}
            >
              Send to inbox
            </div>
          </div>
        </div>
        <div className="phone">
          <div className="screen">
            <div className="carousel">
              <img
                src={Main_VTO_TokyoTwilight}
                alt="Main_VTO_TokyoTwilight"
                className="carousel-img"
              />
              <img src={artisans} alt="artisans" className="carousel-img" />
              <img src={Elle} alt="Elle" className="carousel-img" />
            </div>
          </div>
          <div className="buttons">
            <div className="half-circle">
              <div className="round-button">
                <Reply />
              </div>
              <div className="round-button">
                <Person />
              </div>
              <div className="round-button">
                <Trash />
              </div>
            </div>
            <div className="camera-button">
              <Camera size={24} />
            </div>
          </div>
        </div>
      </div>
      <h2 id="my-custom-heading" style={{ textAlign: 'center' }}>
        Find your perfect shades
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={Image1}
          alt="Image 1"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
        <img
          src={Image2}
          alt="Image 2"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
        <img
          src={Image3}
          alt="Image 3"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={Image4}
          alt="Image 4"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
        <img
          src={Image5}
          alt="Image 5"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
        <img
          src={Image6}
          alt="Image 6"
          style={{
            width: '375.1px',
            height: '299.7px',
            margin: '30px 20px', // Uppdaterat värde för padding
            boxShadow:
              '0 0 0 0 rgba(0, 0, 0, 0.1), 0 1.7px 3.4px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.09), 0 13.7px 8.6px 0 rgba(0, 0, 0, 0.05), 0 24.8px 10.3px 0 rgba(0, 0, 0, 0.01), 0 39.4px 11.1px 0 rgba(0, 0, 0, 0)',
          }}
        />
      </div>
    </div>
  );
};

export default Phone;
