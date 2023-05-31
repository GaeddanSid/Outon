import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import About from '../components/About';
import BackToTop from '../components/BackToTop';
import Productcarousel from '../components/Productcarousel';
import ProductDetails from '../components/ProductDetails';
import SmallFeatures from '../components/SmallFeatures';
// import { useParams } from 'react-router-dom';
import '../styles/ProductView.css';
const defaultProduct = {
    id: 6,
    name: 'Berlin Beat',
    type: '',
    price: 170,
    size: 'S/M',
    color: 'Shell/Tan smoke',
    description: 'A frame with a classic character that suits your everyday style. Made with 100% Portuguese acetate. Available in x different colors and two different sizes.',
    details: '',
    image: 'Product_Berlin1.png',
    image2: 'Product_Berlin2.png',
    image3: 'Product_Berlin3.png',
};
function product() {
    // const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };
    return (_jsxs("div", Object.assign({ className: "" }, { children: [_jsx(ProductDetails, { product: selectedProduct }), _jsx(Productcarousel, { onProductClick: handleProductClick }), _jsx(SmallFeatures, {}), _jsx(About, {}), _jsx(BackToTop, {})] })));
}
export default product;
//# sourceMappingURL=ProductView.js.map