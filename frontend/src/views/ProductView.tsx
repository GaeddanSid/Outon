import React, { useEffect, useState } from 'react';

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  colour: string;
  size: string;
}

function product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products');
        const jsonData = await response.json();
        setProducts(jsonData);
        console.log(response);
        console.log(jsonData);
      } catch (error) {
        console.error('Unavailable to get data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-divs">
      <div>product</div>
      <div>
        {products.map((item) => (
          <div key={item.colour}>
            Titel: {item.title}, Pris: {item.price}, Beskrivning:{' '}
            {item.description}, Storlek: ??? {item.size}
          </div>
        ))}
      </div>
    </div>
  );
}
export default product;
