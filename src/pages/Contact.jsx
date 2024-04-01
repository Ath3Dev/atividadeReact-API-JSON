import { useState } from 'react'; // Importa o hook useState do React para adicionar estados a componentes de função
import contatoImg from '../assets/img/pageContact/contactImg.svg'; // Importa a imagem utilizada na página de 'Contato'
import { HiMiniMapPin } from "react-icons/hi2"; // Importa o ícone de mapa do pacote react-icons
import { FaPhoneAlt } from "react-icons/fa"; // Importa o ícone de telefone do pacote react-icons
import { FaClock } from "react-icons/fa"; // Importa o ícone de relógio do pacote react-icons

import '../assets/css/Contact.css'; // Importa o arquivo de estilos CSS específicos para a página de 'Contato'

// Componente responsável por exibir informações de contato e um formulário para envio de mensagens
export function Contact() {
    // Define um estado inicial para o formulário
    const initialForm = {
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    };

    // Define estados para o formulário
    const [formState, setFormState] = useState(initialForm); // Estado para controlar o estado do formulário

    // Função para lidar com a entrada do usuário no formulário
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;
        setFormState({ ...formState, [name]: value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário de enviar a página

        // Cria um objeto com os dados do formulário
        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            assunto: formState.assunto,
            mensagem: formState.mensagem,
            createdDate: new Date(),
        };

        // Configurações da requisição para enviar os dados do formulário para o servidor
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral),
        };

        // URL da API para enviar os dados do formulário
        const urlJsonServerAPI = 'http://localhost:3001/Messages';

        // Envia os dados do formulário para o servidor
        fetch(urlJsonServerAPI, requestOptions)
            .then((response) => response.json())
            .then((data) => setFormState(data));

        setFormState({ ...initialForm }); // Limpa o estado do formulário após o envio
    };

    return (
        <div className="contatoh"> {/* Container principal da página de 'Contato' */}
            <div className="contato-img"> {/* Div para exibir a imagem */}
                <img src={contatoImg} alt="" /> {/* Renderiza a imagem da página de 'Contato' */}
            </div>

            <div className="contato-infos"> {/* Div para exibir informações de contato e o formulário */}
                <div className="contato-text"> {/* Div para o texto introdutório */}
                    <h1>Get In Touch With Us</h1> {/* Título da seção */}
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p> {/* Parágrafo introdutório */}
                </div>

                <div className="contato-items"> {/* Div para as informações de contato e o formulário */}
                    <div className="contato-info"> {/* Div para as informações de contato */}
                        <div className="info-item"> {/* Div para cada item de informação */}
                            <div className='title'> {/* Div para o título e o ícone */}
                                <HiMiniMapPin /> {/* Ícone de mapa */}
                                <h1>Address</h1> {/* Título da seção */}
                            </div>
                            <h3>236 5th SE Avenue, New York NY10000, United States</h3> {/* Endereço */}
                        </div>
                        <div className="info-item"> {/* Div para cada item de informação */}
                            <div className='title'> {/* Div para o título e o ícone */}
                                <FaPhoneAlt /> {/* Ícone de telefone */}
                                <h1>Phone</h1> {/* Título da seção */}
                            </div>
                            <h4>Mobile: +(84) 546-6789</h4> {/* Número de telefone móvel */}
                            <h4>Hotline: +(84) 456-6789</h4> {/* Número de telefone de emergência */}
                        </div>
                        <div className="info-item"> {/* Div para cada item de informação */}
                            <div className='title'> {/* Div para o título e o ícone */}
                                <FaClock /> {/* Ícone de relógio */}
                                <h1>Working Time</h1> {/* Título da seção */}
                            </div>
                            <h4>Monday-Friday: 9:00 - 22:00</h4> {/* Horário de funcionamento de segunda a sexta */}
                            <h4>Saturday-Sunday: 9:00 - 21:00</h4> {/* Horário de funcionamento aos sábados e domingos */}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}> {/* Formulário para enviar mensagens */}
                        <div className="form-display"> {/* Div para exibir o formulário */}
                            <div className="form-control"> {/* Div para cada campo de entrada do formulário */}
                                <label htmlFor="nome">Nome</label> {/* Rótulo do campo 'Nome' */}
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    value={formState.nome}
                                    onChange={handleInput}
                                    placeholder="Informe seu Nome"
                                    required
                                /> {/* Campo de entrada para o nome */}
                            </div>
                            {/* Outros campos de entrada semelhantes para o email, assunto e mensagem */}
                        </div>
                        <div className='form-button'> {/* Div para o botão de envio do formulário */}
                            <button type="submit">Enviar</button> {/* Botão para enviar o formulário */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

/* 
    O que é o hook useState?
        O useState é um hook do React que permite adicionar estados a componentes de função.
        Ele retorna um par de valores: o estado atual e uma função que permite atualizar esse estado.
        O useState é usado para criar e gerenciar estados locais em componentes de função, permitindo
        que eles reajam às interações do usuário e atualizem dinamicamente a interface do usuário.

    O que é o evento onChange?
        O evento onChange é um evento de formulário HTML que é acionado quando o valor de um elemento de formulário é alterado.
        Em React, o evento onChange é comumente usado em elementos de formulário, como <input>, <textarea> e <select>,
        para detectar e lidar com mudanças de entrada do usuário. Quando um usuário digita algo em um campo de entrada
        ou seleciona uma opção em um menu suspenso, o evento onChange é acionado e uma função de manipulação de eventos
        é chamada para atualizar o estado do componente com o novo valor inserido pelo usuário.

    O que é o evento onSubmit?
        O evento onSubmit é um evento de formulário HTML que é acionado quando um formulário é submetido.
        Em React, o evento onSubmit é comumente usado em elementos de formulário para lidar com o envio do formulário.
        Quando um usuário clica no botão de envio dentro de um formulário, o evento onSubmit é acionado,
        e uma função de manipulação de eventos é chamada para processar os dados do formulário e realizar ações adicionais,
        como enviar os dados para um servidor.

    O que é o fetch?
        O fetch é uma API JavaScript moderna usada para fazer requisições HTTP assíncronas.
        Ele fornece uma maneira fácil e flexível de buscar recursos de um servidor web e trabalhar com respostas de forma
        assíncrona. O fetch permite enviar requisições GET, POST, PUT, DELETE, entre outras, e lidar com diferentes tipos
        de dados, como JSON, texto, Blob, ArrayBuffer, etc. Ele substituiu em grande parte o uso de XMLHttpRequest (XHR)
        para fazer requisições AJAX em aplicativos web modernos, tornando o código mais simples, legível e eficiente.
*/
