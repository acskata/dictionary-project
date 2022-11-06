import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="dictionary"/>
        </main>
        <footer className="text-center">
        <small>
        <a
          href="https://github.com/acskata/dictionary-project"
          target="_blank" rel="noreferrer"
        >
          Open-sourced
        </a>
        <span> by Kata Acs</span>
      </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
