import DetailDesktop from '../components/DetailDesktop';
import About from '../components/About';
import Productcarousel from '../components/Productcarousel';
import TestFetch from '../components/TestFetch';

function product() {

  return (
    <div className="view-divs">
      <TestFetch />
      <DetailDesktop />
      <About />
      <Productcarousel />
    </div>
  );
}
export default product;
