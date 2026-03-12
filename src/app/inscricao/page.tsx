"use client";

import { useState } from "react";

const EMAIL_DESTINO = "social@barracred.com.br";

export default function Inscricao() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    email: "",
    endereco: "",
    cidade: "",
    escola: "",
    serie: "",
    cooperado: "",
    conheceu: "",
    motivos: "",
  });

  const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{3})/, "$1.$2");
    }

    setFormData((prev) => ({ ...prev, cpf: value }));
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{4})/, "($1) $2");
    }

    setFormData((prev) => ({ ...prev, telefone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensagem({ tipo: "", texto: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/" + EMAIL_DESTINO,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            cpf: formData.cpf,
            nascimento: formData.nascimento,
            telefone: formData.telefone,
            email: formData.email,
            endereco: formData.endereco,
            cidade: formData.cidade,
            escola: formData.escola,
            serie: formData.serie,
            cooperado: formData.cooperado,
            conheceu: formData.conheceu,
            motivos: formData.motivos,
            _subject: "Nova Inscrição - Barracred Conecta",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setMensagem({
          tipo: "sucesso",
          texto: "Inscrição enviada com sucesso! Em breve entraremos em contato.",
        });
        setFormData({
          nome: "",
          cpf: "",
          nascimento: "",
          telefone: "",
          email: "",
          endereco: "",
          cidade: "",
          escola: "",
          serie: "",
          cooperado: "",
          conheceu: "",
          motivos: "",
        });
      } else {
        setMensagem({
          tipo: "erro",
          texto: "Erro ao enviar inscrição. Tente novamente ou entre em contato pelo WhatsApp.",
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem({
        tipo: "erro",
        texto: "Erro ao enviar inscrição. Tente novamente ou entre em contato pelo WhatsApp.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="inscricao-page">
      <div className="container">
        <div className="inscricao-header">
          <h1>Inscreva-se para Novas Turmas</h1>
          <p>
            Preencha o formulário abaixo para se candidatar ao programa Barracred
            Conecta
          </p>
        </div>

        <form id="form-inscricao" className="form-inscricao" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Dados Pessoais</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF *</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleCpfChange}
                  required
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nascimento">Data de Nascimento *</label>
                <input
                  type="date"
                  id="nascimento"
                  name="nascimento"
                  value={formData.nascimento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone/WhatsApp *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleTelefoneChange}
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Endereço</h3>
            <div className="form-group">
              <label htmlFor="endereco">Endereço Completo *</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cidade">Cidade *</label>
                <select
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione sua cidade</option>
                  <option value="Barra Bonita">Barra Bonita - SP</option>
                  <option value="Igaraçu do Tietê">Igaraçu do Tietê - SP</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Informações Educacionais</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="escola">Escola onde estuda/estudou *</label>
                <input
                  type="text"
                  id="escola"
                  name="escola"
                  value={formData.escola}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="serie">Série/Ano que está cursando *</label>
                <select
                  id="serie"
                  name="serie"
                  value={formData.serie}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1 ano EM">1º Ano do Ensino Médio</option>
                  <option value="2 ano EM">2º Ano do Ensino Médio</option>
                  <option value="3 ano EM">3º Ano do Ensino Médio</option>
                  <option value="Ja conclui">Já concluí</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Informações Adicionais</h3>
            <div className="form-group">
              <label>É filho/dependente de cooperado da Barracred? *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cooperado"
                    value="sim"
                    checked={formData.cooperado === "sim"}
                    onChange={handleChange}
                    required
                  />
                  <span>Sim</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="cooperado"
                    value="nao"
                    checked={formData.cooperado === "nao"}
                    onChange={handleChange}
                  />
                  <span>Não</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="conheceu">Como ficou sabendo do programa?</label>
              <select
                id="conheceu"
                name="conheceu"
                value={formData.conheceu}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="Redes Sociais">Redes Sociais</option>
                <option value="Amigos/Familia">Amigos/Família</option>
                <option value="Escola">Escola</option>
                <option value="Cooperado">Cooperado Barracred</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="motivos">Por que deseja participar do programa? *</label>
              <textarea
                id="motivos"
                name="motivos"
                value={formData.motivos}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar Inscrição"}
          </button>
        </form>
        {mensagem.texto && (
          <div id="form-mensagem" className={`form-mensagem ${mensagem.tipo}`}>
            {mensagem.texto}
          </div>
        )}
      </div>
    </section>
  );
}
