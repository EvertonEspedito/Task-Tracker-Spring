
import "./about.css";

function About() {
return (
    <div className="sobre-container">
      <h1>Sobre o Projeto</h1>

      <p className="descricao">
        O <strong>Task Tracker</strong> é uma aplicação desenvolvida para
        auxiliar no controle e organização de tarefas do dia a dia,
        oferecendo uma visão clara do progresso através de indicadores
        e gráficos.
      </p>

      <section className="bloco">
        <h2>🎯 Objetivo</h2>
        <p>
          Facilitar o gerenciamento de tarefas, permitindo criar, editar,
          excluir e acompanhar o status das atividades de forma simples
          e intuitiva.
        </p>
      </section>

      <section className="bloco">
        <h2>🛠️ Tecnologias Utilizadas</h2>
        <ul>
          <li><strong>Frontend:</strong> React + Vite + TypeScript</li>
          <li><strong>Backend:</strong> Spring Boot (Java)</li>
          <li><strong>Banco de Dados:</strong> H2 / PostgreSQL</li>
          <li><strong>Gráficos:</strong> Recharts</li>
        </ul>
      </section>

      <section className="bloco">
        <h2>📊 Funcionalidades</h2>
        <ul>
          <li>Cadastro de tarefas</li>
          <li>Edição e exclusão</li>
          <li>Marcação como concluída ou pendente</li>
          <li>Dashboard com indicadores</li>
          <li>Gráficos de acompanhamento</li>
        </ul>
      </section>

      <footer className="autor">
        <p>
          Desenvolvido por <strong>Everton Santos</strong>
        </p>
      </footer>
    </div>
  );
}

export default About;
