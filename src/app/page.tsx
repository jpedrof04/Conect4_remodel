import Link from "next/link";

const conteudos = [
  {
    icon: "fa-brain",
    title: "Habilidades Pessoais e Profissionais",
    desc: "Trabalhamos autoconhecimento, empatia, habilidades socioemocionais e competências profissionais para formar jovens autônomos e preparados para o mercado de trabalho.",
  },
  {
    icon: "fa-laptop-code",
    title: "Tecnologia da Informação",
    desc: "Os alunos aprendem desde sistemas operacionais e hardware até programação, banco de dados e desenvolvimento (front-end, back-end e mobile), preparando-se para o mercado de TI conforme seu perfil e interesse.",
  },
  {
    icon: "fa-language",
    title: "Inglês Técnico",
    desc: "O inglês é uma ferramenta essencial para o mercado de trabalho. Nesse ponto focamos no vocabulário e expressões do mundo corporativo para uma comunicação clara e eficiente.",
  },
  {
    icon: "fa-people-carry",
    title: "Cooperativismo na Prática",
    desc: "Os jovens aprendem os princípios do cooperativismo, o papel das cooperativas e vivenciam na prática o trabalho em modelo colaborativo.",
  },
  {
    icon: "fa-microphone-alt",
    title: "Palestras Imersivas",
    desc: "Profissionais de diversas áreas compartilham experiências e desafios do mercado, estimulando reflexão e inspirando os jovens a serem protagonistas de suas carreiras.",
  },
  {
    icon: "fa-graduation-cap",
    title: "Estágios e Oportunidades",
    desc: "Facilitamos oportunidades reais de trabalho e estágios através de parcerias com empresas, ajudando os jovens a aplicar suas habilidades e dar o primeiro passo na carreira.",
  },
];

const missoes = [
  {
    icon: "fa-bullseye",
    title: "Criar Oportunidades",
    desc: "Para que os jovens se conheçam melhor e ampliem sua visão de futuro.",
  },
  {
    icon: "fa-tools",
    title: "Oferecer Ferramentas",
    desc: "Para que construam seus próprios caminhos com confiança.",
  },
  {
    icon: "fa-users",
    title: "Formar Talentos",
    desc: "Engajados com a comunidade e comprometidos com o bem coletivo.",
  },
  {
    icon: "fa-handshake",
    title: "Fortalecer o Cooperativismo",
    desc: "Como modelo de transformação social e inclusão.",
  },
];

