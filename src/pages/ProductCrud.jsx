import React, { useState, useEffect } from "react"; // Importa o React e os Hooks useState e useEffect
import '../assets/css/ProductCrud.css'; // Importa os estilos CSS específicos para o componente ProductCrud

// Componente responsável por criar, listar e excluir produtos
export function ProductCrud() {
    const [products, setProducts] = useState([]); // Estado para armazenar os produtos
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos produtos
    const [error, setError] = useState(null); // Estado para armazenar erros durante a requisição
    
    // Estado para armazenar os dados de um novo produto a ser adicionado
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
        description: ""
    });

    // Efeito para carregar os produtos ao montar o componente
    useEffect(() => {
        fetchProducts(); // Chama a função para carregar os produtos
    }, []);

    // Função para buscar os produtos na API
    const fetchProducts = () => {
        fetch("http://localhost:3001/products") // Faz uma requisição GET para obter os produtos
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar os produtos'); // Lança um erro se a resposta não for bem-sucedida
                }
                return response.json(); // Retorna os dados em formato JSON
            })
            .then((data) => {
                setProducts(data); // Atualiza o estado dos produtos com os dados recebidos
                setLoading(false); // Indica que o carregamento foi concluído
            })
            .catch(error => {
                console.error('Erro:', error); // Registra o erro no console
                setError('Error: Inicie o server da API'); // Atualiza o estado de erro
                setLoading(false); // Indica que o carregamento foi concluído

            });
    };

    // Função para atualizar o estado do novo produto conforme os campos são preenchidos
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    // Função para adicionar um novo produto
    const handleAddProduct = () => {
        fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct) // Converte os dados do novo produto para JSON e envia na requisição POST
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao adicionar o produto'); // Lança um erro se a resposta não for bem-sucedida
                }
                return response.json(); // Retorna os dados do produto adicionado em formato JSON
            })
            .then((data) => {
                setProducts([...products, data]); // Adiciona o novo produto à lista de produtos
                setNewProduct({
                    name: "",
                    price: "",
                    image: "",
                    description: ""
                }); // Limpa os campos do formulário de adição de produto
            })
            .catch(error => {
                console.error('Erro:', error); // Registra o erro no console
                setError('Erro ao adicionar o produto'); // Atualiza o estado de erro
            });
    };

    // Função para excluir um produto pelo seu ID
    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: "DELETE" // Faz uma requisição DELETE para excluir o produto
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao excluir o produto'); // Lança um erro se a resposta não for bem-sucedida
                }
                setProducts(products.filter(product => product.id !== id)); // Remove o produto da lista de produtos
            })
            .catch(error => {
                console.error('Erro:', error); // Registra o erro no console
                setError('Erro ao excluir o produto'); // Atualiza o estado de erro
            });
    };

    // Renderiza uma mensagem de carregamento enquanto os produtos estão sendo carregados
    if (loading) {
        return <div className="loading crudloading">Carregando...</div>;
    }

    // Renderiza uma mensagem de erro se ocorrer algum erro durante a requisição
    if (error) {
        return <div className="error cruderror">{error}</div>;
    }

    // Renderiza o formulário de adição de produto e a lista de produtos
    return (
        <div className="product-crud-container"> {/* Container principal */}
            {/* Seção para adicionar novo produto */}
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
                    <button onClick={handleAddProduct}>Adicionar Produto</button> {/* Botão para adicionar um novo produto */}
                </div>
            </div>

            {/* Seção para listar e excluir produtos */}
            <div className="deleteContainer">
                <h2>Produtos no Banco</h2>
                {products.length === 0 && <p className="error">Não há produtos no banco de dados.</p>}
                <ul>
                    {/* Mapeia a lista de produtos e renderiza cada produto com um botão para excluí-lo */}
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className="product">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>R${product.price}</p>
                            </div>
                            <button onClick={() => handleDeleteProduct(product.id)}>Excluir</button> {/* Botão para excluir o produto */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


/* 
    Explicações:
        useState: Utilizado para criar estados no componente. No código, useState é usado para gerenciar o estado dos produtos, o estado de carregamento (loading), e o estado de erro (error).
        useEffect: Usado para executar operações assíncronas quando o componente é montado. No código, useEffect é usado para carregar os produtos quando o componente é renderizado pela primeira vez.
        fetch: API nativa para fazer requisições HTTP. É utilizada para buscar, adicionar e excluir produtos da API.
        handleInputChange: Função para atualizar o estado do novo produto conforme os campos do formulário são preenchidos.
        handleAddProduct: Função para adicionar um novo produto à lista de produtos.
        handleDeleteProduct: Função para excluir um produto da lista de produtos.
        Renderização condicional: Usada para exibir mensagens de carregamento ou erro enquanto os produtos estão sendo carregados ou em caso de falha na requisição.
        Mapeamento de listas: Utilizado para iterar sobre a lista de produtos e renderizar cada produto juntamente com um botão para excluí-lo.
    ;
*/