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
import { useState, useEffect } from 'react';
import '../styles/Phone.css';
import Image1 from '../images/Product_Manhattan1.png';
import Image2 from '../images/Product_Berlin1.png';
import Image3 from '../images/Product_Rio1.png';
import Image5 from '../images/Product_Nairobi1.png';
import Image4 from '../images/SS_Pink_2.png';
import Image6 from '../images/Product_Tokyo1.png';
const PhoneImages = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:8080/products');
            const jsonData = yield response.json();
            console.log('Fetched: ', jsonData);
            setProducts(jsonData);
        }
        catch (error) {
            console.error('No response from database', error);
        }
    });
    return (_jsxs("div", { children: [_jsx("h2", Object.assign({ id: "my-custom-heading" }, { children: "Find your perfect shades" })), _jsx("div", Object.assign({ className: "phone-images-container" }, { children: products.map((product, index) => (_jsxs("div", Object.assign({ className: "phone-image" }, { children: [getImageByIndex(index) && (_jsx("img", { src: getImageByIndex(index), alt: `Image ${index + 1}` })), _jsx("p", { children: product.name }), _jsxs("p", { children: ["$", product.price] })] }), index))) })), _jsx("div", { style: { marginBottom: '150px' } })] }));
};
const getImageByIndex = (index) => {
    switch (index) {
        case 0:
            return Image1;
        case 1:
            return Image2;
        case 2:
            return Image3;
        case 3:
            return Image4;
        case 4:
            return Image5;
        case 5:
            return Image6;
        default:
            return undefined;
    }
};
export default PhoneImages;
//# sourceMappingURL=PhoneImages.js.map