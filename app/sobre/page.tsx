import Link from "next/link";

export default function Sobre() {
  return (
    <main className="card" style={{ maxWidth: '700px', margin: '20px' }}>
      <h1>📋 Sobre o Projeto</h1>
      
      <div className="inner-content">
        <section style={{ marginBottom: '25px' }}>
          <h2 style={{ color: 'var(--accent-gold)', borderBottom: '1px solid rgba(234, 179, 8, 0.3)', paddingBottom: '8px' }}>
            👨‍💻 Perfil do Desenvolvedor
          </h2>
          <div style={{ marginTop: '10px', lineHeight: '1.8' }}>
            <p><strong>Nome:</strong> Ryan da Silva Benedito</p>
            <p><strong>Matrícula:</strong> (Insira sua matrícula aqui)</p>
            <p><strong>Curso:</strong> Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</p>
            <p><strong>Instituição:</strong> Faculdade de Educação Tecnológica do Estado do Rio de Janeiro – FAETERJ</p>
            <p><strong>Unidade:</strong> Barra Mansa</p>
          </div>
        </section>

        <section>
          <h2 style={{ color: 'var(--accent-gold)', borderBottom: '1px solid rgba(234, 179, 8, 0.3)', paddingBottom: '8px' }}>
            🚀 O Projeto WeatherNow
          </h2>
          <div style={{ marginTop: '10px', lineHeight: '1.6' }}>
            <p>
              O <strong>WeatherNow</strong> é uma aplicação web de alta performance desenvolvida como parte da avaliação acadêmica. 
              O portal permite a consulta em tempo real de dados meteorológicos de qualquer localidade global.
            </p>
            
            <h3 style={{ marginTop: '15px', fontSize: '1.1rem' }}>Tecnologias Utilizadas:</h3>
            <ul style={{ marginLeft: '20px', marginTop: '10px', listStyleType: 'square' }}>
              <li><strong>Linguagem:</strong> TypeScript para tipagem estática e segurança de código</li>
              <li><strong>Consumo de API:</strong> Integração com OpenWeatherMap API</li>
              <li><strong>Estilização:</strong> CSS3 Moderno com variáveis e Glassmorphism</li>
            </ul>
          </div>
        </section>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link href="/" className="button-style">
           Voltar ao Portal
        </Link>
      </div>
    </main>
  );
}