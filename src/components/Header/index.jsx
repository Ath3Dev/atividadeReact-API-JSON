import { Link } from "react-router-dom"; // Importa o componente Link do React Router para criar links de navegação
import { LuUserCog } from "react-icons/lu"; // Importa o ícone LuUserCog do pacote react-icons para representar configurações de usuário
import { HiMiniMagnifyingGlass } from "react-icons/hi2"; // Importa o ícone HiMiniMagnifyingGlass do pacote react-icons para representar uma lupa de pesquisa
import { TiShoppingCart } from "react-icons/ti"; // Importa o ícone TiShoppingCart do pacote react-icons para representar um carrinho de compras
import { FaRegHeart } from "react-icons/fa"; // Importa o ícone FaRegHeart do pacote react-icons para representar uma lista de desejos
import './style.css'; // Importa o arquivo de estilo CSS para aplicar estilos específicos ao componente

// Componente de cabeçalho que exibe a barra de navegação e ícones de ação
export function Header() {
    return (
        // Elemento de cabeçalho principal
        <header>
            {/* Lista de navegação com links para diferentes páginas */}
            <div className="nav-list">
                {/* Links para páginas principais */}
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/shop" className="nav-item">Shop</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
            {/* Ícones de ação para configurações de usuário, pesquisa, lista de desejos e carrinho de compras */}
            <div className="nav-icons">
                {/* Botão para acessar a página de administração de produtos (requer autenticação de administrador) */}
                <Link to="/productcrud?username=admin&password=admin"><button><LuUserCog /></button></Link>
                {/* Botão para pesquisa */}
                <button><HiMiniMagnifyingGlass /></button>
                {/* Botão para lista de desejos */}
                <button><FaRegHeart /></button>
                {/* Botão para carrinho de compras */}
                <button><TiShoppingCart /></button>
            </div>
        </header>
    );
}
