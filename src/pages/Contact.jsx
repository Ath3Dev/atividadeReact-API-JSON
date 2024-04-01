import { useState } from 'react';
import contatoImg from '../assets/img/pageContact/contactImg.svg'
import { HiMiniMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import '../assets/css/Contact.css'

export function Contact() {

    const initialForm = {
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    }

    const [formState, setFormState] = useState(initialForm);


    const handleInput = (event) => {
 
        const target = event.currentTarget;

        const { value, name } = target;
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            assunto: formState.assunto,
            mensagem: formState.mensagem,
            createdDate: new Date(),
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral),
        }


        const urlJsonServerAPI = 'http://localhost:3001/Messages';
        fetch(urlJsonServerAPI, requestOptions)
            .then((response) => response.json())
            .then((data) => setFormState(data))

        setFormState({ ...initialForm })

        console.log(formState);
    }

    return (
        <div className="contatoh">
            <div className="contato-img">
                <img src={contatoImg} alt="" />
            </div>

            <div className="contato-infos">
                <div className="contato-text">
                    <h1>Get In Touch With Us</h1>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className="contato-items">
                    <div className="contato-info">
                        <div className="info-item">
                            <div className='title'>
                                <HiMiniMapPin />
                                <h1>Address</h1>
                            </div>
                            <h3>236 5th SE Avenue, New York NY10000, United States</h3>
                        </div>
                        <div className="info-item">
                            <div className='title'>
                                <FaPhoneAlt />
                                <h1>Phone</h1>
                            </div>
                            <h4>Mobile: +(84) 546-6789</h4>
                            <h4>Hotline: +(84) 456-6789</h4>
                        </div>
                        <div className="info-item">
                            <div className='title'>
                                <FaClock />
                                <h1>Working Time</h1>
                            </div>
                            <h4>Monday-Friday: 9:00 - 22:00</h4>
                            <h4>Saturday-Sunday: 9:00 - 21:00</h4>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-display">
                            <div className="form-control">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    value={formState.nome}
                                    onChange={handleInput}
                                    placeholder="Informe seu Nome"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleInput}
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
                                    value={formState.assunto}
                                    onChange={handleInput}
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
                                    value={formState.mensagem}
                                    onChange={handleInput}
                                    placeholder="Digite sua mensagem"
                                    required
                                ></textarea>
                            </div>
                        
                        </div>
                        <div className='form-button'>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
