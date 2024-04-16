import { GameProvider } from "./Context/GameContext";
import { Board } from "./components/Board/Board";

function App() {
  return (
    <>
      <GameProvider>
        <Board />
      </GameProvider>
    </>

  );
}

export default App;
