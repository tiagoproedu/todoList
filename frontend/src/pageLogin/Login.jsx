import "./Login.css";

function Login() {
    return (
        <>
            <div id="login">
                <h1>ToDo App</h1>
                <form action="">
                    <label htmlFor="email">Digite seu email:</label>
                    <input type="email" name="email" placeholder="digite seu email..." />
                    <br />
                    <label htmlFor="senha">Digite sua senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="digite sua senha..." />
                    <br />
                </form>
                <div id="botoes">
                    <button>Acessar</button>
                    <button>Cadastrar-se</button>
                </div>
            </div>
        </>
    )
}

export default Login;