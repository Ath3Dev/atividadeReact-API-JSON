import { Link } from "react-router-dom";
import aboutImg from '../assets/img/pageAbout/aboutImg.svg'
import '../assets/css/About.css'

export function About() {
    return (
        <div className="about">
            <div className="about-img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="about-text">
                <h1>Seja bem-vindo!</h1>
                <p>Bem-vindo ao nosso e-commerce de imóveis, onde tornamos o processo de encontrar e adquirir a casa dos seus sonhos mais fácil e acessível do que nunca. Aqui está um pouco sobre quem somos e o que oferecemos:</p>

                <h1>Nossa Missão: </h1>
                <p>Nosso objetivo é simplificar e aprimorar a experiência de compra e venda de imóveis, conectando compradores e vendedores de maneira eficiente e transparente. Estamos comprometidos em oferecer um serviço excepcional, fornecendo uma ampla gama de opções imobiliárias e facilitando todo o processo, desde a pesquisa até a conclusão da transação.</p>

                <h1>Variedade de Imóveis:</h1>
                <p>Oferecemos uma ampla seleção de imóveis para atender a diversas necessidades e preferências. Desde apartamentos urbanos modernos até casas espaçosas nos subúrbios, passando por propriedades comerciais e terrenos para desenvolvimento, temos opções para todos os gostos e orçamentos. Nossa plataforma intuitiva permite que os clientes filtrem e personalizem suas pesquisas para encontrar o imóvel perfeito.</p>

                <h1>Transparência e Confiança:</h1>
                <p>Valorizamos a transparência em todas as etapas do processo de compra e venda. Nosso compromisso com a integridade e a confiabilidade significa que os clientes podem confiar em nós para fornecer informações precisas e atualizadas sobre os imóveis listados em nosso site. Além disso, oferecemos suporte especializado e orientação em cada etapa da jornada, garantindo que os clientes se sintam seguros e informados em todas as decisões.</p>

                <h1>Tecnologia Avançada:</h1>
                <p>Investimos em tecnologia avançada para tornar a experiência do usuário mais eficiente e agradável. Nossa plataforma é robusta, segura e fácil de usar, oferecendo recursos como tours virtuais, imagens em alta resolução, mapas interativos e ferramentas de comparação para ajudar os clientes a visualizar e avaliar os imóveis antes de tomar uma decisão.</p>

                <h1>Equipe Especializada:</h1>
                <p>Nossa equipe é composta por profissionais experientes e dedicados do setor imobiliário, prontos para oferecer assistência personalizada e orientação especializada em todas as transações. Desde agentes imobiliários qualificados até consultores financeiros e especialistas jurídicos, estamos aqui para ajudar os clientes em todas as etapas do processo de compra e venda.</p>

                <div className="contato">
                    <h1>Entre em Contato:</h1>
                    <p>Estamos comprometidos em fornecer uma experiência excepcional do início ao fim. Se você está procurando comprar, vender ou simplesmente precisa de conselhos sobre questões imobiliárias, não hesite em nos contatar. Estamos aqui para ajudar a tornar seus sonhos imobiliários uma realidade.</p>
                    <Link to="/contact">Contato</Link>
                </div>


            </div>
        </div>

    )
}