import React, { useState, useEffect } from "react";
import { Banner } from "../components/Banner";
import shopImg from '../assets/img/pageShop/imgShop.svg';
import '../assets/css/Shop.css'

export function Shop() {
    const [products, setProducts] = useState([]);
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
                setProducts(data);
                setLoading(false);
                if (data.length === 0) {
                    setError('Nenhum produto encontrado');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao carregar os produtos');
                setLoading(false);
            });
    }, []);

    return (
        <div className="shopContainer">
            <div className="shopimg-Container">
                <img src={shopImg} alt="" />
            </div>

            <div className="productsList">
                {loading ? (
                    <div className="loading">Carregando...</div>
                ) : error ? (
                    <div className="error">{error}</div>
                ) : (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <div className="produto">
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>R${product.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Banner />
        </div>
    );
}
