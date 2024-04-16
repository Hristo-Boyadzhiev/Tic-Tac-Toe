import { Route, Routes } from "react-router-dom";
import { Board } from "./components/Board/Board";
import { GameProvider } from "./components/Context/GameContext";
import { Winner } from "./components/Winner/Winner";

function App() {
  return (
    <>
      <GameProvider>
        <Routes>
          <Route path='/' element={<Board />} />
          <Route path='/winner' element={<Winner/>} />
        </Routes> 

      </GameProvider>
    </>

  );
}

export default App;
