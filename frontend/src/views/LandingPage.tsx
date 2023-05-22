import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import SmallFeatures from '../components/SmallFeatures';

function landingpage() {
  return (
    <div className="view-divs">
      <div className="hero-section">
        <div className="hero-pic">
          <div className="slogan">
            <p>Sun's out</p>
            <p>shades on!</p>
          </div>
        </div>
        <div className="hero-text-parent">
          <div className="hero-text-container">
            <p className="hero-text">
              Elevate your style game with our exclusively refined and
              sustainable
            </p>
            <p className="hero-text">
              sunglasses, carefully handcrafted with scratch-resistant glass.
            </p>
            <p className="hero-text">&nbsp;</p>
            <p className="hero-text">
              Discover timeless luxury and sustainability today.
            </p>
          </div>
          <div className="button">
            <div className="shop-the-collection">Shop the collection</div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div>
          <img src="/images/Vogue.png" alt="Vogue" />
        </div>
        <div>
          <img src="/images/Elle.png" alt="Elle" />
        </div>
        <div>
          <img src="/images/Forbes.png" alt="Forbes" />
        </div>
        <div>
          <img src="/images/Bazar.png" alt="Bazaar" />
        </div>
        <div>
          <img src="/images/cosmo.png" alt="Cosmopolitan" />
        </div>
        <div>
          <img src="/images/Time.png" alt="Time" />
        </div>
      </div>

      <div className="try-on-start-block">
        <div className="try-on-start-text">
          <p className="our-virtual">OUR VIRTUAL</p>
          <p className="our-virtual">TRY-ON!</p>

          <div className="small-text-try-on">
            <p className="elevate">
              Elevate your style game with Outon's exclusively refined and
              sustainable sunglasses. Carefully handcrafted with
              scratch-resistant glass.
            </p>
            {/* <p className="elevate">&nbsp;</p> */}
            <p className="elevate">
              Discover timeless luxury and sustainability today!
            </p>
          </div>
          <Link to="/try-on">
            <div className="button4">
              <div className="button5">
                <div className="see-more">Try it now</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="try-on-start-pic">
          <img src="\images\tryon-start-block.png" alt="try-on-couple" />
        </div>
      </div>
      <SmallFeatures />
    </div>
  );
}
export default landingpage;
