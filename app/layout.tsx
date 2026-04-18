import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeatherNow | Previsão do Tempo",
  description: "Desenvolvido por Ryan da Silva Benedito",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}