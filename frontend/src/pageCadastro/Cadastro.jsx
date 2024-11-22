import { useState } from "react";
import "./Cadastro.css"

function Cadastro() {

    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const gerenciaEnvio = async (e) => {
        e.preventDefault();

        if(senha !== confirmaSenha){
            alert('As senhas não coincidem!');
            return;
        }

        const dadosUsuario = {
            nomeCompleto,
            email,
            senha
        };

        try{
            const res = await fetch("http://localhost:8080/user", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosUsuario),
            });

            if(res.ok) {
                setNomeCompleto("");
                setEmail("");
                setSenha("");
                setConfirmaSenha("");
                alert("Usuário cadastrado com sucesso!");
                window.location.href = 'http://localhost:5173/'
            } else {
                alert("Erro ao cadastrar o usuário.")
            }
        } catch(error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao cadastrar o usuário")
        }
    };

    return (
        <>
            <div id="cadastro">
                <h1>Cadastre-se</h1>
                <form id="formCadastro">
                    <section>
                        <label htmlFor="nomeCompleto">Nome Completo:</label>
                        <input autoComplete="true" type="text" id="nomeCompleto" placeholder="Digite seu nome completo..." style={{width: "15rem"}} value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)}/>
                    </section>
                    <section>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Digite seu email..." style={{width: "15rem"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </section>
                    <section>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" placeholder="Digite sua senha..." style={{width: "15rem"}} value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </section>
                    <section>
                        <label htmlFor="confirmaSenha">Confirme sua senha:</label>
                        <input type="password" id="confirmaSenha" placeholder="Confirme sua senha..." style={{width: "15rem"}} value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)}/>
                    </section>
                </form>
                <button type="submit" onClick={gerenciaEnvio}>Cadastrar</button>
            </div>
        </>
    );
}

export default Cadastro;