import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React para adicionar estados e efeitos a componentes de função
import { useParams } from "react-router-dom"; // Importa o hook useParams do React Router para acessar os parâmetros da URL
import pageInfo from '../assets/img/pageSingleProduct/pageInfo.svg'; // Importa a imagem para a página de informações do produto
import '../assets/css/SingleProduct.css'; // Importa o arquivo de estilos CSS específicos para a página de produto único

// Componente responsável por exibir detalhes de um único produto
export function SingleProduct() {
    const [itemId, setItemId] = useState({}); // Estado para armazenar os detalhes do produto
    const { id } = useParams(); // Extrai o parâmetro "id" da URL usando o hook useParams

    // Função assíncrona para obter os detalhes do produto pelo ID
    const getItemId = async () => {
        try {
            const res = await fetch(`http://localhost:3001/products/${id}`); // Faz uma requisição assíncrona para obter os detalhes do produto pelo ID
            const response = await res.json(); // Converte a resposta da requisição em JSON
            setItemId(response); // Atualiza o estado com os detalhes do produto obtidos da API
        } catch (error) {
            console.error("Error fetching product:", error); // Registra no console se ocorrer algum erro ao buscar o produto
        }
    };

    // Efeito utilizado para buscar os detalhes do produto quando o ID do produto muda
    useEffect(() => {
        getItemId(); // Chama a função para buscar os detalhes do produto
    }, [id]); // O efeito é reexecutado sempre que o ID do produto na URL muda

    return (
        <div className="singleProduct"> {/* Container principal da página de produto único */}
            <div className="pageInfo"> {/* Div para exibir a imagem de informações da página */}
                <img src={pageInfo} alt="" /> {/* Renderiza a imagem de informações da página */}
            </div>
            <div className="productContainer"> {/* Div para conter os detalhes do produto */}
                <div className="img">
                    {itemId.image && <img src={itemId.image} alt="" />} {/* Renderiza a imagem do produto, se disponível */}
                </div>
                <div className="text"> {/* Div para exibir os textos e detalhes do produto */}
                    <h2>{itemId.name}</h2> {/* Exibe o nome do produto */}
                    <h3>R$ {itemId.price}</h3> {/* Exibe o preço do produto */}
                    <div className="descricao"> {/* Div para a descrição do produto */}
                        <strong>{itemId.description}</strong> {/* Exibe a descrição do produto */}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* 
    Explicações adicionais:
    - `useParams`: O hook `useParams` do React Router é utilizado para acessar os parâmetros passados na URL. Neste caso, ele é usado para obter o ID do produto da URL.
    - `useEffect`: O hook `useEffect` do React é usado para realizar efeitos colaterais em componentes funcionais. Aqui, é utilizado para buscar os detalhes do produto quando o ID do produto na URL muda.
    - Requisição assíncrona: A função `getItemId` utiliza `fetch` para fazer uma requisição assíncrona à API e obter os detalhes do produto pelo ID. Essa abordagem assíncrona evita o bloqueio da execução do código enquanto espera pela resposta do servidor.
    - Condicional de renderização: A expressão `{itemId.image && <img src={itemId.image} alt="" />}` é uma condição que verifica se existe uma imagem para o produto. Se houver, a imagem é renderizada; caso contrário, nada é renderizado.
    - Atualização do estado: `setItemId(response)` é usado para atualizar o estado com os detalhes do produto obtidos da API, permitindo que o componente seja renderizado com os dados atualizados.
    - Tratamento de erro: O bloco `try-catch` é utilizado para lidar com erros durante a busca dos detalhes do produto. Se ocorrer um erro, ele será capturado e registrado no console.
*/