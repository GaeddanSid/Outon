import './styles/App.css';
import React from 'react';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import ProductView from './views/ProductView';
import TryOnView from './views/TryOnView';
import Footer from './components/Footer/Footer';

function Root() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <LandingPage />, path: '/' },
        { element: <ProductView />, path: '/Products' },
        { element: <TryOnView />, path: '/try-on' },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
