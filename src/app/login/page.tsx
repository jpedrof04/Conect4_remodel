"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [tipo, setTipo] = useState<"aluno" | "professor">("aluno");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tipo === "aluno") {
      router.push("/dashboard/aluno");
    } else {
      router.push("/dashboard/professor");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img
            src="https://www.barracred.com.br/wp-content/uploads/2023/08/barracred.png"
            alt="Barracred Conecta"
            className="login-logo"
          />
          <h1>Barracred Conecta</h1>
          <p>Área Restrita</p>
        </div>

        <div className="login-tabs">
          <button
            className={`tab-btn ${tipo === "aluno" ? "active" : ""}`}
            onClick={() => setTipo("aluno")}
          >
            <i className="fas fa-user-graduate"></i> Aluno
          </button>
          <button
            className={`tab-btn ${tipo === "professor" ? "active" : ""}`}
            onClick={() => setTipo("professor")}
          >
            <i className="fas fa-chalkboard-teacher"></i> Professor
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={tipo === "aluno" ? "seu.email@aluno.com" : "professor@conecta.com"}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <p>Esqueceu a senha? <a href="#">Clique aqui</a></p>
        </div>
      </div>
    </div>
  );
}
