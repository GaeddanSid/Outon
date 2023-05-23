import '../styles/StyleFeed.css';
import StyleFeedCatEye from '../images/Stylefeed_cateye.jpg';
import StyleFeedShade from '../images/Stylefeed_Shade.jpg';
import StyleFeedMany from '../images/Stylefeed_many.jpg';
import StyleFeedStuff from '../images/Stylefeed_stuff.jpg';
import StyleFeedRound from '../images/Stylefeed_round.jpg';
import StyleFeedFashion from '../images/Stylefeed_fashion.jpg';
import StyleFeedPlastic from '../images/Stylefeed_plastic.jpg';
import StyleFeedMen from '../images/Stylefeed_men.jpg';
import StyleFeedBirds from '../images/Stylefeed_birds.jpg';
import StyleFeedChair from '../images/Stylefeed_chair.jpg';
import StyleFeedPlant from '../images/Stylefeed_plant.jpg';

import { FunctionComponent } from 'react';
const StyleFeed: FunctionComponent = () => {
  return (
    <div className="style-feed-section-inner">
      <div className="frame-wrapper2">
        <div className="style-feed-wrapper">
          <div className="style-feed">
            <div className="style-feed1">STYLE FEED</div>
            <div className="frame-parent12">
              <div className="frame-parent13">
                <img className="frame-child5" alt="" src={StyleFeedStuff} />
                <div className="frame-wrapper3">
                  <img className="frame-child6" alt="" src={StyleFeedShade} />
                </div>
                <img className="frame-child7" alt="" src={StyleFeedCatEye} />
                <img
                  className="skarmavbild-2023-05-19-kl-08"
                  alt=""
                  src={StyleFeedMany}
                />
              </div>
              <div className="frame-parent14">
                <div className="frame-parent12">
                  <img className="frame-child8" alt="" src={StyleFeedChair} />
                  <img className="frame-child8" alt="" src={StyleFeedPlant} />
                </div>
                <img className="frame-child10" alt="" src={StyleFeedBirds} />
                <div className="frame-parent12">
                  <img className="frame-child8" alt="" src={StyleFeedFashion} />
                  <img className="frame-child8" alt="" src={StyleFeedMen} />
                </div>
                <div className="frame-parent12">
                  <img className="frame-child8" alt="" src={StyleFeedRound} />
                  <img className="frame-child8" alt="" src={StyleFeedPlastic} />
                </div>
              </div>
            </div>
            <div className="button6">
              <div className="see-more1">See more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleFeed;
