"use client";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [dados, setDados] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);

  async function buscarClima(cidade: string) {
    setCarregando(true);
    const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;
    
    try {
      const res = await fetch(url);
      const json = await res.json();
      setDados(json);
    } catch (e) { 
      console.error("Erro na busca:", e); 
    }
    setCarregando(false);
  }

  return (
    <main style={{ padding: '20px', textAlign: 'center', maxWidth: '500px' }}>
      <h1>☁️ WeatherNow</h1>
      
      {/* SEÇÃO DE BUSCA DENTRO DE UM CARD */}
      <div className="card" style={{ marginBottom: '30px', padding: '25px' }}>
        <p style={{ marginBottom: '15px', opacity: 0.9 }}>
          Busque o clima de qualquer cidade do mundo!
        </p>
        <SearchBar onSearch={buscarClima} />
      </div>
      
      {carregando && <p className="inner-content" style={{ textAlign: 'center' }}>Buscando clima...</p>}
      
      {dados && dados.main && (
        <div style={{ marginTop: '20px' }}>
          <WeatherCard 
            cidade={dados.name} 
            temperatura={dados.main.temp} 
            sensacaoTermica={dados.main.feels_like}
            descricao={dados.weather[0].description}
            icone={dados.weather[0].icon}
          />
          <div style={{ marginTop: '20px' }}>
            <Link href={`/cidade/${dados.name}`} className="button-style">
              Ver Detalhes
            </Link>
          </div>
        </div>
      )}

      {/* LINK "SOBRE" AGORA COMO UM BOTÃO DISCRETO */}
      <div style={{ marginTop: '50px' }}>
        <Link href="/sobre" className="button-style" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>
          Sobre o projeto
        </Link>
      </div>
    </main>
  );
}