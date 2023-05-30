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
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../images/Product_Nairobi1.png';
import image2 from '../images/Product_Tokyo1.png';
import image3 from '../images/Product_Manhattan1.png';
import image4 from '../images/Product_Rio1.png';
import image5 from '../images/Product_Berlin1.png';
import image6 from '../images/SS_Pink_1.png';
// import '../styles/global.css';
import '../styles/Productcarousel.css';
function Productcarousel2({ onProductClick }) {
    const [products, setProducts] = useState([]);
    // const [productImages, setProductImages] = useState<string[]>([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => __awaiter(this, void 0, void 0, function* () {
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
    function getImagePath(image) {
        switch (image) {
            case 'Product_Nairobi1.png':
                return image1;
            case 'Product_Tokyo1.png':
                return image2;
            case 'Product_Manhattan1.png':
                return image3;
            case 'Product_Rio1.png':
                return image4;
            case 'Product_Berlin1.png':
                return image5;
            case 'SS_Pink_1.png':
                return image6;
            default:
                return '';
        }
    }
    // Shuffle array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const getFourRandomProducts = () => {
        const shuffledProducts = shuffleArray(products);
        return shuffledProducts.slice(0, 4);
    };
    return (_jsxs("div", Object.assign({ className: "carousel-2" }, { children: [_jsx("div", Object.assign({ className: "the-rio-rush" }, { children: "RECOMMENDED FOR YOU" })), _jsx(Carousel, Object.assign({ interval: null, slide: true, indicators: false }, { children: Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (_jsx(Carousel.Item, { children: _jsx("div", Object.assign({ className: "d-flex w-100" }, { children: getFourRandomProducts().map((product) => (_jsxs("div", Object.assign({ className: "product-item", onClick: () => onProductClick(product) }, { children: [_jsx("img", { className: "d-block hover-effect", src: getImagePath(product.image), alt: product.name }), _jsxs("div", Object.assign({ className: "product-info" }, { children: [_jsx("h3", { children: product.name }), _jsx("p", Object.assign({ className: "product-text" }, { children: product.color })), _jsxs("p", Object.assign({ className: "product-text" }, { children: [_jsx("strong", { children: "$" }), product.price] }))] }))] }), product.id))) })) }, index))) })), _jsx(Link, Object.assign({ to: "/All-sunglasses" }, { children: _jsx("button", Object.assign({ className: "find" }, { children: "Find what you love" })) }))] })));
}
export default Productcarousel2;
//# sourceMappingURL=Recommended.js.map