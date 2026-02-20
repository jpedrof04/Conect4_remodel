import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://www.barracred.com.br/wp-content/uploads/2023/08/barracred.png"
            alt="Barracred Conecta"
          />
          <p>
            Nosso foco é transformar vidas por meio da educação e da tecnologia.
            Criamos experiências e soluções que fazem sentido para os jovens e para
            a realidade em que vivem. Tudo o que oferecemos nasce do nosso
            compromisso com o futuro deles.
          </p>
        </div>
        <div className="footer-info">
          <h4>Contato</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Rua Ferrucio Bolla, 613.
              Barra Bonita - SP
            </li>
            <li>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:141996680366">(14) 99668-0366</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:social@barracred.com.br">
                social@barracred.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#sobre">Quem Somos</Link>
            </li>
            <li>
              <Link href="/#conteudo">Conteúdo</Link>
            </li>
            <li>
              <Link href="/#participar">Como Participar</Link>
            </li>
            <li>
              <Link href="/#equipe">Equipe</Link>
            </li>
            <li>
              <Link href="/inscricao">Inscrever-se</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 Todos os Direitos Reservados <strong>Barracred Conecta</strong>
        </p>
      </div>
    </footer>
  );
}