const equipe = [
  {
    nome: "Andresa",
    cargo: "Coordenadora",
    foto: "https://www.barracredconecta.com.br/assets/images/team/andresa.jpg",
    linkedin: "https://www.linkedin.com/in/andresa-baratela-2b5544240/",
    instagram: "https://www.instagram.com/andresabaratela/",
  },
  {
    nome: "Adilson",
    cargo: "Assistente de Coordenação",
    foto: "https://www.barracredconecta.com.br/assets/images/team/adilson.jpg",
    linkedin: "https://www.linkedin.com/in/adilson-nascimento-7b5a69b6",
    instagram: "https://www.instagram.com/adilsonnascy/",
  },
  {
    nome: "Profª Aline",
    cargo: "Inglês Técnico",
    foto: "https://www.barracredconecta.com.br/assets/images/team/aline.jpg",
    linkedin: "https://www.linkedin.com/in/aline-pedra-07380381",
    instagram: "https://www.instagram.com/alineropedra/",
  },
  {
    nome: "Profª Cristiane",
    cargo: "Hab. Pessoais e Profissionais",
    foto: "https://www.barracredconecta.com.br/assets/images/team/cris.jpg",
    instagram: "https://www.instagram.com/_chris_alvess_/",
  },
  {
    nome: "Prof. Gallo",
    cargo: "Tecnologia da Informação",
    foto: "https://www.barracredconecta.com.br/assets/images/team/gallo2.jpg",
    linkedin: "https://www.linkedin.com/in/gallo-junior/",
    github: "https://www.github.com/gallojunior",
  },
  {
    nome: "Profª Vera",
    cargo: "Hab. Pessoais e Profissionais",
    foto: "https://www.barracredconecta.com.br/assets/images/team/vera.jpg",
    linkedin: "https://www.linkedin.com/in/vera-prado-scudeleti-b54912177/",
    instagram: "https://www.instagram.com/veramaraprado/",
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero">
        <div className="decorative-line top"></div>
        <div className="decorative-line bottom"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-graduation-cap"></i>
            Programa Social da Cooperativa Barracred
          </div>
          <h1>
            Barracred <span>Conecta</span>
          </h1>
          <h2>Criando Oportunidades e Cooperando para o Futuro</h2>
          <p>
            Aqui, acreditamos que cada jovem carrega um mundo de possibilidades.
            Foi por isso que criamos este espaço: para inspirar, capacitar e criar
            conexões com o futuro por meio da educação, do conhecimento e do
            desenvolvimento humano.
          </p>
          <p>
            Somos um Programa Social da Cooperativa Barracred, desenvolvido com
            carinho para abrir caminhos e oferecer oportunidades reais à jovens que
            desejam crescer como pessoas, desenvolver suas habilidades
            profissionais e assumir, com consciência, seu papel na sociedade.
          </p>
          <p className="destaque">
            Porque quando a gente coopera, a transformação acontece! E é com esse
            espírito que seguimos firmes na missão da Barracred: Cooperar para
            transformar vidas
          </p>
          <div className="hero-btns">
            <Link href="/inscricao" className="btn-primary">
              Quero Me Inscrever
            </Link>
            <Link href="#sobre" className="btn-secondary">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">O que é o Barracred Conecta?</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                O Barracred Conecta é muito mais do que uma capacitação. É uma
                porta de entrada para um novo mundo. Um programa pensado para
                preparar jovens para os desafios de hoje e as oportunidades de
                amanhã, com uma formação que une técnica, propósito e valores.
              </p>
              <p>
                Com aulas de Tecnologia da Informação, Inglês Técnico, Educação
                Financeira e Desenvolvimento de Habilidades Pessoais e Profissionais,
                buscamos formar jovens confiantes, preparados e conscientes,
                capazes de atuar com protagonismo na vida e no trabalho.
              </p>
              <p>
                Além da formação, oferecemos acompanhamento psicológico e apoio
                integral, cuidando também da saúde emocional dos alunos ao longo da
                jornada.
              </p>
              <p className="destaque">
                E tudo isso é oferecido de forma totalmente gratuita, graças ao
                investimento da Cooperativa Barracred!
              </p>
            </div>
            <div className="sobre-beneficios">
              <h3>O que a Barracred garante aos participantes:</h3>
              <ul className="beneficios-list">
                <li>
                  <i className="fas fa-check"></i> Material didático
                </li>
                <li>
                  <i className="fas fa-check"></i> Uniforme
                </li>
                <li>
                  <i className="fas fa-check"></i> Vale-transporte
                </li>
                <li>
                  <i className="fas fa-check"></i> Alimentação
                </li>
                <li>
                  <i className="fas fa-check"></i> Equipamentos individuais
                </li>
                <li>
                  <i className="fas fa-check"></i> Laboratório técnico equipado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionporque">
        <div className="container">
          <h2 className="section-title">Por que fazemos o que fazemos?</h2>
          <p className="section-subtitle">
            Porque acreditamos que transformar o futuro começa por acreditar nas
            pessoas. Cada jovem carrega um potencial único que merece ser
            desenvolvido com cuidado, respeito e oportunidade.
          </p>
          <p className="section-subtitle">
            Quando um jovem é fortalecido, ele transforma não só a própria vida,
            mas também o mundo ao seu redor. É essa mudança que nos move todos os
            dias.
          </p>
          <div className="missao-grid">
            {missoes.map((missao, index) => (
              <div key={index} className="missao-card">
                <i className={`fas ${missao.icon}`}></i>
                <h4>{missao.title}</h4>
                <p>{missao.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className="section conteudo">
        <div className="container">
          <h2 className="section-title">O que você vai aprender?</h2>
          <div className="conteudo-grid">
            {conteudos.map((item, index) => (
              <div key={index} className="conteudo-card">
                <i className={`fas ${item.icon}`}></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section turma-banner">
        <div className="turma-banner-bg">
          <img src="/img/alunos.png" alt="Nossos alunos" />
        </div>
        <div className="turma-banner-overlay"></div>
        <div className="container">
          <div className="turma-banner-content">
            <h2>Transformando Vidas Através da Educação</h2>
            <p>Mais do que capacitação técnica, formamos jovens prontos para transformar o futuro.</p>
            <div className="turma-banner-stats">
              <div className="banner-stat">
                <i className="fas fa-graduation-cap"></i>
                <span>Formação Completa</span>
              </div>
              <div className="banner-stat">
                <i className="fas fa-heart"></i>
                <span>Acompanhamento Humano</span>
              </div>
              <div className="banner-stat">
                <i className="fas fa-rocket"></i>
                <span>Oportunidades Reais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="turma" className="section turma">
        <div className="container">
          <h2 className="section-title">Nossa Turma</h2>
          <p className="section-subtitle">
            Conheça os jovens que fazem parte do Barracred Conecta. Cada pessoa
            aqui carrega um sonho e está construindo seu próprio caminho.
          </p>

          <div className="turma-gallery">
            <div className="turma-card">
              <div className="turma-image">
                <img src="/img/geral-pc.png" alt="Turma trabalhando no laboratório" />
              </div>
              <div className="turma-info">
                <i className="fas fa-laptop-code"></i>
                <h4>Aulas Práticas</h4>
                <p>Aprendendo tecnologia em nosso laboratório equipado</p>
              </div>
            </div>
            <div className="turma-card">
              <div className="turma-image">
                <img src="/img/apresentação.png" alt="Apresentação da turma" />
              </div>
              <div className="turma-info">
                <i className="fas fa-microphone-alt"></i>
                <h4>Apresentações</h4>
                <p>Desenvolvendo habilidades de comunicação e apresentação</p>
              </div>
            </div>
            <div className="turma-card">
              <div className="turma-image">
                <img src="/img/mural.png" alt="Mural da turma" />
              </div>
              <div className="turma-info">
                <i className="fas fa-users"></i>
                <h4>Trabalho em Equipe</h4>
                <p>Colaborando e aprendendo juntos</p>
              </div>
            </div>
          </div>

          <div className="turma-stats">
            <div className="stat-item">
              <span className="stat-number">20</span>
              <span className="stat-label">Jovens por turma</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Meses de formação</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Gratuito</span>
            </div>
          </div>
        </div>
      </section>

      <section id="participar" className="section participar">
        <div className="container">
          <h2 className="section-title">Quem pode participar?</h2>
          <div className="participar-content">
            <div className="participar-info">
              <p>
                O programa é destinado à{" "}
                <strong>jovens entre 16 e 20 anos</strong> que buscam mais do que
                conhecimento técnico: buscam uma experiência de transformação
                pessoal e profissional.
              </p>
              <div className="participar-destaques">
                <div className="destaque-item">
                  <i className="fas fa-clock"></i>
                  <span>
                    <strong>Duração:</strong> 10 meses
                  </span>
                </div>
                <div className="destaque-item">
                  <i className="fas fa-users"></i>
                  <span>
                    <strong>Vagas atuais:</strong> 20
                  </span>
                </div>
              </div>
              <div className="vagas-info">
                <div className="vaga-item">
                  <span className="vaga-porcentagem">70%</span>
                  <span>Para filhos ou dependentes de cooperados da Barracred</span>
                </div>
                <div className="vaga-item">
                  <span className="vaga-porcentagem">30%</span>
                  <span>Para jovens da comunidade em geral</span>
                </div>
              </div>
            </div>
            <div className="requisitos-box">
              <h3>Requisitos:</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Ter entre 16 e 20 anos
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Estar cursando ou ter
                  concluído a educação básica na <strong>rede pública</strong>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Residir em{" "}
                  <strong>Barra Bonita</strong> ou{" "}
                  <strong>Igaraçu do Tietê - SP</strong>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Ter{" "}
                  <strong>comprometimento e disponibilidade</strong> para
                  participar integralmente da formação
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="inscrever" className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Gostou do Programa?</h2>
            <p>
              Faça parte você também desta transformação. Inscreva-se para
              próximas turmas!
            </p>
            <Link href="/inscricao" className="btn-primary btn-large">
              <i className="fas fa-clipboard-list"></i> Quero Me Inscrever
            </Link>
          </div>
        </div>
      </section>

      <section id="equipe" className="section equipe">
        <div className="container">
          <h2 className="section-title">Quem está com você nessa?</h2>
          <p className="section-subtitle">
            Construímos uma equipe sólida, capaz de oferecer aos jovens alunos do
            Programa, oportunidades para desenvolver suas habilidades e adquirir
            as competências necessárias ao mundo atual.
          </p>
          <p className="section-subtitle">
            Nosso time é composto de profissionais especializados, capazes e
            dedicados a formação de jovens, desde o básico comportamental até
            conceitos avançados de programação e tecnologia para desenvolver
            habilidades baseadas em conceitos atuais do mercado de trabalho.
          </p>
          <p className="section-subtitle">
            Estamos aqui para apoiar, ensinar, escutar e caminhar junto com você
            — com respeito, acolhimento e entusiasmo.
          </p>

          <div className="equipe-grid">
            {equipe.map((membro, index) => (
              <div key={index} className="equipe-card">
                <div className="equipe-foto">
                  <img src={membro.foto} alt={membro.nome} />
                </div>
                <h4>{membro.nome}</h4>
                <span className="cargo">{membro.cargo}</span>
                <div className="equipe-social">
                  {membro.linkedin && (
                    <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {membro.instagram && (
                    <a href={membro.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {membro.github && (
                    <a href={membro.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="parceiros" className="section parceiros">
        <div className="container">
          <h2 className="section-title">Seja um parceiro dessa transformação</h2>
          <p className="section-subtitle">
            Você é empresário, profissional ou representa uma empresa e quer
            investir em jovens talentos? O Barracred Conecta está sempre aberto a
            parcerias que acreditam na educação e no desenvolvimento social como
            motor de mudança.
          </p>
          <div className="parceiros-content">
            <div className="parceiro-item">
              <i className="fas fa-briefcase"></i>
              <h4>Ofereça Oportunidades</h4>
              <p>Estágios e vagas de emprego para nossos jovens</p>
            </div>
            <div className="parceiro-item">
              <i className="fas fa-chalkboard-teacher"></i>
              <h4>Compartilhe Conhecimento</h4>
              <p>Palestras e mentorias</p>
            </div>
            <div className="parceiro-item">
              <i className="fas fa-handshake"></i>
              <h4>Facilite Conexões</h4>
              <p>Networking com o mercado</p>
            </div>
          </div>
        </div>
      </section>

      <section id="aluno" className="section area-aluno">
        <div className="container">
          <div className="aluno-box">
            <i className="fas fa-user-graduate"></i>
            <h2>Área do Aluno</h2>
            <p>
              Bem-vindo à área exclusiva para alunos do Barracred Conecta. Aqui
              você encontrará recursos, materiais e informações importantes sobre o
              programa.
            </p>
            <div className="aluno-recursos">
              <a href="#" className="recurso-card">
                <i className="fas fa-book"></i>
                <span>Material Didático</span>
              </a>
              <a href="#" className="recurso-card">
                <i className="fas fa-calendar-alt"></i>
                <span>Calendário de Aulas</span>
              </a>
              <a href="#" className="recurso-card">
                <i className="fas fa-video"></i>
                <span>Aulas Gravadas</span>
              </a>
              <a href="#" className="recurso-card">
                <i className="fas fa-envelope"></i>
                <span>Fale com a Coordenação</span>
              </a>
            </div>
            <div className="aluno-login">
              <p>Para acessar, utilize suas credenciais fornecidas pela coordenação.</p>
              <a href="#" className="btn-aluno-login">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
