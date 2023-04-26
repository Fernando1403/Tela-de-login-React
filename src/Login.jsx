import logo from "./assets/fiap.png"
import "./App.css"

export function Login() {
  return <div className="container">
    <header className="header">
      <img src={logo} alt="Workflow" />
      <h1>React Login - AT </h1>
    </header>

    <form action="">
      <div className="inputContainer">
        <label htmlFor="usuario">Usuario:   </label>
        <input 
        type="text"
        name="usuario" 
        id="usuario" 
        placeholder="Insira o seu Usuário"/>
      </div>

      <div className="inputContainer">
        <label htmlFor="senha">Senha:   </label>
        <input 
        type="text"
        name="senha" 
        id="senha" 
        placeholder="Insira sua senha"/>
      </div>

    <button className="Button">
      Login
    </button>

    <div className="footer">
      <p>Ainda não tem uma conta ?</p>
      <a href="#">Crie uma Conta</a>
    </div>

    </form>
    </div>
}

export default Login