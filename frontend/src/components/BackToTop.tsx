import React, { useEffect, useState } from 'react';
import arrow from '../images/arrow-up.png';
import '../styles/BackToTop.css';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = (): void => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > window.innerHeight / 2);
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="back-to-top">
      <div
        className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <img className="back-to-top-img" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default BackToTop;
