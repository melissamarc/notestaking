import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseconfig'
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuário criado com sucesso!");
            setEmail("");
            setPassword("");
            navigate('/dashboard');

        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Signup;
