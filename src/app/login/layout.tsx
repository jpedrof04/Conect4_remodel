import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barracred Conecta - Login",
  description: "Área restrita do Barracred Conecta",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
