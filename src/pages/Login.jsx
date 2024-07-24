import { useState } from "react";
import "../pages/Login.css";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "admin@admin.com" && senha === "admin123") {
      navigate('/home')
      return
    }
    
    alert("Email e/ou senha incorretos")
  }

  return (
    <div className="css-8k1832">
      <form onSubmit={handleSubmit}>
        <input
          className="css-1ay51mr"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          className="css-1ay51mr"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit" className="css-1hz5vgk">
          Continuar com e-mail
        </button>
      </form>

      {/* Inclua a logo do Ze Delivery aqui */}
    </div>
  );
}

export default Login;
