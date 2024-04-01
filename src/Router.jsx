import React, { useState, useEffect } from "react"; // Importa o React e os Hooks useState e useEffect do pacote 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Importa componentes do React Router para lidar com navegação

import { Home } from "./pages/Home"; // Importa o componente Home da pasta 'pages'
import { Shop } from './pages/Shop'; // Importa o componente Shop da pasta 'pages'
import { About } from './pages/About'; // Importa o componente About da pasta 'pages'
import { Contact } from './pages/Contact'; // Importa o componente Contact da pasta 'pages'
import { Header } from "./components/Header"; // Importa o componente Header da pasta 'components'
import { Footer } from "./components/Footer"; // Importa o componente Footer da pasta 'components'
import { ProductCrud } from "./pages/ProductCrud"; // Importa o componente ProductCrud da pasta 'pages'

// Criando o Componente que gerencia as rotas da aplicação
const Router = () => {
    // Define os estados para verificar a autenticação do administrador e se está em processo de verificação
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false); // Estado para verificar se o administrador está autenticado
    const [isCheckingAuthentication, setIsCheckingAuthentication] = useState(true); // Estado para verificar se está em processo de verificação

    // Efeito utilizado para verificar a autenticação ao carregar o componente
    useEffect(() => {
        checkAuthentication(); // Chama a função para verificar a autenticação ao montar o componente
    }, []);

    // Função para verificar a autenticação do administrador
    const checkAuthentication = () => {
        // Obtém os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search); // Obtém os parâmetros da URL atual
        const username = urlParams.get('username'); // Obtém o valor do parâmetro 'username'
        const password = urlParams.get('password'); // Obtém o valor do parâmetro 'password'

        // Verifica se o nome de usuário e senha são válidos para autenticação de administrador
        if (username === "admin" && password === "admin") {
            setIsAdminAuthenticated(true); // Define o estado de autenticação como verdadeiro
        }
        setIsCheckingAuthentication(false); // Define que a verificação de autenticação foi concluída
    };

    // Se estiver verificando a autenticação, retorna uma mensagem de "Verificando autenticação..."
    if (isCheckingAuthentication) {
        return <div>Verificando autenticação...</div>;
    }

    // Retorna as rotas da aplicação utilizando o BrowserRouter para envolver todas as rotas
    return (
        <BrowserRouter>
            <Header/> {/* Renderiza o componente Header, responsável pelo cabeçalho da página */}
            <Routes> {/* Define o contêiner para todas as rotas da aplicação */}
                {/* Define as rotas da aplicação e os componentes correspondentes */}
                <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
                <Route path="/shop" element={<Shop />} /> {/* Rota para a página de compras */}
                <Route path="/about" element={<About />} /> {/* Rota para a página Sobre */}
                <Route path="/contact" element={<Contact />} /> {/* Rota para a página de contato */}
                {/* Rota para o CRUD de produtos, verifica se o administrador está autenticado */}
                <Route
                    path="/productcrud"
                    element={ // Define o componente a ser renderizado com base na autenticação do administrador
                        isAdminAuthenticated ? (
                            <ProductCrud /> // Renderiza o componente ProductCrud se o administrador estiver autenticado
                        ) : (
                            <Navigate to="/" replace /> // Redireciona para a página inicial se não estiver autenticado
                        )
                    }
                />
            </Routes>
            <Footer/> {/* Renderiza o componente Footer, responsável pelo rodapé da página */}
        </BrowserRouter>
    );
};

export default Router; // Exporta o componente Router para ser utilizado em nosso componente principal App.jsx


/* 
    O que são?
        useState
            O useState é um hook do React que permite adicionar um estado a componentes de função. 
            Em termos simples, um estado é uma variável especial que pode armazenar dados e fazer com 
            que o componente seja renderizado novamente sempre que o estado for atualizado.

        useEffect
            O useEffect é outro hook do React que permite realizar efeitos colaterais em componentes de função.
            Efeitos colaterais são ações que ocorrem fora da renderização, como chamadas de API,
            manipulação do DOM ou assinaturas de eventos.

    Essencialmente, useState e useEffect são ferramentas poderosas que permitem adicionar funcionalidades
    dinâmicas aos componentes de função no React, como gerenciar estados locais e realizar operações 
    assíncronas. Eles são fundamentais para o desenvolvimento de aplicativos React modernos e responsivos.

    O que são Hooks?
        Um hook, em termos de programação, é uma técnica que permite estender o comportamento de um programa
        ou framework existente, geralmente adicionando funcionalidades adicionais ou modificando o fluxo de
        execução de maneira específica. No contexto do React, os hooks são funções especiais fornecidas pelo
        React que permitem que você use o estado e outros recursos do React em componentes de função.
        Em essência, os hooks permitem que você "enganche" funcionalidades adicionais em seus componentes de 
        função, permitindo uma melhor organização e reutilização de código, além de facilitar a separação de 
        preocupações. Isso ajuda a tornar o código mais legível, escalável e fácil de manter.
*/