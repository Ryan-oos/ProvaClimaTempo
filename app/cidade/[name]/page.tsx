import Link from "next/link";
import WeatherCard from "../../../components/WeatherCard";

export default async function Detalhes({ params }: any) {
  const { name } = await params;
  const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${chave}&units=metric&lang=pt_br`);
  const dados = await res.json();

  return (
    <main>
      <h1>Detalhes de {name}</h1>
      <WeatherCard 
        cidade={dados.name}
        temperatura={dados.main.temp}
        sensacaoTermica={dados.main.feels_like}
        descricao={dados.weather[0].description}
        icone={dados.weather[0].icon}
        umidade={dados.main.humidity}
        vento={dados.wind.speed}
        pais={dados.sys.country}
      />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link href="/" className="button-style">Voltar para Busca</Link>
      </div>
    </main>
  );
}