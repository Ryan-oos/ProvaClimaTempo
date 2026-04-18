import Image from "next/image";

export default function WeatherCard({ cidade, temperatura, sensacaoTermica, descricao, icone, umidade, vento }: any) {
  const urlIcone = `https://openweathermap.org/img/wn/${icone}@4x.png`;
  return (
    <div className="card">
      <h2>{cidade}</h2>
      <Image src={urlIcone} alt={descricao} width={100} height={100} unoptimized />
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{temperatura.toFixed(1)}°C</p>
      <p>Sensação: {sensacaoTermica.toFixed(1)}°C</p>
      <p style={{ textTransform: 'capitalize' }}>{descricao}</p>
      
      {umidade && (
        <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <span className="inner-content">💧 {umidade}%</span>
          <span className="inner-content">💨 {vento} m/s</span>
        </div>
      )}
    </div>
  );
}