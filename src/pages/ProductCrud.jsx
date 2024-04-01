import React, { useState, useEffect } from "react";
import '../assets/css/ProductCrud.css';

export function ProductCrud() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
        description: ""
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
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
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao carregar os produtos');
                setLoading(false);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleAddProduct = () => {
        fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao adicionar o produto');
                }
                return response.json();
            })
            .then((data) => {
                setProducts([...products, data]);
                setNewProduct({
                    name: "",
                    price: "",
                    image: "",
                    description: ""
                });
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao adicionar o produto');
            });
    };

    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao excluir o produto');
                }
                setProducts(products.filter(product => product.id !== id));
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao excluir o produto');
            });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="product-crud-container">
            <div className="addContainer">
                <h2>Adicionar Novo Produto</h2>
                <div className="addProduct">
                    <div className="addProduct-input">
                        <input
                            type="text"
                            placeholder="Nome do Produto"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Preço do Produto"
                            name="price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="URL da Imagem"
                            name="image"
                            value={newProduct.image}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="addProduct-textarea">
                        <textarea
                            placeholder="Insira a Descrição do Produto"
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleAddProduct}>Adicionar Produto</button>
                </div>
            </div>

            <div className="deleteContainer">
                <h2>Produtos</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="product">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>R${product.price}</p>
                            </div>
                            <button onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
