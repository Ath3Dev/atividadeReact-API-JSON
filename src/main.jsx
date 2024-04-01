import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Document Object Model (DOM) */
// A DOM (Document Object Model) é uma representação da estrutura do documento HTML como uma árvore de objetos.
// É como se fosse a estrutura de um site, onde cada elemento como textos, imagens, botões e formulários são representados como nós(elementos individuais e como eles estão organizados em uma estrutura ) nessa árvore.
// ReactDOM.createRoot é uma função nativa do React que serve para iniciar a renderização de um aplicativo na DOM.
// Quando dizemos "renderização", queremos dizer que estamos transformando os componentes do React em elementos visíveis na tela.
// Para fazer isso, o createRoot precisa saber onde exatamente no HTML ele deve começar a colocar os elementos do React.
// É aí que entra o document.getElementById('root'): essa função procura um elemento com o ID 'root' no HTML e retorna ele para o createRoot.
// Então, o ReactDOM.createRoot(document.getElementById('root')) significa "comece a renderização do aplicativo no elemento HTML com o ID 'root'".

// Inicia a renderização do aplicativo na DOM
// Agora que sabemos onde começar a renderização, usamos a função render() para renderizar o componente principal do nosso aplicativo, que é o <App />.
// Isso significa que todos os outros componentes dentro de <App /> serão renderizados também.
// A renderização é como construir uma casa: primeiro, precisamos de um terreno (o elemento 'root' no HTML), e então começamos a construir as paredes, janelas, portas e tudo mais (os componentes do React).
// Então, ReactDOM.createRoot(document.getElementById('root')).render(<App />) faz com que o React comece a construir nosso aplicativo a partir do elemento 'root' no HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
 /*  <React.StrictMode> */
    <App />
  /* </React.StrictMode>, */
)
