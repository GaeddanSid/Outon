import '../styles/SmFeatures2.css';

import uv from '../images/Small features 2_uv.jpg';
import prescription from '../images/Small features 2_prescription.jpg';
import sizes from '../images/Small features 2_sizes.jpg';

function Features2() {
  return (
    <>
      <div className="features-small-2">
        <div className="rectangle-parent-2">
          <img className="frame-child-2" alt="Uv-protection" src={uv} />
          <div className="scratch-resistant-parent-2">
            <div className="scratch-resistant-2">100% UV protection</div>
            <div className="our-scratch-resistant-frames-2">
              Every pair offers 100% UV protection, ensuring your eyes are safe
              in the sun
            </div>
          </div>
        </div>
        <div className="rectangle-parent-2">
          <img className="frame-child-2" alt="" src={prescription} />
          <div className="scratch-resistant-parent-2">
            <div className="scratch-resistant-2">
              <p className="look-and-feel-2">
                All frames available as prescription glasses
              </p>
              {/* <p className="look-and-feel-2"> </p> */}
            </div>
            <div className="our-scratch-resistant-frames-2">
              <p className="look-and-feel-2">
                Frames for fashion, lenses for function- all styles fit for your
                prescription
              </p>
            </div>
          </div>
        </div>
        <div className="rectangle-parent-2">
          <img className="frame-child-2" alt="" src={sizes} />
          <div className="scratch-resistant-parent-2">
            <div className="scratch-resistant-2">Different sizes</div>
            <div className="our-scratch-resistant-frames-2">
              Our frames comes in three sizes to provide the perfect fit
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features2;
