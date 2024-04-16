import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({
    children
}) {
    const [squareValues, setSquareValues] = useState([null, null, null, null, null, null, null, null, null])
    const [currentValue, setCurrentValue] = useState(null)

    function setSquareValuesState(index) {
        if (squareValues[index] === null) {

            switch (currentValue) {
                case 'X':
                    setCurrentValue('O')
                    setSquareValues(squareValues => squareValues.map((value, i) => i === index ? value = 'O' : value))
                    break;

                case 'O':
                    setCurrentValue('X')
                    setSquareValues(squareValues => squareValues.map((value, i) => i === index ? value = 'X' : value))
                    break;

                default:
                    setCurrentValue('X')
                    setSquareValues(squareValues => squareValues.map((value, i) => i === index ? value = 'X' : value))
                    break;
            }
        }
    }

    console.log(squareValues)

    const gameContextValues = {
        setSquareValuesState,

    }

    return (
        <GameContext.Provider value={gameContextValues}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => {
    const context = useContext(GameContext)
    return context
}