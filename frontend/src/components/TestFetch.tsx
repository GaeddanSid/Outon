import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  size: string;
  color: string;
  description: string;
  details: string;
  image: string;
  image2: string;
  image3: string;
}

function TestFetch () {

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
  return(

    <div>
    {products.map((item) => (
      <div key={item.color}>
        <p>Namn: {item.name}</p>
        <p>Pris: {item.price}</p>
        <p>Size: {item.size}</p>
        <p>Description: {item.description}</p>
      </div>
    ))}
  </div>
  )
}

export default TestFetch
