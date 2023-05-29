import About from '../components/About';
import Productcarousel from '../components/Productcarousel';
import ProductDetails from '../components/ProductDetails';
import SmallFeatures from '../components/SmallFeatures';

import '../styles/ProductView.css'

function product() {

  return (
    <div className="">

      <ProductDetails />
      <Productcarousel />
      <SmallFeatures />
      <About />

    </div>
  );
}
export default product;
