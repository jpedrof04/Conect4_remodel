"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const alunosExemplo = [
  { id: 1, nome: "João Silva Santos", email: "joao@aluno.com", serie: "2º EM", status: "ativo", cidade: "Barra Bonita" },
  { id: 2, nome: "Maria Oliveira", email: "maria@aluno.com", serie: "3º EM", status: "ativo", cidade: "Igaraçu do Tietê" },
  { id: 3, nome: "Pedro Costa", email: "pedro@aluno.com", serie: "1º EM", status: "inativo", cidade: "Barra Bonita" },
  { id: 4, nome: "Ana Julia Rodrigues", email: "ana@aluno.com", serie: "2º EM", status: "ativo", cidade: "Barra Bonita" },
  { id: 5, nome: "Lucas Martins", email: "lucas@aluno.com", serie: "3º EM", status: "ativo", cidade: "Igaraçu do Tietê" },
  { id: 6, nome: "Sofia Pereira", email: "sofia@aluno.com", serie: "1º EM", status: "pendente", cidade: "Barra Bonita" },
];

export default function DashboardProfessor() {
  const [aba, setAba] = useState<"alunos" | "adicionar">("alunos");
  const [alunos, setAlunos] = useState(alunosExemplo);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [modalAberto, setModalAberto] = useState(false);
  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    email: "",
    serie: "",
    cidade: "",
  });
  const router = useRouter();

  const alunosFiltrados = alunos.filter((aluno) => {
    const matchBusca =
      aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
      aluno.email.toLowerCase().includes(busca.toLowerCase());
    const matchStatus =
      filtroStatus === "todos" || aluno.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  const handleAdicionarAluno = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoAluno.nome && novoAluno.email) {
      const aluno = {
        id: alunos.length + 1,
        nome: novoAluno.nome,
        email: novoAluno.email,
        serie: novoAluno.serie || "1º EM",
        status: "pendente" as const,
        cidade: novoAluno.cidade || "Barra Bonita",
      };
      setAlunos([...alunos, aluno]);
      setNovoAluno({ nome: "", email: "", serie: "", cidade: "" });
      setModalAberto(false);
      alert("Aluno adicionado com sucesso! (ilustrativo)");
    }
  };

  const handleExcluirAluno = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este aluno? (ilustrativo)")) {
      setAlunos(alunos.filter((a) => a.id !== id));
    }
  };

  const handleMudarStatus = (id: number, novoStatus: string) => {
    setAlunos(
      alunos.map((a) => (a.id === id ? { ...a, status: novoStatus as any } : a))
    );
    alert(`Status do aluno atualizado para ${novoStatus}! (ilustrativo)`);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "status-ativo";
      case "inativo":
        return "status-inativo";
      case "pendente":
        return "status-pendente";
      default:
        return "";
    }
  };

  return (
    <div className="dashboard">
      <ThemeToggle position="dashboard" />
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://www.barracred.com.br/wp-content/uploads/2023/08/barracred.png"
            alt="Barracred Conecta"
          />
          <span>Painel do Professor</span>
        </div>
        <nav className="sidebar-nav">
          <button
            className={aba === "alunos" ? "active" : ""}
            onClick={() => setAba("alunos")}
          >
            <i className="fas fa-users"></i> Gerenciar Alunos
          </button>
          <button
            className={aba === "adicionar" ? "active" : ""}
            onClick={() => setModalAberto(true)}
          >
            <i className="fas fa-user-plus"></i> Adicionar Aluno
          </button>
          <Link href="/" className="sidebar-link">
            <i className="fas fa-home"></i> Voltar ao Site
          </Link>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">
            <i className="fas fa-sign-out-alt"></i> Sair
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Gerenciamento de Alunos</h1>
          <p>Gerencie os alunos matriculados no programa</p>
        </header>

        <div className="alunos-section">
          <div className="alunos-toolbar">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Buscar aluno..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <div className="filter-box">
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
              >
                <option value="todos">Todos os status</option>
                <option value="ativo">Ativos</option>
                <option value="inativo">Inativos</option>
                <option value="pendente">Pendentes</option>
              </select>
            </div>
            <button className="btn-add" onClick={() => setModalAberto(true)}>
              <i className="fas fa-plus"></i> Novo Aluno
            </button>
          </div>

          <div className="alunos-stats">
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <div>
                <span className="stat-number">{alunos.length}</span>
                <span className="stat-label">Total de Alunos</span>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-check-circle"></i>
              <div>
                <span className="stat-number">
                  {alunos.filter((a) => a.status === "ativo").length}
                </span>
                <span className="stat-label">Ativos</span>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-clock"></i>
              <div>
                <span className="stat-number">
                  {alunos.filter((a) => a.status === "pendente").length}
                </span>
                <span className="stat-label">Pendentes</span>
              </div>
            </div>
          </div>

          <div className="alunos-table">
            <table>
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Série</th>
                  <th>Cidade</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunosFiltrados.map((aluno) => (
                  <tr key={aluno.id}>
                    <td>
                      <div className="aluno-info">
                        <div className="aluno-avatar">
                          {aluno.nome.charAt(0)}
                        </div>
                        <div>
                          <span className="aluno-nome">{aluno.nome}</span>
                          <span className="aluno-email">{aluno.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>{aluno.serie}</td>
                    <td>{aluno.cidade}</td>
                    <td>
                      <span
                        className={`status-badge ${getStatusColor(aluno.status)}`}
                      >
                        {aluno.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="btn-action"
                          title="Editar"
                          onClick={() =>
                            alert(`Editar aluno ${aluno.nome} (ilustrativo)`)
                          }
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn-action"
                          title={
                            aluno.status === "ativo"
                              ? "Desativar"
                              : "Ativar"
                          }
                          onClick={() =>
                            handleMudarStatus(
                              aluno.id,
                              aluno.status === "ativo" ? "inativo" : "ativo"
                            )
                          }
                        >
                          <i
                            className={`fas ${
                              aluno.status === "ativo"
                                ? "fa-ban"
                                : "fa-check"
                            }`}
                          ></i>
                        </button>
                        <button
                          className="btn-action btn-delete"
                          title="Excluir"
                          onClick={() => handleExcluirAluno(aluno.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {modalAberto && (
          <div className="modal-overlay" onClick={() => setModalAberto(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Adicionar Novo Aluno</h2>
                <button
                  className="modal-close"
                  onClick={() => setModalAberto(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form onSubmit={handleAdicionarAluno} className="modal-form">
                <div className="form-group">
                  <label>Nome Completo *</label>
                  <input
                    type="text"
                    value={novoAluno.nome}
                    onChange={(e) =>
                      setNovoAluno({ ...novoAluno, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>E-mail *</label>
                  <input
                    type="email"
                    value={novoAluno.email}
                    onChange={(e) =>
                      setNovoAluno({ ...novoAluno, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Série</label>
                    <select
                      value={novoAluno.serie}
                      onChange={(e) =>
                        setNovoAluno({ ...novoAluno, serie: e.target.value })
                      }
                    >
                      <option value="">Selecione</option>
                      <option value="1º EM">1º Ano EM</option>
                      <option value="2º EM">2º Ano EM</option>
                      <option value="3º EM">3º Ano EM</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cidade</label>
                    <select
                      value={novoAluno.cidade}
                      onChange={(e) =>
                        setNovoAluno({ ...novoAluno, cidade: e.target.value })
                      }
                    >
                      <option value="">Selecione</option>
                      <option value="Barra Bonita">Barra Bonita</option>
                      <option value="Igaraçu do Tietê">Igaraçu do Tietê</option>
                    </select>
                  </div>
                </div>
                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setModalAberto(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn-save">
                    Adicionar Aluno
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
