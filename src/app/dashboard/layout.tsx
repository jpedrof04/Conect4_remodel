import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barracred Conecta - Dashboard",
  description: "Painel do Barracred Conecta",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
