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
import { useEffect, useState } from "react";
import { BsPlus, BsX, BsCheck2 } from 'react-icons/bs';
import rio1 from '../images/Product_Rio1.png';
import rio2 from '../images/Product_Rio2.png';
import rio3 from '../images/Product_Rio3.png';
import nairobii1 from '../images/Product_Nairobi1.png';
import nairobii2 from '../images/Product_Nairobi2.png';
import nairobii3 from '../images/Product_Nairobi3.png';
import tokyo1 from '../images/Product_Tokyo1.png';
import tokyo2 from '../images/Product_Tokyo2.png';
import tokyo3 from '../images/Product_Tokyo3.png';
import manhattan1 from '../images/Product_Manhattan1.png';
import manhattan2 from '../images/Product_Manhattan2.png';
import manhattan3 from '../images/Product_Manhattan3.png';
import berlin1 from '../images/Product_Berlin1.png';
import berlin2 from '../images/Product_Berlin2.png';
import berlin3 from '../images/Product_Berlin3.png';
import pink1 from '../images/SS_Pink_1.png';
import pink2 from '../images/SS_Pink_2.png';
import pink3 from '../images/SS_Pink_3.png';
import '../styles/ProductDetails.css';
function ProductDetails({ product }) {
    const [products, setProducts] = useState([]);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };
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
    const getImagePath = (image) => {
        switch (product.name) {
            case 'Rio Rush':
                switch (image) {
                    case 'image1':
                        return rio1;
                    case 'image2':
                        return rio2;
                    case 'image3':
                        return rio3;
                    default:
                        return '';
                }
            case 'Nairobi Nights':
                switch (image) {
                    case 'image1':
                        return nairobii1;
                    case 'image2':
                        return nairobii2;
                    case 'image3':
                        return nairobii3;
                    default:
                        return '';
                }
            case 'Tokyo Twilight':
                switch (image) {
                    case 'image1':
                        return tokyo1;
                    case 'image2':
                        return tokyo2;
                    case 'image3':
                        return tokyo3;
                    default:
                        return '';
                }
            case 'Manhattan Moon':
                switch (image) {
                    case 'image1':
                        return manhattan1;
                    case 'image2':
                        return manhattan2;
                    case 'image3':
                        return manhattan3;
                    default:
                        return '';
                }
            case 'Berlin Beat':
                switch (image) {
                    case 'image1':
                        return berlin1;
                    case 'image2':
                        return berlin2;
                    case 'image3':
                        return berlin3;
                    default:
                        return '';
                }
            case 'Sydney Splendid':
                switch (image) {
                    case 'image1':
                        return pink1;
                    case 'image2':
                        return pink2;
                    case 'image3':
                        return pink3;
                    default:
                        return '';
                }
            default:
                return '';
        }
    };
    return (_jsxs("div", Object.assign({ className: "productdetail" }, { children: [_jsxs("div", Object.assign({ className: "productimage" }, { children: [_jsx("img", { className: "skarmavbild-2023-05-09-kl-14 hover-effect", alt: product.name, src: getImagePath('image1') }), _jsxs("div", Object.assign({ className: "skarmavbild-2023-05-09-kl-14-parent" }, { children: [_jsx("img", { className: "skarmavbild-2023-05-09-kl-141 hover-effect", alt: "", src: getImagePath('image1') }), _jsx("img", { className: "skarmavbild-2023-05-09-kl-141 hover-effect", alt: "", src: getImagePath('image2') }), _jsx("img", { className: "skarmavbild-2023-05-09-kl-141 hover-effect", alt: "", src: getImagePath('image3') })] })), _jsx("div", Object.assign({ className: "button" }, { children: _jsx("div", Object.assign({ className: "virtual-try-on" }, { children: "Virtual try-on" })) }))] })), _jsxs("div", Object.assign({ className: "cardprojectdetail" }, { children: [_jsxs("div", Object.assign({ className: "project-info" }, { children: [_jsx("div", Object.assign({ className: "the-rio-rush-wrapper" }, { children: _jsx("div", Object.assign({ className: "the-rio-rush2" }, { children: product.name })) })), _jsx("div", Object.assign({ className: "outon-eyewear-wrapper" }, { children: _jsx("div", Object.assign({ className: "outon-eyewear" }, { children: "Outon Eyewear" })) })), _jsx("div", Object.assign({ className: "outon-eyewear-wrapper" }, { children: _jsxs("b", Object.assign({ className: "outon-eyewear" }, { children: ["\u20AC ", product.price] })) })), _jsxs("div", Object.assign({ className: "table" }, { children: [_jsxs("div", Object.assign({ className: "sizeoptions" }, { children: [_jsx("div", Object.assign({ className: "s" }, { children: "Size" })), _jsxs("div", Object.assign({ className: "options" }, { children: [_jsx("label", Object.assign({ htmlFor: "S/M" }, { children: "S/M" })), _jsx("input", { type: "checkbox", name: "S/M", value: "S/M" }), _jsx("label", Object.assign({ htmlFor: "M/L" }, { children: "M/L" })), _jsx("input", { type: "checkbox", name: "M/L", value: "M/L" })] }))] })), _jsxs("div", Object.assign({ className: "coloroptions" }, { children: [_jsx("div", Object.assign({ className: "color" }, { children: _jsx("div", Object.assign({ className: "s" }, { children: "Color" })) })), _jsx("div", Object.assign({ className: "options" }, { children: _jsxs("div", Object.assign({ className: "optionscolors" }, { children: [_jsxs("div", Object.assign({ className: "option2" }, { children: [_jsx("div", { className: "option1color1" }), _jsx("div", { className: "option1color2" })] })), _jsxs("div", Object.assign({ className: "option2" }, { children: [_jsx("div", { className: "option2color1" }), _jsx("div", { className: "option1color2" })] })), _jsxs("div", Object.assign({ className: "option2" }, { children: [_jsx("div", { className: "option3color1" }), _jsx("div", { className: "option1color2" })] }))] })) }))] })), _jsx("div", Object.assign({ className: "description" }, { children: _jsxs("div", Object.assign({ className: "descriptonoption", onClick: toggleDescription }, { children: [isDescriptionVisible ? '' : '', _jsx("div", Object.assign({ className: "descriptionheader" }, { children: isDescriptionVisible ? (_jsxs("div", { children: [_jsx("div", Object.assign({ className: "s" }, { children: "Description" })), _jsx("div", Object.assign({ className: "product-description" }, { children: product.description }))] })) : (_jsx("div", Object.assign({ className: "s" }, { children: "Description" }))) })), _jsx("div", Object.assign({ className: "expand" }, { children: isDescriptionVisible ? (_jsx(BsX, { onClick: toggleDescription })) : (_jsx(BsPlus, { onClick: toggleDescription })) }))] })) }))] }))] })), _jsx("button", Object.assign({ className: "buttonadd-to-bag" }, { children: "Add to Bag" })), _jsx("div", Object.assign({ className: "tinypromises" }, { children: _jsxs("div", Object.assign({ className: "s-parent" }, { children: [_jsxs("div", Object.assign({ className: "icoutline-done-parent" }, { children: [_jsx(BsCheck2, {}), _jsx("div", Object.assign({ className: "uvauvb-protection" }, { children: "100% UVA+UVB protection" }))] })), _jsxs("div", Object.assign({ className: "icoutline-done-parent" }, { children: [_jsx(BsCheck2, {}), _jsx("div", Object.assign({ className: "uvauvb-protection" }, { children: "Recycled materials" }))] })), _jsxs("div", Object.assign({ className: "icoutline-done-parent" }, { children: [_jsx(BsCheck2, {}), _jsx("div", Object.assign({ className: "uvauvb-protection" }, { children: "100% scratchfree" }))] }))] })) }))] }))] })));
}
export default ProductDetails;
//# sourceMappingURL=ProductDetails.js.map