var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import About from '../components/About';
import BackToTop from '../components/BackToTop';
import Productcarousel from '../components/Productcarousel';
import ProductDetails from '../components/ProductDetails';
import SmallFeatures from '../components/SmallFeatures';
import '../styles/ProductView.css';
function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id);
    useEffect(() => {
        fetchProduct();
    }, [id]);
    const fetchProduct = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:8080/products/${id}`);
            const jsonData = yield response.json();
            console.log('Fetched product: ', jsonData);
            setProduct(jsonData);
        }
        catch (error) {
            console.error('Error fetching product from database', error);
        }
    });
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
    const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };
    return (_jsxs("div", Object.assign({ className: "" }, { children: [_jsx(ProductDetails, { product: product || selectedProduct }), _jsx(Productcarousel, { onProductClick: handleProductClick }), _jsx(SmallFeatures, {}), _jsx(About, {}), _jsx(BackToTop, {})] })));
}
export default ProductDetailPage;
//# sourceMappingURL=ProductView.js.map