import React from "react";
import { Board } from "./Board";

const App = () => {
  return (
    <div className="app">
      <header>15 Puzzle</header>
      <main>
        <Board />
        <div className="help">Перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.</div>
      </main>
      <footer>
        <a href="https://github.com/Nievl/15Puzzle" target="_blank" rel="noopener noreferrer">
          &copy; 2019, Nievl
        </a>
      </footer>
    </div>
  );
};

export default App;
