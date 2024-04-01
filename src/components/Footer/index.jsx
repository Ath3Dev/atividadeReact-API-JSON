import { Link } from "react-router-dom"; // Importa o componente Link do React Router para criar links de navegação
import './style.css'; // Importa o arquivo de estilo CSS para aplicar estilos específicos ao componente

// Componente de rodapé que exibe informações de localização, links e direitos autorais
export function Footer() {
    return (
        // Div principal do rodapé
        <footer>
            {/* Div para informações de localização */}
            <div className="container">
                <div className="location">
                    <h5>SENAI Cotia - "Ricardo Lerner"</h5> {/* Título da localização */}
                    <h5>R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280</h5> {/* Endereço */}
                </div>
                {/* Div para os links de navegação */}
                <div className="links">
                    <h5>Links</h5> {/* Título dos links */}
                    <div className="link-items">
                        {/* Links para páginas principais */}
                        <Link to="/" className="link-item"><span>Home</span></Link>
                        <Link to="/shop" className="link-item"><span>Shop</span></Link>
                        <Link to="/about" className="link-item"><span>About</span></Link>
                        <Link to="/contact" className="link-item"><span>Contact</span></Link>
                    </div>
                </div>
                {/* Div para links de ajuda */}
                <div className="help">
                    <h5>Help</h5> {/* Título dos links de ajuda */}
                    <div className="link-items">
                        {/* Links de ajuda */}
                        <Link to="#" className="link-item"><span>Payment</span></Link>
                        <Link to="#" className="link-item"><span>Returns</span></Link>
                        <Link to="#" className="link-item"><span>Privacy Policies</span></Link>
                    </div>
                </div>
            </div>
            <hr /> {/* Linha horizontal para separar a seção de direitos autorais */}
            <div className="rightsReserved">
                <h4>2024 Arthur. All rights reverved</h4> {/* Texto de direitos autorais */}
            </div>
        </footer>
    );
}
