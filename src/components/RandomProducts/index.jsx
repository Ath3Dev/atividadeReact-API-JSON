import { useEffect, useState } from "react"; // Importa os hooks useEffect e useState do React para gerenciar efeitos colaterais e estados
import './style.css'; // Importa o arquivo de estilo CSS para aplicar estilos específicos ao componente

// Componente que exibe produtos aleatórios
export function RandomProducts() {
    // Define estados para armazenar produtos aleatórios, estado de carregamento e erros
    const [randomProducts, setRandomProducts] = useState([]); // Estado para armazenar produtos aleatórios
    const [loading, setLoading] = useState(true); // Estado para indicar se o componente está carregando
    const [error, setError] = useState(null); // Estado para armazenar erros durante o carregamento

    // Efeito utilizado para buscar produtos aleatórios ao montar o componente
    useEffect(() => {
        // Função assíncrona para buscar produtos na API
        const fetchRandomProducts = async () => {
            try {
                // Faz uma requisição à API para obter a lista de produtos
                const response = await fetch("http://localhost:3001/products");
                // Verifica se a resposta da requisição foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Falha ao carregar os produtos'); // Lança um erro se a resposta não for ok
                }
                // Converte a resposta para o formato JSON
                const data = await response.json();
                // Obtém a lista de produtos da resposta
                const produtos = data;
                // Calcula o total de produtos
                const totalProdutos = produtos.length;
                // Inicializa uma lista para armazenar os produtos aleatórios
                const randomProducts = [];

                // Loop para selecionar 4 produtos aleatórios
                while (randomProducts.length < 4) {
                    // Gera um índice aleatório dentro do intervalo de produtos
                    const randomIndex = Math.floor(Math.random() * totalProdutos);
                    // Adiciona o produto correspondente ao índice aleatório à lista de produtos aleatórios
                    randomProducts.push(produtos[randomIndex]);
                }

                // Define o estado dos produtos aleatórios com a lista gerada
                setRandomProducts(randomProducts);
                // Define o estado de carregamento como false
                setLoading(false);
            } catch (error) {
                console.error('Erro:', error); // Registra o erro no console
                // Define o estado de erro com a mensagem de erro correspondente
                setError('Erro ao carregar os produtos');
                // Define o estado de carregamento como false
                setLoading(false);
            }
        };

        // Chama a função para buscar produtos aleatórios ao montar o componente
        fetchRandomProducts();
    }, []); // O segundo parâmetro vazio indica que o efeito é executado apenas uma vez, ao montar o componente

    // Renderiza uma mensagem de "Carregando..." enquanto o componente estiver carregando
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Renderiza uma mensagem de erro caso ocorra algum erro durante o carregamento
    if (error) {
        return <div>{error}</div>;
    }

    // Renderiza a lista de produtos aleatórios
    return (
        <div className="randomProducts-container">
            {/* Mapeia os produtos aleatórios e renderiza um card para cada um */}
            {randomProducts.map((product) => (
                <div key={product.id} className="card-produto">
                    <img src={product.image} alt={product.name} /> {/* Renderiza a imagem do produto */}
                    <h3>{product.name}</h3> {/* Renderiza o nome do produto */}
                    <p>R${product.price}</p> {/* Renderiza o preço do produto */}
                </div>
            ))}
        </div>
    );
}

/* 
    O que são Hooks?
        Hooks são funções especiais fornecidas pelo React que permitem que você use o estado e outros recursos do React em componentes de função.
        Eles permitem que você "enganche" funcionalidades adicionais em seus componentes de função, o que ajuda a tornar o código mais 
        legível, escalável e fácil de manter. Os hooks são fundamentais para o desenvolvimento de componentes de função no React.

    O que é o useState?
        O useState é um hook do React que permite adicionar um estado a componentes de função. Um estado é uma variável especial que pode 
        armazenar dados e fazer com que o componente seja renderizado novamente sempre que o estado for atualizado. No componente RandomProducts,
        o useState é utilizado para armazenar os produtos aleatórios obtidos da API.

    O que é o useEffect?
        O useEffect é outro hook do React que permite realizar efeitos colaterais em componentes de função. Efeitos colaterais são ações que 
        ocorrem fora da renderização, como chamadas de API, manipulação do DOM ou assinaturas de eventos. No componente RandomProducts,
        o useEffect é utilizado para buscar os produtos aleatórios da API quando o componente é montado.

    O que é o fetch?
        O fetch é uma API(Application Programming Interface) JavaScript moderna que fornece uma maneira simples e poderosa de buscar recursos na rede. Ele é utilizado para 
        fazer requisições HTTP para servidores e obter dados. No componente RandomProducts, o fetch é utilizado para fazer uma requisição à
        API que retorna a lista de produtos aleatórios.
*/
