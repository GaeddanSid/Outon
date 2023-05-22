import { FunctionComponent, useCallback } from 'react';
import '../styles/global.css';
import '../styles/DetailDesktop.css';

import sustainability from '../images/About_substainability.jpg';
import durability from '../images/About_durability.jpg';
import artisans from '../images/About_artisans.jpg';
import rio2 from '../images/Product_Rio2.png';
import rio1 from '../images/Product_Rio1.png';
import rio3 from '../images/Product_Rio3.png';

const DetailDesktop: FunctionComponent = () => {
  const onHeaderDesktopContainerClick = useCallback(() => {
    // Please sync "Landing page LATEST VERSION" to the project
  }, []);

  const onLoggaSVGClick = useCallback(() => {
    // Please sync "Landing page LATEST VERSION" to the project
  }, []);

  const onNewsTextClick = useCallback(() => {
    // Please sync "Landing page LATEST VERSION" to the project
  }, []);

  const onAllSunglassesTextClick = useCallback(() => {
    // Please sync "AppMain/Desktop" to the project
  }, []);

  const onHouseOfOutonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="detaildesktop">
      <div className="div">
        <div className="inner">
          <div className="frame-parent">
            <div className="inner">
              <div className="frame-group">
                <div className="inner">
                  <div className="the-rio-rush-wrapper">
                    <div className="the-rio-rush">The Rio Rush</div>
                  </div>
                  <div className="outon-eyewear-wrapper">
                    <div className="outon-eyewear">Outon Eyewear</div>
                  </div>
                </div>
                <div className="outon-eyewear-wrapper">
                  <b className="outon-eyewear">€ 140</b>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="frame-div">
                <div className="size-wrapper">
                  <div className="size">Size</div>
                </div>
                <div className="radiobuttons-wrapper">
                  <div className="radiobuttons">
                    <div className="s-parent">
                      <div className="size">S/M</div>
                      <img
                        className="radio-button-checked"
                        alt=""
                        src="/radio-button-unchecked.svg"
                      />
                    </div>
                    <div className="s-parent">
                      <div className="size">M/L</div>
                      <img
                        className="radio-button-checked"
                        alt=""
                        src="/radio-button-unchecked.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="color-wrapper">
                  <div className="size">Color</div>
                </div>
                <div className="radiobuttons-wrapper">
                  <div className="frame-parent2">
                    <div className="inner">
                      <div className="frame-child" />
                      <div className="frame-item" />
                    </div>
                    <div className="inner">
                      <div className="frame-inner" />
                      <div className="frame-item" />
                    </div>
                    <div className="rectangle-container">
                      <div className="frame-child1" />
                      <div className="frame-item" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="frame-parent4">
                  <div className="description-wrapper">
                    <div className="size">Description</div>
                  </div>
                  <div className="arrowdown-wrapper">
                    <img
                      className="arrowdown-icon"
                      alt=""
                      src="/arrowdown.svg"
                    />
                  </div>
                </div>
                <div className="shop-outon-sunglasses">
                  Shop Outon Sunglasses in Rectangle shape, crafted from
                  recycled polyethylene
                </div>
              </div>
              <div className="frame-parent5">
                <div className="description-wrapper">
                  <div className="size">Details</div>
                </div>
                <div className="arrowright-wrapper">
                  <img
                    className="arrowright-icon"
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-to-bag-wrapper">
          <div className="add-to-bag">Add to Bag</div>
        </div>
        <div className="child">
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
      <img className="skarmavbild-2023-05-09-kl-14" alt="" src={rio2} />
      <div className="skarmavbild-2023-05-09-kl-14-parent">
        <img className="skarmavbild-2023-05-09-kl-141" alt="" src={rio1} />
        <img className="skarmavbild-2023-05-09-kl-141" alt="" src={rio2} />
        <img className="skarmavbild-2023-05-09-kl-141" alt="" src={rio3} />
      </div>
      <div className="material-symbolsarrow-back-io-parent">
        <img
          className="radio-button-checked"
          alt=""
          src="/materialsymbolsarrowbackiosnew.svg"
        />
        <div className="product-name">
          Outon Eyewear/ Collection/ The Rio Rush
        </div>
      </div>
      <div className="header-desktop" onClick={onHeaderDesktopContainerClick}>
        <div className="loggasvg-parent">
          <img
            className="loggasvg-icon"
            alt=""
            src="/loggasvg.svg"
            onClick={onLoggaSVGClick}
          />
          <div className="frame-parent7">
            <div className="frame-wrapper2">
              <div className="news-parent">
                <div className="news" onClick={onNewsTextClick}>
                  News
                </div>
                <div
                  className="all-sunglasses"
                  onClick={onAllSunglassesTextClick}
                >
                  All sunglasses
                </div>
                <div className="news" onClick={onHouseOfOutonClick}>
                  House of Outon
                </div>
              </div>
            </div>
            <div className="search-parent">
              <img className="search-icon" alt="" src="/search.svg" />
              <img className="search-icon" alt="" src="/bag.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="suns-out-shades">Sun’s out. Shades on!</div>
      <div className="button">
        <div className="add-to-bag">Virtual try-on</div>
      </div>
      <div className="picture-carousel-parent">
        <div className="picture-carousel">
          <div className="recommended-for-you-parent">
            <div className="the-rio-rush">RECOMMENDED FOR YOU</div>
            <div className="frame-parent8">
              <div className="frame-parent9">
                <div className="frame-parent10">
                  <img className="frame-icon" alt="" src="/frame-3@2x.png" />
                  <div className="outon-eyewear">
                    <p className="the-berlin-beat">
                      <b>The Berlin Beat</b>
                    </p>
                    <p className="the-berlin-beat">Tortoise/ smoke</p>
                    <p className="the-berlin-beat">
                      <b>$ 170.00</b>
                    </p>
                  </div>
                </div>
                <div className="skarmavbild-2023-05-09-kl-11-parent">
                  <img
                    className="skarmavbild-2023-05-09-kl-11"
                    alt=""
                    src="/skarmavbild-20230509-kl-1148@2x.png"
                  />
                  <div className="the-rio-rush-container">
                    <p className="the-berlin-beat">
                      <b>The Berlin Beat</b>
                    </p>
                    <p className="the-berlin-beat">Shell/Tan smoke</p>
                    <p className="the-berlin-beat">
                      <b>€ 170.00</b>
                    </p>
                  </div>
                </div>
                <div className="skarmavbild-2023-05-09-kl-11-group">
                  <img
                    className="skarmavbild-2023-05-09-kl-111"
                    alt=""
                    src="/skarmavbild-20230509-kl-1147@2x.png"
                  />
                  <div className="the-manhattan-moon-container">
                    <p className="the-berlin-beat">
                      <b>The Manhattan Moon</b>
                    </p>
                    <p className="the-berlin-beat">Black/Black</p>
                    <p className="the-berlin-beat">
                      <b>€ 140.00</b>
                    </p>
                  </div>
                </div>
                <div className="frame-wrapper3">
                  <div className="skarmavbild-2023-05-09-kl-14-group">
                    <img
                      className="skarmavbild-2023-05-09-kl-11"
                      alt=""
                      src="/skarmavbild-20230509-kl-14401@2x.png"
                    />
                    <div className="the-rio-rush-container">
                      <p className="the-berlin-beat">
                        <b>The Rio Rush</b>
                      </p>
                      <p className="the-berlin-beat">Multi/Brown Smoke</p>
                      <p className="the-berlin-beat">
                        <b>€ 140.00</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="vector-parent">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  <div className="the-rio-rush-container">
                    <p className="the-berlin-beat">
                      <b>The Tokyo Twilight</b>
                    </p>
                    <p className="the-berlin-beat">Black/Smoke</p>
                    <p className="the-berlin-beat">
                      <b>€ 170.00</b>
                    </p>
                  </div>
                </div>
                <div className="carouselchevrons">
                  <img
                    className="chevron-left-icon"
                    alt=""
                    src="/chevronleft.svg"
                  />
                  <img
                    className="chevron-right-icon"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
              <div className="button1">
                <div className="find-what-you">Find what you love</div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-small">
          <div className="radiobuttons">
            <img className="rectangle-icon" alt="" src="/rectangle-41@2x.png" />
            <div className="scratch-resistant-parent">
              <div className="scratch-resistant">Scratch resistant</div>
              <div className="our-scratch-resistant-frames">
                Our scratch-resistant frames are made to withstand daily wear
                and tear
              </div>
            </div>
          </div>
          <div className="radiobuttons">
            <img
              className="rectangle-icon"
              alt=""
              src="/rectangle-411@2x.png"
            />
            <div className="scratch-resistant-parent">
              <div className="scratch-resistant">
                Handcrafted sustainability
              </div>
              <div className="our-scratch-resistant-frames">
                <p className="the-berlin-beat">Look and feel your best</p>
                <p className="the-berlin-beat">while reducing your</p>
                <p className="the-berlin-beat">carbon footprint</p>
              </div>
            </div>
          </div>
          <div className="radiobuttons">
            <img
              className="rectangle-icon"
              alt=""
              src="/rectangle-412@2x.png"
            />
            <div className="scratch-resistant-parent">
              <div className="scratch-resistant">Always free shipping</div>
              <div className="our-scratch-resistant-frames">
                Enjoy our eco-friendly shipping for free
              </div>
            </div>
          </div>
        </div>
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
      <div className="footer">
        <div className="footer1">
          <div className="al-copyright-wrapper">
            <div className="al-copyright">
              <div className="alinnehll">
                <div className="loggavariants-parent">
                  <img
                    className="loggavariants-icon"
                    alt=""
                    src="/loggavariants.svg"
                  />
                  <div className="suns-out-shades1">Sun's out, shades on!</div>
                </div>
                <div className="house-of-outon-parent">
                  <b className="product-name">HOUSE OF OUTON</b>
                  <div className="product-name">Our story</div>
                  <div className="product-name">Our materials</div>
                  <div className="product-name">Transparency</div>
                  <div className="product-name">Our stores</div>
                </div>
                <div className="house-of-outon-parent">
                  <b className="product-name">CUSTOMER CARE</b>
                  <div className="product-name">{`Delivery & returns`}</div>
                  <div className="product-name">FAQ</div>
                  <div className="product-name">{`Terms & conditions`}</div>
                  <div className="product-name">Contact us</div>
                </div>
                <div className="newsletter-parent">
                  <b className="product-name">NEWSLETTER</b>
                  <div className="frame-parent20">
                    <div className="e-mail-parent">
                      <div className="product-name">E-mail</div>
                      <div className="product-name">Subscribe</div>
                    </div>
                    <div className="line-div" />
                  </div>
                </div>
              </div>
              <div className="al-copyright-child" />
              <div className="copyright">
                <div className="c-2023-outon">
                  C 2023 Outon company, all right reserved
                </div>
                <div className="socialmedia">
                  <img className="facebook-icon" alt="" src="/facebook.svg" />
                  <img className="facebook-icon" alt="" src="/instagram.svg" />
                  <img className="twitter-icon" alt="" src="/twitter.svg" />
                  <img className="facebook-icon" alt="" src="/tiktok.svg" />
                </div>
              </div>
              <div className="socialmedia1">
                <img className="facebook-icon" alt="" src="/facebook1.svg" />
                <img className="facebook-icon" alt="" src="/instagram1.svg" />
                <img className="twitter-icon" alt="" src="/twitter1.svg" />
                <img className="facebook-icon" alt="" src="/tiktok1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDesktop;
