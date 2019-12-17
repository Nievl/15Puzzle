import React from "react";

function App() {
  return (
    <>
      <header>15 Puzzle</header>
      <main>
        <div className="board">board</div>
        <div className="help">перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.</div>
      </main>
      <footer>
        <a href="https://github.com/Nievl/15Puzzle" target="_blank" rel="noopener noreferrer">
          &copy; 2019, Nievl
        </a>
      </footer>
    </>
  );
}

export default App;
