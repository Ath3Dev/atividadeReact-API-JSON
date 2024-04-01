import { RandomProducts } from '../components/RandomProducts'; // Importa o componente RandomProducts para exibir produtos aleatórios
import singleSeater from '../assets/img/pageHome/singleSeater.svg'; // Importa a imagem do sofá individual
import sideTable from '../assets/img/pageHome/sideTable.svg'; // Importa a imagem da mesa lateral
import sideCouch from '../assets/img/pageHome/sideCouch.svg'; // Importa a imagem do sofá lateral
import asgaardCouch from '../assets/img/pageHome/asgaardCouch.svg'; // Importa a imagem do sofá Asgaard
import '../assets/css/Home.css'; // Importa o arquivo de estilos CSS específicos para a página Home

// Componente responsável por exibir a página inicial da aplicação
export function Home() {
    return (
        <main> {/* Elemento principal da página */}
            <div className="yellow-bg"> {/* Div para a seção com fundo amarelo */}
                <div className="text"> {/* Div para o texto e botão */}
                    <h1>Rocket single seater</h1> {/* Título */}
                    <div className="button"> {/* Div para o botão */}
                        <button>Shop Now</button> {/* Botão para redirecionar para a página de compras */}
                        <hr /> {/* Linha horizontal */}
                    </div>
                </div>
                <div className="img"> {/* Div para a imagem */}
                    <img src={singleSeater} alt="Single Seater img/svg" /> {/* Renderiza a imagem do sofá individual */}
                </div>
            </div>
            <div className="grey-bg"> {/* Div para a seção com fundo cinza */}
                <div className="cornerFurniture"> {/* Div para o móvel de canto */}
                    <img src={sideTable} alt="" /> {/* Renderiza a imagem da mesa lateral */}
                    <div className="viewMore"> {/* Div para o botão "Ver Mais" */}
                        <button>View More</button> {/* Botão para redirecionar para mais detalhes */}
                        <hr /> {/* Linha horizontal */}
                    </div>
                </div>
                <div className="cornerFurniture"> {/* Div para o móvel de canto */}
                    <img src={sideCouch} alt="" /> {/* Renderiza a imagem do sofá lateral */}
                    <div className="viewMore"> {/* Div para o botão "Ver Mais" */}
                        <button>View More</button> {/* Botão para redirecionar para mais detalhes */}
                        <hr /> {/* Linha horizontal */}
                    </div>
                </div>
            </div>

            <div className="topPicks"> {/* Div para a seção de "Escolhas Principais" */}
                <div className="text"> {/* Div para o texto */}
                    <h1>Top Picks For You</h1> {/* Título */}
                    <h6>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h6> {/* Subtítulo */}
                </div>
                <RandomProducts /> {/* Componente para exibir produtos aleatórios */}
                <div className="viewMore"> {/* Div para o botão "Ver Mais" */}
                    <button>View More</button> {/* Botão para redirecionar para mais produtos */}
                    <hr /> {/* Linha horizontal */}
                </div>
            </div>

            <div className="arrivals"> {/* Div para a seção de "Novos Chegados" */}
                <div className="img"> {/* Div para a imagem */}
                    <img src={asgaardCouch} alt="" /> {/* Renderiza a imagem do sofá Asgaard */}
                </div>
                <div className="text"> {/* Div para o texto e botão */}
                    <h3>New Arrivals</h3> {/* Título */}
                    <h1>Asgaard Sofa</h1> {/* Subtítulo */}
                    <button>Order Now</button> {/* Botão para redirecionar para a página de pedido */}
                </div>
            </div>
            
            {/* Fim do elemento principal */}
        </main> 
    );
}
