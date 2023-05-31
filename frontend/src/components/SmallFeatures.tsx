import '../styles/SmallFeatures.css';

import Sand from '../images/Small features 1_sand.jpg';
import sustainability from '../images/Small features 1_artisan.jpg';
import Shipping from '../images/Small features 1_free shipping.jpg';

function Features1() {
  return (
    <>
      <div className="features-small">
        <div className="rectangle-parent">
          <img className="frame-child" alt="" src={Sand} />
          <div className="scratch-resistant-parent">
            <div className="scratch-resistant">Scratch resistant</div>
            <div className="our-scratch-resistant-frames">
              Our scratch-resistant frames are made to withstand daily wear and
              tear
            </div>
          </div>
        </div>
        <div className="rectangle-parent middle">
          <img className="frame-child" alt="" src={sustainability} />
          <div className="scratch-resistant-parent">
            <div className="scratch-resistant">Handcrafted sustainability</div>
            <div className="our-scratch-resistant-frames">
              <p className="look-and-feel">Look and feel your best</p>
              <p className="look-and-feel">while reducing your</p>
              <p className="look-and-feel">carbon footprint</p>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <img className="frame-child" alt="" src={Shipping} />
          <div className="scratch-resistant-parent">
            <div className="scratch-resistant">Always free shipping</div>
            <div className="our-scratch-resistant-frames">
              Enjoy our eco-friendly shipping for free
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features1;
