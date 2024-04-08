import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router para navegação entre páginas
import { Banner } from "../components/Banner"; // Importa o componente Banner
import shopImg from '../assets/img/pageShop/imgShop.svg'; // Importa a imagem da loja
import '../assets/css/Shop.css'; // Importa o arquivo de estilos da página Shop

// Componente responsável por exibir a página de compras
export function Shop() {
    // Define estados para armazenar a lista de produtos, o status de carregamento e erros
    const [products, setProducts] = useState([]); // Estado para armazenar a lista de produtos
    const [loading, setLoading] = useState(true); // Estado para controlar o status de carregamento
    const [error, setError] = useState(null); // Estado para armazenar mensagens de erro

    // Efeito utilizado para carregar os produtos ao montar o componente
    useEffect(() => {
        // Função para buscar os produtos da API
        fetch("http://localhost:3001/products")
            .then((response) => {
                // Verifica se a resposta da requisição é bem-sucedida
                if (!response.ok) {
                    throw new Error('Falha ao carregar os produtos'); // Lança um erro se a resposta não for bem-sucedida
                }
                return response.json(); // Converte os dados da resposta para JSON
            })
            .then((data) => {
                setProducts(data); // Atualiza o estado dos produtos com os dados obtidos da API
                setLoading(false); // Define o status de carregamento como falso, indicando que os produtos foram carregados com sucesso
                
                // Verifica se a lista de produtos está vazia e define o estado de erro se nenhum produto for encontrado
                if (data.length === 0) {
                    setError('Nenhum produto encontrado');
                }
            })
            .catch(error => {
                console.error('Erro:', error); // Registra o erro no console
                setError('Erro ao carregar os produtos'); // Define a mensagem de erro
                setLoading(false); // Define o status de carregamento como falso, indicando que ocorreu um erro
            });
    }, []); // O efeito é executado apenas uma vez, após a montagem do componente

    return (
        <div className="shopContainer"> {/* Container principal da página Shop */}
            <div className="shopimg-Container"> {/* Container para exibir a imagem da loja */}
                <img src={shopImg} alt="" /> {/* Exibe a imagem da loja */}
            </div>
            <div className="productsList"> {/* Container para listar os produtos */}
                {loading ? ( // Verifica se está carregando os produtos
                    <div className="loading">Carregando...</div> // Exibe uma mensagem de carregamento enquanto os produtos estão sendo carregados
                ) : error ? ( // Verifica se ocorreu um erro ao carregar os produtos
                    <div className="error">{error}</div> // Exibe uma mensagem de erro se ocorrer algum problema ao carregar os produtos
                ) : (
                    <ul> {/* Lista de produtos */}
                        {products.map((product) => ( // Mapeia os produtos e renderiza cada um deles
                            <li key={product.id}> {/* Define uma chave única para cada produto */}
                                <Link to={`/product/${product.id}`} className="linkStyle"> {/* Link para a página do produto */}
                                    <div className="produto"> {/* Container para exibir cada produto */}
                                        <div className="img"> {/* Div para a imagem do produto */}
                                            <img src={product.image} alt={product.name} /> {/* Exibe a imagem do produto */}
                                        </div>
                                        <div className="text"> {/* Div para o texto do produto */}
                                            <h3>{product.name}</h3> {/* Exibe o nome do produto */}
                                            <p>R${product.price}</p> {/* Exibe o preço do produto */}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Banner /> {/* Renderiza o componente Banner */}
        </div>
    );
}

/* 
    Explicações:
        useState: Utilizado para criar estados no componente. No código, useState é usado para gerenciar o estado dos produtos, o estado de carregamento (loading), e o estado de erro (error).
        useEffect: Usado para executar operações assíncronas quando o componente é montado. No código, useEffect é usado para carregar os produtos quando o componente é renderizado pela primeira vez.
        fetch: API nativa para fazer requisições HTTP. É utilizada para buscar os produtos da API.
        Renderização condicional: Usada para exibir mensagens de carregamento ou erro enquanto os produtos estão sendo carregados ou em caso de falha na requisição.
        Mapeamento de listas: Utilizado para iterar sobre a lista de produtos e renderizar cada produto.
        Componente Link: Usado para criar links entre páginas da aplicação, permitindo a navegação entre elas sem recarregar a página.
        Key prop: Utilizada para fornecer uma chave única a cada elemento filho em um conjunto de dados, ajudando o React a identificar quais itens foram adicionados, removidos ou reordenados.
    ;
*/
