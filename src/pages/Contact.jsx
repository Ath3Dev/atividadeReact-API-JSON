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
        nome: "", // Inicializa o campo 'nome' do formulário como uma string vazia
        email: "", // Inicializa o campo 'email' do formulário como uma string vazia
        assunto: "", // Inicializa o campo 'assunto' do formulário como uma string vazia
        mensagem: "" // Inicializa o campo 'mensagem' do formulário como uma string vazia
    };

    // Define estados para o formulário
    const [formState, setFormState] = useState(initialForm); // Estado para controlar o estado do formulário utilizando o hook useState

    // Função para lidar com a entrada do usuário no formulário
    const handleInput = (event) => {
        const target = event.currentTarget; // Atribui o elemento do evento atual a 'target'
        const { value, name } = target; // Extrai os valores de 'value' e 'name' do elemento
        setFormState({ ...formState, [name]: value }); // Atualiza o estado do formulário com os novos valores de entrada do usuário
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = () => {
        const formGeneral = {
            nome: formState.nome, // Atribui o valor do campo 'nome' do estado do formulário a 'formGeneral'
            email: formState.email, // Atribui o valor do campo 'email' do estado do formulário a 'formGeneral'
            assunto: formState.assunto, // Atribui o valor do campo 'assunto' do estado do formulário a 'formGeneral'
            mensagem: formState.mensagem, // Atribui o valor do campo 'mensagem' do estado do formulário a 'formGeneral'
            createdDate: new Date(), // Define a data de criação como a data atual
        };

        const requestOptions = {
            method: 'POST', // Define o método da requisição como POST
            headers: {
                'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(formGeneral), // Converte 'formGeneral' para JSON e o atribui ao corpo da requisição
        };

        const urlJsonServerAPI = 'http://localhost:3001/Messages'; // Define a URL da API JSON do servidor

        fetch(urlJsonServerAPI, requestOptions) // Realiza a requisição para a API JSON do servidor
            .then((response) => response.json()) // Converte a resposta da requisição para JSON
            .then((data) => setFormState(data)); // Atualiza o estado do formulário com os dados da resposta

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
                                    value={formState.nome} // Atribui o valor do campo 'nome' do estado do formulário ao campo de entrada
                                    onChange={handleInput} // Chama a função 'handleInput' quando ocorre uma mudança neste campo
                                    placeholder="Informe seu Nome"
                                    required
                                /> {/* Campo de entrada para o nome */}
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formState.email} // Atribui o valor do campo 'email' do estado do formulário ao campo de entrada
                                    onChange={handleInput} // Chama a função 'handleInput' quando ocorre uma mudança neste campo
                                    placeholder="Informe seu Email"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Assunto</label>
                                <input
                                    type="text"
                                    name="assunto"
                                    id="assunto"
                                    value={formState.assunto} // Atribui o valor do campo 'assunto' do estado do formulário ao campo de entrada
                                    onChange={handleInput} // Chama a função 'handleInput' quando ocorre uma mudança neste campo
                                    placeholder="Qual o motivo do contato?"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea
                                    name="mensagem"
                                    id="mensagem"
                                    cols="30"
                                    rows="5"
                                    value={formState.mensagem} // Atribui o valor do campo 'mensagem' do estado do formulário à área de texto
                                    onChange={handleInput} // Chama a função 'handleInput' quando ocorre uma mudança nesta área de texto
                                    placeholder="Digite sua mensagem"
                                    required
                                ></textarea>
                            </div>
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
