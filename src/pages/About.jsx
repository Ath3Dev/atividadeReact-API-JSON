import { Link } from "react-router-dom"; // Importa o componente Link do React Router para criar links de navegação
import aboutImg from '../assets/img/pageAbout/aboutImg.svg'; // Importa a imagem utilizada na página de 'Sobre'
import '../assets/css/About.css'; // Importa o arquivo de estilos CSS específicos para a página de 'Sobre'

// Componente responsável por exibir informações sobre a empresa
export function About() {
    return (
        <div className="about"> {/* Container principal da página de 'Sobre' */}
            <div className="about-img"> {/* Div para exibir a imagem */}
                <img src={aboutImg} alt="" /> {/* Renderiza a imagem da página de 'Sobre' */}
            </div>
            <div className="about-text"> {/* Div para exibir o texto */}
                <h1>Seja bem-vindo!</h1> {/* Título da seção */}
                <p>Bem-vindo ao nosso e-commerce de imóveis, onde tornamos o processo de encontrar e adquirir a casa dos seus sonhos mais fácil e acessível do que nunca. Aqui está um pouco sobre quem somos e o que oferecemos:</p> {/* Parágrafo introdutório */}

                <h1>Nossa Missão: </h1> {/* Título da seção */}
                <p>Nosso objetivo é simplificar e aprimorar a experiência de compra e venda de imóveis, conectando compradores e vendedores de maneira eficiente e transparente. Estamos comprometidos em oferecer um serviço excepcional, fornecendo uma ampla gama de opções imobiliárias e facilitando todo o processo, desde a pesquisa até a conclusão da transação.</p> {/* Parágrafo explicando a missão da empresa */}

                <h1>Variedade de Imóveis:</h1> {/* Título da seção */}
                <p>Oferecemos uma ampla seleção de imóveis para atender a diversas necessidades e preferências. Desde apartamentos urbanos modernos até casas espaçosas nos subúrbios, passando por propriedades comerciais e terrenos para desenvolvimento, temos opções para todos os gostos e orçamentos. Nossa plataforma intuitiva permite que os clientes filtrem e personalizem suas pesquisas para encontrar o imóvel perfeito.</p> {/* Parágrafo explicando a variedade de imóveis oferecidos */}

                {/* Outros parágrafos explicando os valores e recursos da empresa */}

                <div className="contato"> {/* Div para o formulário de contato */}
                    <h1>Entre em Contato:</h1> {/* Título da seção de contato */}
                    <p>Estamos comprometidos em fornecer uma experiência excepcional do início ao fim. Se você está procurando comprar, vender ou simplesmente precisa de conselhos sobre questões imobiliárias, não hesite em nos contatar. Estamos aqui para ajudar a tornar seus sonhos imobiliários uma realidade.</p> {/* Parágrafo incentivando o contato */}
                    <Link to="/contact">Contato</Link> {/* Link para a página de contato */}
                </div>
            </div>
        </div>
    );
}
/* 
    O que é o componente Link?
        O componente Link é fornecido pelo React Router e é usado para criar links de navegação entre diferentes rotas em um aplicativo React.
        Ele substitui a tag <a> padrão do HTML e fornece uma navegação suave entre as páginas sem recarregar a página inteira.

    O que é a importação de imagens?
        A importação de imagens permite que você carregue arquivos de imagem diretamente no código JavaScript ou JSX.
        Isso é útil ao trabalhar com frameworks como o React, onde você pode importar a imagem diretamente em um componente
        e usá-la como uma URL de imagem em elementos HTML, como <img>.

    O que é a importação de estilos CSS?
        A importação de estilos CSS permite adicionar estilos específicos a um componente React. Isso é feito importando
        arquivos CSS diretamente no componente, o que permite aplicar estilos específicos apenas a esse componente,
        garantindo uma melhor organização e encapsulamento de estilos.
*/
