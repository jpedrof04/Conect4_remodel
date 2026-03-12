"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const postsExemplo = [
  {
    id: 1,
    titulo: "Minha experiência no Barracred Conecta",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    data: "15/02/2025",
    likes: 24,
    comentarios: 8,
  },
  {
    id: 2,
    titulo: "O que aprendi no módulo de TI",
    conteudo: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    data: "10/02/2025",
    likes: 18,
    comentarios: 5,
  },
  {
    id: 3,
    titulo: "Dicas para quem quer ingressar no programa",
    conteudo: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    data: "05/02/2025",
    likes: 32,
    comentarios: 12,
  },
];

export default function DashboardAluno() {
  const [aba, setAba] = useState<"perfil" | "blog">("perfil");
  const [editando, setEditando] = useState(false);
  const [perfil, setPerfil] = useState({
    nome: "João Silva Santos",
    email: "joao.silva@aluno.com",
    telefone: "(14) 99999-9999",
    cidade: "Barra Bonita - SP",
    serie: "2º Ano do Ensino Médio",
    biografia: "Estudante apaixonado por tecnologia e sempre em busca de novos conhecimentos. Participo do programa Barracred Conecta para desenvolver minhas habilidades e me preparar para o mercado de trabalho.",
  });

  const [posts, setPosts] = useState(postsExemplo);
  const [novoPost, setNovoPost] = useState({ titulo: "", conteudo: "" });
  const router = useRouter();

  const handleSavePerfil = () => {
    setEditando(false);
    alert("Perfil salvo com sucesso! (ilustrativo)");
  };

  const handleCriarPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoPost.titulo && novoPost.conteudo) {
      const post = {
        id: posts.length + 1,
        titulo: novoPost.titulo,
        conteudo: novoPost.conteudo,
        data: new Date().toLocaleDateString("pt-BR"),
        likes: 0,
        comentarios: 0,
      };
      setPosts([post, ...posts]);
      setNovoPost({ titulo: "", conteudo: "" });
      alert("Post criado com sucesso! (ilustrativo)");
    }
  };

  const handleLogout = () => {
    router.push("/login");
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
          <span>Painel do Aluno</span>
        </div>
        <nav className="sidebar-nav">
          <button
            className={aba === "perfil" ? "active" : ""}
            onClick={() => setAba("perfil")}
          >
            <i className="fas fa-user"></i> Meu Perfil
          </button>
          <button
            className={aba === "blog" ? "active" : ""}
            onClick={() => setAba("blog")}
          >
            <i className="fas fa-blog"></i> Meu Blog
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
          <h1>Bem-vindo, {perfil.nome.split(" ")[0]}!</h1>
          <p>Gerencie seu perfil e suas publicações</p>
        </header>

        {aba === "perfil" && (
          <div className="perfil-section">
            <div className="perfil-card">
              <div className="perfil-header">
                <div className="perfil-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="perfil-info">
                  <h2>{perfil.nome}</h2>
                  <p>{perfil.serie}</p>
                </div>
                <button
                  className="btn-edit"
                  onClick={() => setEditando(!editando)}
                >
                  <i className="fas fa-edit"></i> {editando ? "Cancelar" : "Editar"}
                </button>
              </div>

              {editando ? (
                <div className="perfil-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nome Completo</label>
                      <input
                        type="text"
                        value={perfil.nome}
                        onChange={(e) =>
                          setPerfil({ ...perfil, nome: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        value={perfil.email}
                        onChange={(e) =>
                          setPerfil({ ...perfil, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Telefone</label>
                      <input
                        type="tel"
                        value={perfil.telefone}
                        onChange={(e) =>
                          setPerfil({ ...perfil, telefone: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Cidade</label>
                      <input
                        type="text"
                        value={perfil.cidade}
                        onChange={(e) =>
                          setPerfil({ ...perfil, cidade: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Biografia</label>
                    <textarea
                      value={perfil.biografia}
                      onChange={(e) =>
                        setPerfil({ ...perfil, biografia: e.target.value })
                      }
                      rows={4}
                    />
                  </div>
                  <button className="btn-save" onClick={handleSavePerfil}>
                    Salvar Alterações
                  </button>
                </div>
              ) : (
                <div className="perfil-details">
                  <div className="detail-item">
                    <i className="fas fa-envelope"></i>
                    <span>{perfil.email}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-phone"></i>
                    <span>{perfil.telefone}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{perfil.cidade}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>{perfil.serie}</span>
                  </div>
                  <div className="perfil-bio">
                    <h4>Sobre mim</h4>
                    <p>{perfil.biografia}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {aba === "blog" && (
          <div className="blog-section">
            <div className="blog-header">
              <h2>Minhas Publicações</h2>
              <button
                className="btn-new-post"
                onClick={() =>
                  document.getElementById("novo-post")?.classList.toggle("hidden")
                }
              >
                <i className="fas fa-plus"></i> Novo Post
              </button>
            </div>

            <div id="novo-post" className="novo-post-form hidden">
              <h3>Criar Nova Publicação</h3>
              <form onSubmit={handleCriarPost}>
                <div className="form-group">
                  <label>Título</label>
                  <input
                    type="text"
                    value={novoPost.titulo}
                    onChange={(e) =>
                      setNovoPost({ ...novoPost, titulo: e.target.value })
                    }
                    placeholder="Digite o título do post"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Conteúdo</label>
                  <textarea
                    value={novoPost.conteudo}
                    onChange={(e) =>
                      setNovoPost({ ...novoPost, conteudo: e.target.value })
                    }
                    placeholder="Escreva seu post..."
                    rows={5}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-post">
                    Publicar
                  </button>
                </div>
              </form>
            </div>

            <div className="posts-list">
              {posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <h3>{post.titulo}</h3>
                    <span className="post-date">{post.data}</span>
                  </div>
                  <p className="post-content">{post.conteudo}</p>
                  <div className="post-footer">
                    <span className="post-stats">
                      <i className="fas fa-heart"></i> {post.likes}
                      <i className="fas fa-comment"></i> {post.comentarios}
                    </span>
                    <div className="post-actions">
                      <button className="btn-action">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-action btn-delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
