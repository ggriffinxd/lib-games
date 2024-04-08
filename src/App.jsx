import { useState } from "react";
import Game from "./components/Game";
import FormGame from "./components/FormGame";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const { addGame, removeGame, games } = useGameCollection();

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <FormGame addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
              title={game.title}
            />
          ))
        ) : (
          <h2 style={{ margin: "4rem auto" }}>Sem jogos registrados!</h2>
        )}
      </div>
    </div>
  );
}
