import "./App.css";

function App() {
  let name = "Yash";
  return (
    <div className="app">
      <nav>
        <ul>
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/">About</a>
          </li>
          <li className="nav-link">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
