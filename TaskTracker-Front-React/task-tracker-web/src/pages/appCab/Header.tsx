import "./HeaderStyle.css"

function Header() {
  return (
    <header>
      <h1 onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>Task Tracker</h1>
      <p>Organize suas tarefas com eficiência</p>
      <nav>
        <ul>
          <li><a href="#graficos">Gráficos</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
