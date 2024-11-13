import "./Cadastro.css"

function Cadastro() {
    return (
        <>
            <div id="cadastro">
                <h1>Cadastre-se</h1>
                <form id="formCadastro">
                    <section>
                        <label htmlFor="nomeCompleto">Nome Completo:</label>
                        <input type="text" name="nomeCompleto" placeholder="Digite seu nome completo..." style={{width: "15rem"}}/>
                    </section>
                    <section>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu email..." style={{width: "15rem"}}/>
                    </section>
                    <section>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha..." style={{width: "15rem"}}/>
                    </section>
                    <section>
                        <label htmlFor="confirmaSenha">Confirme sua senha:</label>
                        <input type="password" name="confirmaSenha" placeholder="Confirme sua senha..." style={{width: "15rem"}}/>
                    </section>
                </form>
                <button>Cadastrar</button>
            </div>
        </>
    );
}

export default Cadastro;