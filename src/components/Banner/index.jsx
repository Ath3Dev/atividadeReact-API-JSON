import './style.css'; // Importa o arquivo de estilo CSS para aplicar estilos específicos ao componente

// Componente de banner que exibe informações sobre entrega gratuita, devolução em 90 dias e pagamento seguro
export function Banner() {
    return (
        // Div principal do banner, que contém informações sobre entrega, devolução e pagamento seguro
        <div className="banner">
            {/* Div para exibir informações sobre entrega gratuita */}
            <div className="delivery">
                <h1>Free Delivery</h1> {/* Título indicando entrega gratuita */}
                <h4>For all oders over $50, consectetur adipim scing elit.</h4> {/* Descrição da oferta de entrega gratuita */}
            </div>
            {/* Div para exibir informações sobre devolução em 90 dias */}
            <div className="daysreturn">
                <h1>90 Days Return</h1> {/* Título indicando devolução em 90 dias */}
                <h4>If goods have problems, consectetur adipim scing elit.</h4> {/* Descrição da política de devolução */}
            </div>
            {/* Div para exibir informações sobre pagamento seguro */}
            <div className="securepayment">
                <h1>Secure Payment</h1> {/* Título indicando pagamento seguro */}
                <h4>100% secure payment, consectetur adipim scing elit.</h4> {/* Descrição da segurança do pagamento */}
            </div>
        </div>
    );
}
