import BackToTop from '../components/BackToTop';
import React from 'react';
import PhoneHeader from '../components/PhoneHeader';
import PolaroidGallery from '../components/PolaroidGallery';
import PhoneImages from '../components/PhoneImages';
import SmFeatures from '../components/SmFeatures2';
import Productcarousel from '../components/Productcarousel';
const TryOnView = () => {
  return (
    <div>
      <PhoneHeader />
      <PhoneImages />
      <PolaroidGallery />

      <SmFeatures />
      <Productcarousel />
      <BackToTop />
    </div>
  );
};

export default TryOnView;
