import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import SmallFeatures from '../components/SmallFeatures';
// import About from '../components/A'bout';
// import Productcarousel from '../components/Productcarousel';
import Couple from '../images/tryon-start-block.png';
import Stylefeed from '../components/StyleFeed';
import Vogue from '../images/Vogue.png';
import Time from '../images/Time.png';
import Elle from '../images/Elle.png';
import Forbes from '../images/Forbes.png';
import Bazaar from '../images/Bazaar.png';
import Cosmo from '../images/cosmo.png';

function landingpage() {
  return (
    <div className="view-divs">
      <div className="hero-section">
        <div className="hero-pic">
          <div className="slogan">
            <p>SUN'S OUT</p>
            <p>SHADES ON</p>
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
        <div className="brand-names">
          <img src={Vogue} alt="Vogue" />
        </div>
        <div className="brand-names">
          <img src={Elle} alt="Elle" />
        </div>
        <div className="brand-names">
          <img src={Forbes} alt="Forbes" />
        </div>
        <div className="brand-names">
          <img src={Bazaar} alt="Bazaar" />
        </div>
        <div className="brand-names">
          <img src={Cosmo} alt="Cosmopolitan" />
        </div>
        <div className="brand-names">
          <img src={Time} alt="Time" />
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
          <img className="couple-try-on" src={Couple} alt="try-on-couple" />
        </div>
      </div>
      <SmallFeatures />
      {/* <Productcarousel /> */}
      {/* <About /> */}
      <Stylefeed />
    </div>
  );
}
export default landingpage;
