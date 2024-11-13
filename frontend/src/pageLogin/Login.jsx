import "./Login.css";

function Login() {
    return (
        <>
            <div id="login">
                <h1>ToDo App</h1>
                <form id="formLogin">
                    <label htmlFor="email">Digite seu email:</label>
                    <input type="email" name="email" placeholder="digite seu email..." style={{height: '1rem'}}/>
                    <br />
                    <label htmlFor="senha">Digite sua senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="digite sua senha..." style={{height: '1rem'}}/>
                    <br />
                </form>
                <div id="botoes">
                    <button>Acessar</button>
                    <button><a href="/cadastro">Cadastrar-se</a></button>
                </div>
            </div>
        </>
    )
}

export default Login;