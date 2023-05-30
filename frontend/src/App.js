import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './styles/App.css';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import ProductView from './views/ProductView';
import TryOnView from './views/TryOnView';
import Footer from './components/Footer';
import About from './components/About';
function Root() {
    return (_jsxs("div", Object.assign({ className: "app" }, { children: [_jsx("header", Object.assign({ className: "app-header" }, { children: _jsx(Navbar, {}) })), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] })));
}
function App() {
    const router = createHashRouter([
        {
            children: [
                { element: _jsx(LandingPage, {}), path: '/' },
                { element: _jsx(About, {}), path: '/about' },
                { element: _jsx(ProductView, {}), path: '/Product-details' },
                { element: _jsx(TryOnView, {}), path: '/All-sunglasses' },
            ],
            element: _jsx(Root, {}),
        },
    ]);
    return (_jsx(_Fragment, { children: _jsx(RouterProvider, { router: router }) }));
}
export default App;
//# sourceMappingURL=App.js.map