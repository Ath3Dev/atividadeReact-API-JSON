import { useEffect, useState } from "react";
import './style.css';
import { Link } from "react-router-dom";

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
                if (totalProdutos === 0) {
                    throw new Error('Não há produtos no Banco de Dados');
                }
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
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="randomProducts-container">
            {randomProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="card-produto">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>R${product.price}</p>
                </Link>
            ))}
        </div>
    );
}
