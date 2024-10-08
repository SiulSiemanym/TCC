import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Menu from "../components/menu";
import FOOOTER from "../components/footer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CSS from "../Css/esquecisenha.module.css";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [CodigoVerificacao, setCodigoVerificacao] = useState('');
    const [NovaSenha, setNovaSenha] = useState('');
    const [step, setStep] = useState(1);
    const [mensagem, setMensagem] = useState('');

    const handleSendCode = async () => {
        try {
            const response = await fetch('https://api.exemplo.com/send-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar o código.');
            }

            setStep(2);
            setMensagem('Código de verificação enviado para o seu e-mail.');
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    const handleResetPassword = async () => {
        try {
            const response = await fetch('https://api.exemplo.com/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    CodigoVerificacao,
                    NovaSenha,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao redefinir a senha.');
            }

            setMensagem('Senha redefinida com sucesso!');
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    return (
        <>
                   <Helmet><title>Esqueci Senha</title></Helmet>
            <Menu ativo={"esquecisenha"} />
            <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
                <h2>Redefinir Senha</h2>
                {mensagem && <p>{mensagem}</p>}
                {step === 1 && (
                    <div>
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSendCode}>Enviar Código</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <input
                            type="text"
                            placeholder="Código de verificação"
                            value={CodigoVerificacao}
                            onChange={(e) => setCodigoVerificacao(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Nova senha"
                            value={NovaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                        />
                        <button onClick={handleResetPassword}>Redefinir Senha</button>
                    </div>
                )}
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default ResetPassword;
