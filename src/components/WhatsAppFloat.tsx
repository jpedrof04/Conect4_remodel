"use client";

import { usePathname } from "next/navigation";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const isSpecialPage = pathname?.startsWith("/login") || pathname?.startsWith("/dashboard");
  
  if (isSpecialPage) {
    return null;
  }

  return (
    <a
      href="https://wa.me/5514996680366?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Barracred%20Conecta!"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
