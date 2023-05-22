import '../styles/SmallFeatures.css';

function Features1() {
  return (
    <>
      <div className="features-small">
        <div className="rectangle-parent">
          <img
            className="frame-child"
            alt=""
            src="\images\small-features-1-sand.jpg"
          />
          <div className="scratch-resistant-parent">
            <div className="scratch-resistant">Scratch resistant</div>
            <div className="our-scratch-resistant-frames">
              Our scratch-resistant frames are made to withstand daily wear and
              tear
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <img
            className="frame-child"
            alt=""
            src="\images\small-features-1-artisan.jpg"
          />
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
          <img
            className="frame-child"
            alt=""
            src="\images\small-features-1-free-shipping.jpg"
          />
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
