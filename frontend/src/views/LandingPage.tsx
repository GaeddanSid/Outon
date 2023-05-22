import { Link } from 'react-router-dom';
import About from '../components/About';

function LandingPage() {
  return (
    <div className="view-divs">
      <div>
        <p>
          <Link to="/try-on">Try on</Link>
        </p>
      </div>
      <About />
    </div>
  );
}
export default LandingPage;
