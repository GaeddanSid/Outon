import '../styles/global.css';
import '../styles/DetailDesktop.css';

import sustainability from '../images/About_substainability.jpg';
import durability from '../images/About_durability.jpg';
import artisans from '../images/About_artisans.jpg';

function About() {
  return (
    <div className="detaildesktop">
      <div className="frame-wrapper4">
        <div className="frame-wrapper5">
          <div
            className="features-bigger-wrapper"
            data-scroll-to="frameContainer"
          >
            <div className="features-bigger">
              <div className="frame-parent11">
                <div className="instance-parent">
                  <div className="frame-parent13">
                    <div className="frame-parent14">
                      <div className="our-sustainability-wrapper">
                        <div className="our-sustainability">
                          <p className="the-berlin-beat">{`OUR `}</p>
                          <p className="the-berlin-beat">SUSTAINABILITY</p>
                        </div>
                      </div>
                      <div className="each-year-we">
                        Each year we repurpose 1.2 million plastic bottles and
                        100% of our frames are crafted from recycled materials
                      </div>
                    </div>
                    <div className="button2">
                      <div className="add-to-bag">
                        Explore our sustainable promise
                      </div>
                    </div>
                  </div>
                  <img className="frame-child5" alt="" src={sustainability} />
                </div>
                <div className="instance-parent">
                  <img className="frame-child5" alt="" src={durability} />
                  <div className="frame-parent13">
                    <div className="frame-parent16">
                      <div className="our-sustainability-wrapper">
                        <div className="our-durability">
                          <p className="the-berlin-beat">{`OUR `}</p>
                          <p className="the-berlin-beat">DURABILITY</p>
                        </div>
                      </div>
                      <div className="how-can-our-container">
                        <p className="the-berlin-beat">
                          How can our glasses be both scratch-free and
                          lightweight?
                        </p>
                        <p className="the-berlin-beat">
                          We are so confident that we give you a lifetime
                          guarantee
                        </p>
                      </div>
                    </div>
                    <div className="button3">
                      <div className="add-to-bag">See the tech specs</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="instance-parent">
                <div className="frame-parent13">
                  <div className="frame-parent14">
                    <div className="our-sustainability-wrapper">
                      <div className="our-sustainability">
                        <p className="the-berlin-beat">{`OUR `}</p>
                        <p className="the-berlin-beat">ARTISANS</p>
                      </div>
                    </div>
                    <div className="meet-our-master">
                      Meet our master artisans in Portugal, where attention to
                      every detail and quality are at the heart of every pair
                    </div>
                  </div>
                  <div className="button3">
                    <div className="discover-the-craftsmanship">
                      Discover the craftsmanship
                    </div>
                  </div>
                </div>
                <img className="frame-child5" alt="" src={artisans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
