import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BackToTop from '../components/BackToTop';
import { useState } from 'react';
import PhoneHeader from '../components/PhoneHeader';
import PolaroidGallery from '../components/PolaroidGallery';
import PhoneImages from '../components/PhoneImages';
import SmFeatures from '../components/SmFeatures2';
import Productcarousel from '../components/Productcarousel';
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
const TryOnView = () => {
    const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };
    return (_jsxs("div", { children: [_jsx(PhoneHeader, {}), _jsx(PhoneImages, {}), _jsx(PolaroidGallery, {}), _jsx(SmFeatures, {}), _jsx(Productcarousel, { onProductClick: handleProductClick }), _jsx(BackToTop, {})] }));
};
export default TryOnView;
//# sourceMappingURL=TryOnView.js.map