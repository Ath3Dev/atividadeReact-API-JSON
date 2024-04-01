// Importando componente Routes responsável pela navegação entre páginas
import Routes from './Router'
// Importando arquivo responsavel pela estilização das páginas
import './App.css'


// Criando o componente App que será o principal do aplicativo.
function App() {

  return (
    // Utilizando um fragmento, retorna um conjunto de elementos JSX sem adicionar um elemento extra no DOM
    /* 
      O JSX (JavaScript XML) é uma extensão da sintaxe do JavaScript que permite escrever códigos que se parecem muito com HTML 
    */
    <>
      {/* Renderização do componente Routes, responsável pela navegação do aplicativo. */}
      <Routes />
    </>
  )
  // Retorna o componente Routes dentro de um fragmento para renderização.
}

// Exportando o componente App para ser utilizado na renderização do nosso arquivo main.jsx.
export default App;


/* 
    O fragmento (<> ... </>) é utilizado para envolver o conteúdo JSX retornado pelo componente App. 
    Ele é útil quando você precisa retornar múltiplos elementos JSX adjacentes sem criar um elemento extra no DOM.
    Isso é importante para manter a estrutura do HTML limpa e evitar erros de renderização. 
*/