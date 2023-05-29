import '../styles/global.css';
import '../styles/About.css';
import sustainability from '../images/About_substainability.jpg';
import durability from '../images/About_durability.jpg';
import artisans from '../images/About_artisans.jpg';

function About() {
  return (
      <div className="about-section">
        <div className="aboutinnerframe">
          <div className="innerframefeatures">
            <div className="sustainabilitypicture">
              <div className="sustainabilitycontent">
                <div className="sustainabilitytext">
                  <div className="sustainabilityheaderbody">
                    <div className="our-sustainability">
                      <p className="our">{`OUR `}</p>
                      <p className="our">SUSTAINABILITY</p>
                    </div>
                  </div>
                  <div className="each-year-we">
                    Each year we repurpose 1.2 million plastic bottles and 100%
                    of our frames are crafted from recycled materials
                  </div>
                </div>
                  <button className="buttonseespecs">Explore our sustainable promise</button>
              </div>
              <img
                className="pic-about-substainability-icon"
                alt=""
                src={sustainability}
              />
            </div>
            <div className="sustainabilitypicture">
              <img
                className="pic-about-substainability-icon"
                alt=""
                src={durability}
              />
              <div className="sustainabilitycontent">
                <div className="durabilitytext">
                  <div className="sustainabilityheaderbody">
                    <div className="our-durability">
                      <p className="our">{`OUR `}</p>
                      <p className="our">DURABILITY</p>
                    </div>
                  </div>
                  <div className="how-can-our-container">
                    <p className="our">
                      How can our glasses be both scratch-free and lightweight?
                    </p>
                    <p className="our">
                      We are so confident that we give you a lifetime guarantee
                    </p>
                  </div>
                </div>
                <button className="buttonseespecs">See the tech specs</button>
              </div>
            </div>
            <div className="sustainabilitypicture">
              <div className="sustainabilitycontent">
                <div className="sustainabilitytext">
                  <div className="sustainabilityheaderbody">
                    <div className="our-sustainability">
                      <p className="our">{`OUR `}</p>
                      <p className="our">ARTISANS</p>
                    </div>
                  </div>
                  <div className="each-year-we">
                    Meet our master artisans in Portugal, where attention to
                    every detail and quality are at the heart of every pair
                  </div>
                </div>
                <button className="buttonseespecs">Discover the craftsmanship</button>
              </div>
              <img
                className="pic-about-substainability-icon"
                alt=""
                src={artisans}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
