import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export function GameProvider({
    children
}) {
    const [squareValues, setSquareValues] = useState([null, null, null, null, null, null, null, null, null])
    const [currentValue, setCurrentValue] = useState(null)
    const [winner, setWinner] = useState(null)

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

    function resetSquareValues(){
        setSquareValues([null, null, null, null, null, null, null, null, null])
        setCurrentValue(null)
    }

    useEffect(()=>{
        checkAndSetWinner()
    }, [squareValues])

    function checkAndSetWinner() {
        if ((squareValues[0] === 'X' && squareValues[1] === 'X' && squareValues[2] === 'X') ||
            (squareValues[3] === 'X' && squareValues[4] === 'X' && squareValues[5] === 'X') ||
            (squareValues[6] === 'X' && squareValues[7] === 'X' && squareValues[8] === 'X') ||
            (squareValues[0] === 'X' && squareValues[3] === 'X' && squareValues[6] === 'X') ||
            (squareValues[1] === 'X' && squareValues[4] === 'X' && squareValues[7] === 'X') ||
            (squareValues[2] === 'X' && squareValues[5] === 'X' && squareValues[8] === 'X') ||
            (squareValues[0] === 'X' && squareValues[4] === 'X' && squareValues[8] === 'X') ||
            (squareValues[2] === 'X' && squareValues[4] === 'X' && squareValues[6] === 'X')) {
            setWinner('X')
        } else if ((squareValues[0] === 'O' && squareValues[1] === 'O' && squareValues[2] === 'O') ||
            (squareValues[3] === 'O' && squareValues[4] === 'O' && squareValues[5] === 'O') ||
            (squareValues[6] === 'O' && squareValues[7] === 'O' && squareValues[8] === 'O') ||
            (squareValues[0] === 'O' && squareValues[3] === 'O' && squareValues[6] === 'O') ||
            (squareValues[1] === 'O' && squareValues[4] === 'O' && squareValues[7] === 'O') ||
            (squareValues[2] === 'O' && squareValues[5] === 'O' && squareValues[8] === 'O') ||
            (squareValues[0] === 'O' && squareValues[4] === 'O' && squareValues[8] === 'O') ||
            (squareValues[2] === 'O' && squareValues[4] === 'O' && squareValues[6] === 'O')) {
            setWinner('O')
        }
    }

    console.log(squareValues)

    const gameContextValues = {
        setSquareValuesState,
        squareValues,
        winner,
        setWinner,
        resetSquareValues
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