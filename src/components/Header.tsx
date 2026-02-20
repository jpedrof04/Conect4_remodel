"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMoon,
  faSun,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const isHomePage = pathname === "/";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#sobre", label: "Quem Somos" },
    { href: "/#conteudo", label: "Conteúdo" },
    { href: "/#turma", label: "Turma" },
    { href: "/#participar", label: "Como Participar" },
    { href: "/#equipe", label: "Equipe" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <img
              src="https://www.barracred.com.br/wp-content/uploads/2023/08/barracred.png"
              alt="Barracred Conecta"
            />
          </Link>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {isHomePage ? (
            navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))
          ) : (
            <>
              <li>
                <Link href="/">Voltar ao Início</Link>
              </li>
            </>
          )}
          {isHomePage && (
            <>
              <li>
                <Link href="/#aluno" className="btn-aluno">
                  Área do Aluno
                </Link>
              </li>
              <li>
                <Link href="/login" className="btn-login-header">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </>
          )}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faSun} />
            </button>
          </li>
        </ul>
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
}
