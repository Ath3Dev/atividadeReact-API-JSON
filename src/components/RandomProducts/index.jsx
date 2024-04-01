import { useEffect, useState } from "react";
import './style.css';

export function RandomProducts() {
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar os produtos');
                }
                return response.json();
            })
            .then((data) => {
                const produtos = data;
                const totalProdutos = produtos.length;
                const randomProducts = [];

                while (randomProducts.length < 4) {
                    const randomIndex = Math.floor(Math.random() * totalProdutos);
                    randomProducts.push(produtos[randomIndex]);
                }

                setRandomProducts(randomProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao carregar os produtos');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="randomProducts-container">
            {randomProducts.map((product) => (
                <div key={product.id} className="card-produto">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>R${product.price}</p>
                </div>
            ))}
        </div>
    );
}
